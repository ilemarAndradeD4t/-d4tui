import { IFleet } from './fleets'
import { IGPSDevice } from './gps'
import { IStation } from './stations'

export interface ITruck {
  id: number
  title: string
  numberPlate: string
  images: string[]
  type: string
  status: string
  fleet: IFleet
  station: IStation
  gps: IGPSDevice
}

export interface IFormCreateTruck {
  title: string
  numberPlate: string
  images: File | File[]
  type: string
  status: string
  fleetId: number
  stationId: number
  gpsId: number
}

export interface IFormEditTruck {
  title: string
  numberPlate: string
  type: string
  status: string
  fleetId: number | string
  stationId: number | string
  gpsId: number | string
  image?: File
}
