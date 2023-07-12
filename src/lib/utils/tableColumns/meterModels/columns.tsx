/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { IMeterModel } from '@/lib/types'

import { MeterModelColumnActions } from './ColumnActions'
import { ColumnSortMeterModel } from './ColumnSort'
import { Badge, Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <MeterModelColumnActions meterModel={row.original} />
    </div>
  )
}

export const meterModelColumns: ColumnDef<IMeterModel>[] = [
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSortMeterModel column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-4'>
        { original.id }
      </div>
    )
  },
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.title}</div>
    }
  },
  {
    id: 'Descripcion',
    accessorKey: 'description',
    header: 'Descripcion'
  },
  {
    id: 'Estado',
    accessorKey: 'isActive',
    header: ({ column }) => <ColumnSortMeterModel column={column} columnLabel='Estado' />,
    cell: ({ row: { original } }) => {
      return (
        <Badge className='ml-3' variant={original.isActive ? 'success' : 'red'}>
          {original.isActive ? 'Activo' : 'Bloqueado'}
        </Badge>
      )
    }
  },
  {
    ...actionsColumn
  }
]

const selectionColumn = {
  id: 'select',
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label='Select all'
    />
  ),
  cell: ({ row, table }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label='Select row'
    />
  ),
  enableSorting: false,
  enableHiding: false
}

type TColumnActions = {
  detail?: boolean
  edit?: boolean
  create?: boolean
}

interface IGetMeterModelColumnsParams {
  selection?: boolean
  actions?: TColumnActions
}

const initialActions: TColumnActions = {
  create: false,
  detail: true,
  edit: false
}

export const getMeterModelColumns = ({ selection, actions = initialActions }: IGetMeterModelColumnsParams): ColumnDef<IMeterModel>[] => {
  if (selection) {
    const meterModelColumnsWithSelection = [selectionColumn].concat(meterModelColumns as any[])
    return meterModelColumnsWithSelection
  }

  else return meterModelColumns
}
