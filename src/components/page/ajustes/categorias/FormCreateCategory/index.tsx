import { PaginationState } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFormCreateCategory, IFormCreateFleet, IFormCreateSubcategory, ReactNode } from '@/lib/types'
import { getSubcategoryColumns } from '@/lib/utils/tableColumns/subcategories'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { subcategoryRules, categoryRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const defaultValues: IFormCreateFleet = {
  title: '',
  description: '',
  status: 'Operativo'
}

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_CITY' | 'CREATING_STATE' | 'CREATING_CITY' | 'STATE_CREATED' | 'CITY_CREATED'
}

export const FormCreateCategory = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formSubcategory = useForm<IFormCreateSubcategory>({ defaultValues })
  const [categoriesToCreate, setCategoriesToCreate] = useState<any[]>([])
  const formCategory = useForm<IFormCreateCategory>({ defaultValues })
  const router = useRouter()

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Subcategorias', singularItem: 'Subcategoria' }
  }

  const removeLocalSubCategory = (idx: string|number) => {
    setCategoriesToCreate(prevState => prevState.filter((_, subCategoryIdx) => (subCategoryIdx !== idx)))
  }

  const handleOpenCreateSubcategoryModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_CITY', open: value }))

  const onSubmitFormCategory = async (data) => {
    if (!categoriesToCreate?.length) {
      toast.error('Almenos 1 subcategoria debe ser agregada')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Categoria', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Categoria', open: true, type: 'CREATING_STATE' }))
    await simulateFetch(3000)

    setModalInfo(prevState => ({ ...prevState, type: 'STATE_CREATED', label: 'Categoria Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Categoria Creada Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })
    formCategory.reset()
    setCategoriesToCreate([])

    router.push('/ajustes/categorias')
  }

  const onSubmitFormSubcategory = async (data: IFormCreateSubcategory) => {
    setLoading(({ meessage: 'Agregando Subcategoria', value: true }))
    // setModalInfo((prevState) => ({ ...prevState, label: 'Creando Subcategoria', open: true, type: 'CREATING_SUBCATEGORY' }))
    // await simulateFetch(3000)

    const subcategoryToCreate: IFormCreateSubcategory = {
      title: data.title,
      description: data.description,
      isActive: data.isActive
    }

    console.log({ subcategoryToCreate })
    setCategoriesToCreate(prevState => [...prevState, { ...subcategoryToCreate }])

    // setModalInfo(prevState => ({ ...prevState, type: 'CATEGORY_CREATED', label: 'Subcategoria Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Subcategoria Agregada Exitosamente')
    setLoading({ meessage: '', value: false })
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    formSubcategory.reset()
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

      {/* Crear Unidad */}
      <Dialog open={modalInfo.type === 'CREATE_CITY' && modalInfo.open} onOpenChange={handleOpenCreateSubcategoryModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Subcategoria</DialogTitle>

            <DialogDescription>
              Crea una subcategoria para asignarlo a una categoria
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formSubcategory.handleSubmit(onSubmitFormSubcategory)} autoFocus className='w-full mt-4'>
            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='title'
                  type='text'
                  tabIndex={4}
                  label='Título'
                  placeholder='Pekkin'
                  register={formSubcategory.register}
                  inputErrors={subcategoryRules.title}
                  messageErrors={formSubcategory.formState.errors}
                />

                <GenericSelect
                  id='isActive'
                  tabIndex={5}
                  label='Estado'
                  defaultValue='true'
                  placeholder='Seleccione un Estado'
                  fieldControlled={{ control: formSubcategory.control, rules: subcategoryRules.isActive }}
                  items={[
                    {
                      label: 'Activo',
                      value: 'true'
                    },
                    {
                      label: 'Bloqueado',
                      value: 'false'
                    }
                  ]}
                />
              </div>

              <TextArea
                id='description'
                rows={5}
                tabIndex={6}
                label='Descripción'
                register={formSubcategory.register}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                messageErrors={formSubcategory.formState.errors}
                inputErrors={subcategoryRules.description}
              />
            </section>
          </form>

          <DialogFooter className='flex flex-col gap-y-4 mt-4'>
            <Button
              type='button'
              variant='outline'
              isLoading={loading.value}
              onClick={() => handleOpenCreateSubcategoryModal(false)}
            >
                Cancelar
            </Button>

            <Button
              type='button'
              isLoading={loading.value}
              onClick={formSubcategory.handleSubmit(onSubmitFormSubcategory)}
            >
                Crear Unidad
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-6'>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Nombre:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formCategory.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {formCategory.watch('description')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formCategory.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formCategory.handleSubmit(onSubmitFormCategory)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      register={formCategory.register}
                      label='Nombre'
                      placeholder='Pekkin'
                      messageErrors={formCategory.formState.errors}
                      inputErrors={categoryRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: formCategory.control, rules: categoryRules.isActive }}
                      items={[
                        {
                          label: 'Activo',
                          value: 'true'
                        },
                        {
                          label: 'Bloqueado',
                          value: 'false'
                        }
                      ]}
                    />
                  </div>

                  <TextArea
                    rows={5}
                    tabIndex={3}
                    id='description'
                    label='Descripción'
                    register={formCategory.register}
                    inputErrors={categoryRules.description}
                    messageErrors={formCategory.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis labore quidem.'
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Subcategoria</CardTitle>
                <CardDescription>Seleccione una subcategoria</CardDescription>
              </div>

              <Button onClick={() => handleOpenCreateSubcategoryModal(true)}>
                Crear Subcategoria
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              pagination={pagination}
              data={categoriesToCreate}
              columns={getSubcategoryColumns({ selection: false, id: false, actions: { removeLocalItem: removeLocalSubCategory } })}
              queryInfo={{ isFetching: false, error: null }}
            />
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button variant='outline' tabIndex={15} type='button' className='w-full py-2 text-sm'>
              Cancelar
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-sm'
              isLoading={loading.value}
              onClick={formCategory.handleSubmit(onSubmitFormCategory)}
            >
              Crear Categoria
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
