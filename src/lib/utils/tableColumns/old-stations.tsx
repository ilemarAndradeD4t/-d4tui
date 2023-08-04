import { IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconStatusChange } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'

import { Badge, Button, Checkbox, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IStation, IItemToFilter } from '@/lib/types'

export const StationRowActions = ({ station }: { station: IStation }) => {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Abrir menu</span>
          <IconDots className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push(`/estaciones/${station.id}`)}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Estación
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push(`/estaciones/${station.id}/editar`)}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Estación
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IStation>, columnLabel: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          { columnLabel }
          <ChevronsUpDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Ordenar</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => column.toggleSorting(true)}
        >
          <IconSortAscending className='mr-2 h-4 w-4' />
          Ascendente
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => column.toggleSorting(false)}
        >
          <IconSortDescending className='mr-2 h-4 w-4' />
          Descendente
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => column.toggleVisibility(false) }>
          <IconEyeOff className='h-4 w-4 mr-2' />
          Ocultar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const stationColumns: ColumnDef<IStation>[] = [
  {
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
  },
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
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
      return <div className='w-full'>{original.name}</div>
    }
  },
  {
    id: 'Ubicacion',
    accessorKey: 'direction',
    header: 'Ubicacion (latitud, longitud)',
    cell: ({ row: { original } }) => `${original.location.coords.lat}, ${original.location.coords.lng}`
  },
  {
    id: 'Ciudad',
    accessorKey: 'city',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Ciudad' />,
    cell: ({ row }) => (
      <div className='w-full pl-4'>
        {row.original.location.city}
      </div>
    )
  },
  {
    id: 'N. Medidores',
    accessorKey: 'meters',
    header: 'N. Medidores',
    cell: ({ row }) => 0
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Estatus' />,
    cell: ({ row }) => (
      <div className='text-center w-full'>
        <Badge>{row.original.state}</Badge>
      </div>
    )
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <StationRowActions station={row.original} />
      </div>
    )
  }
]

export const stationColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'status',
    columnID: 'Estatus',
    label: 'Estatus',
    icon: <IconStatusChange className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Activo',
        value: true
      },
      {
        label: 'Bloqueado',
        value: false
      }
    ]
  }
]
