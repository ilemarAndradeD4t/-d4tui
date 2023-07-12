import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconTruck } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'

import type { IFetchDataTable, ICreateMeterDevice, IMeterModel, IStation, ReactNode } from '@/lib/types'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { useFetch } from '@/lib/hooks/useFetch'
import { meterDeviceRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { getMeterModelColumns } from '@/lib/utils/tableColumns/meterModels'
import { stationColumns } from '@/lib/utils/tableColumns/stations'
import { handleFetchUrlStations } from '@/lib/services/stations'
import { compressImage } from '@/lib/utils/handleCompressionImage'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_TRUCK' | 'COMPARISON_TRUCK_IMAGE' | 'CREATING_METER_DEVICE' | 'METER_DEVICE_CREATED' | 'CREATING_TRUCK_MODEL' | 'TRUCK_CREATED'
}

export const FormCreateMeterDevice = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableStationsSelected, handleTableStationsSelected] = useState<RowSelectionState>({})
  const [tableTrucksSelected, HandleTableTrucksSelected] = useState<RowSelectionState>({})
  const [fullDataMeterModelsSelected, setFullDataMeterModelsSelected] = useState([])
  const [fullDataStationsSelected, setFullDataStationsSelected] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [multipleMeterDeviceImages, setMultipleMeterDeviceImages] = useState([])
  const formMeter = useForm<ICreateMeterDevice>()

  const { data: meterModelData, error: meterModelError, isLoading: isLoadingMeterModels, fetcher: meterModelfetcher } = useFetch<IFetchDataTable<IMeterModel>>('/api/meter-models')
  const { data: stationData, error: stationError, isLoading: isLoadingStation, fetcher: stationFetcher } = useFetch<IFetchDataTable<IStation>>('/api/stations')

  const meterModelpagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Modelos', singularItem: 'Modelo' }
  }

  const stationsPagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estaciones', singularItem: 'Estación' }
  }

  const onChangeMultipleTruckImages = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setMultipleMeterDeviceImages(imageList)
  }

  const handleSearchMeterModelsWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    meterModelfetcher(url)
  }

  const handleSearchStationsWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlStations({ pageSize, pageIndex, search, filters })
    stationFetcher(url)
  }

  const getFullMeterModelDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataMeterModelsSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const getFullStationDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataStationsSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const onSubmitFormMeterDevice = async (data: ICreateMeterDevice) => {
    if (!fullDataMeterModelsSelected?.length) {
      toast.error('El modelo es requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataMeterModelsSelected?.length > 1) {
      toast.error('Seleccione solo 1 modelo')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!fullDataStationsSelected?.length) {
      toast.error('La estación es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataStationsSelected?.length > 1) {
      toast.error('Seleccione solo 1 estación')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!multipleMeterDeviceImages.length) {
      toast.error('La imagen del medidor es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    const allMultipleTruckImagesCompress = multipleMeterDeviceImages.map(image => {
      return compressImage({ imageFile: image.file, quality: 10, maxWidth: 500, maxHeight: 500 })
    })

    const allPromisesMultipleTruckImagesCompress: any[] = await Promise.allSettled(allMultipleTruckImagesCompress)
    const multipleTruckImagesCompress = allPromisesMultipleTruckImagesCompress.map(promise => promise.value)

    setLoading(({ meessage: 'Creando Medidor', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Medidor', open: true, type: 'CREATING_METER_DEVICE' }))
    await simulateFetch(3000)

    const meterDeviceToCreate: ICreateMeterDevice = {
      type: data.type,
      serial: data.serial,
      status: data.status,
      meterUnit: data.meterUnit,
      station: fullDataStationsSelected[0],
      meterModel: fullDataMeterModelsSelected[0],
      images: multipleTruckImagesCompress.map(imageCompress => imageCompress.file)
    }

    console.log({ meterDeviceToCreate })

    setModalInfo(prevState => ({ ...prevState, type: 'METER_DEVICE_CREATED', label: 'Medidor Creado', illustration: <Congratulations className='h-72' /> }))
    toast.success('Medidor Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/flotas')
  }

  return (
    <>
      <Dialog modal open={modalInfo.open}>
        <DialogContent aria-modal>
          <DialogHeader>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {loading.value && <WomanLoading className='w-72' />}
              {modalInfo.illustration}

              <div className='flex flex-col justify-center text-center items-center'>
                <h5 className='font-bold text-4xl'>{modalInfo.label}</h5>
                {loading.value && <div className='dot-flashing mt-6 ml-5'></div>}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-6'>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Serial:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formMeter.watch('serial')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Tipo de Medición:</strong>&nbsp;
                    {formMeter.watch('type')}
                  </p>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Unidad de Medición:</strong>&nbsp;
                    {formMeter.watch('meterUnit')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formMeter.watch('status')}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formMeter.handleSubmit(onSubmitFormMeterDevice)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='serial'
                      type='text'
                      register={formMeter.register}
                      label='Serial'
                      placeholder='Pekkin'
                      messageErrors={formMeter.formState.errors}
                      inputErrors={meterDeviceRules.serial}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='status'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='Operativo'
                      tabIndex={2}
                      fieldControlled={{ control: formMeter.control, rules: meterDeviceRules.status }}
                      items={[
                        {
                          label: 'Operativo',
                          value: 'Operativo'
                        },
                        {
                          label: 'En Mantenimiento',
                          value: 'Mantenimiento'
                        }
                      ]}
                    />
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <GenericSelect
                      id='type'
                      label='Tipo de medición'
                      placeholder='Seleccione un tipo de medición'
                      defaultValue='Agua'
                      tabIndex={3}
                      fieldControlled={{ control: formMeter.control, rules: meterDeviceRules.type }}
                      items={[
                        {
                          label: 'Agua',
                          value: 'Agua'
                        },
                        {
                          label: 'Gasolina',
                          value: 'Gasolina'
                        }
                      ]}
                    />

                    <GenericSelect
                      id='meterUnit'
                      label='Unidad de medición'
                      placeholder='Seleccione una unidad de medición'
                      defaultValue='Litros'
                      tabIndex={4}
                      fieldControlled={{ control: formMeter.control, rules: meterDeviceRules.meterUnit }}
                      items={[
                        {
                          label: 'Litros',
                          value: 'Litros'
                        }
                      ]}
                    />
                  </div>
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Modelos de Medidor</CardTitle>
                <CardDescription>Seleccione un modelo</CardDescription>
              </div>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={meterModelData?.results}
              pagination={meterModelpagination}
              columns={getMeterModelColumns({ selection: true })}
              queryInfo={{ isFetching: isLoadingMeterModels, error: meterModelError }}
              inputSearch={{ handleSearchWithParams: handleSearchMeterModelsWithParams, placeholder: 'Buscar Modelo' }}
              selection={{
                rowSelection: tableTrucksSelected,
                setRowSelection: HandleTableTrucksSelected,
                getFullDataSelection: getFullMeterModelDataSelection
              }}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Estaciones</CardTitle>
                <CardDescription>Seleccione una estacion</CardDescription>
              </div>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={stationData?.results}
              pagination={stationsPagination}
              columns={stationColumns}
              queryInfo={{ isFetching: isLoadingStation, error: stationError }}
              inputSearch={{ handleSearchWithParams: handleSearchStationsWithParams, placeholder: 'Buscar Estación' }}
              selection={{
                rowSelection: tableStationsSelected,
                setRowSelection: handleTableStationsSelected,
                getFullDataSelection: getFullStationDataSelection
              }}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Fotos del medidor</CardTitle>

            <Separator className='my-4' />

            <MultipleImages
              zoom
              emptyClassName='h-[300px]'
              onChange={onChangeMultipleTruckImages}
              imageToUpload={multipleMeterDeviceImages}
              uploadLabel='Cargar Fotos del Medidor'
              tabIndexs={{ upload: 4, change: 4, delete: 5 }}
              icons={{ placeholder: <IconTruck className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
            />
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button
              asChild
              variant='outline'
              tabIndex={15}
              type='button'
              className='w-full py-2 text-sm'
            >
              <Link href='/ajustes/medidores'>
                Cancelar
              </Link>
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-sm'
              isLoading={loading.value}
              onClick={formMeter.handleSubmit(onSubmitFormMeterDevice)}
            >
              Crear Medidor
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
