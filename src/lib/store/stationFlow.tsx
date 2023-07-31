import { IconGasStation } from '@tabler/icons-react'
import { create } from 'zustand'

import { EStationType, IPumpStationContentTab, IStation, IStockageStationContentTab, TPumpStationFlowTabKey, TStockageStationFlowTabKey } from '@/lib/types'

type TTabToActive = TPumpStationFlowTabKey | TStockageStationFlowTabKey
type TStationType = EStationType.PUMP | EStationType.STOCKAGE

interface IUseStationFlow {
  stationTabs: {
    PUMP: IPumpStationContentTab[]
    STOCKAGE: IStockageStationContentTab[]
  }
  isLoading: boolean
  currentStation: IStation
  typeStationToCreate: EStationType.PUMP | EStationType.STOCKAGE
  setIsLoading: (value: boolean) => void
  setTypeStationToCreate: (value: EStationType) => void
  setStation: (station: IStation) => void
  allowAttributeTabsToComplete: (stationType: TStationType) => void
  getAttributeTabActive: () => IPumpStationContentTab | IStockageStationContentTab
  setActiveAttributeTab: (stationType: TStationType, tabToActive: TTabToActive) => void
  setCompleteAttributeTab: (stationType: TStationType, tabToComplete: TTabToActive) => void
}

export const useStationFlow = create<IUseStationFlow>((set, get) => ({
  typeStationToCreate: EStationType.PUMP,

  currentStation: null,

  isLoading: true,

  stationTabs: {
    PUMP: [
      {
        tabKey: 'BASIC_INFO',
        label: 'Información Básica',
        isDisabled: false,
        isActive: true,
        isCompleted: true,
        icon: <IconGasStation />,
        route: '/info'
      },
      {
        tabKey: 'ISLANDS',
        label: 'Islas',
        isDisabled: true,
        isActive: false,
        isCompleted: false,
        route: '/islas',
        icon: <IconGasStation />
      },
      {
        tabKey: 'TANKS',
        label: 'Tanques',
        isDisabled: true,
        isActive: false,
        isCompleted: false,
        route: '/tanques',
        icon: <IconGasStation />
      },
      {
        tabKey: 'DISPENSERS',
        label: 'Dispensadores',
        isDisabled: true,
        isActive: false,
        isCompleted: false,
        route: '/dispensadores',
        icon: <IconGasStation />
      }
    ],

    STOCKAGE: [
      {
        tabKey: 'ANOTHER',
        label: 'Another',
        isDisabled: true,
        isActive: false,
        isCompleted: false,
        route: '/another',
        icon: <IconGasStation />,
        content: <div>ANOTHER</div>
      }
    ]
  },

  setTypeStationToCreate: (value) => set(() => ({ typeStationToCreate: value })),

  setIsLoading: (value) => set(() => ({ isLoading: value })),

  setStation: (station) => set(() => ({ currentStation: station })),

  setActiveAttributeTab: (stationType, tabToActive) => set((prevState) => ({
    stationTabs: {
      ...prevState.stationTabs,
      [stationType]: prevState.stationTabs[stationType].map(stationTab => {
        if (tabToActive === stationTab.tabKey) {
          return { ...stationTab, isActive: true }
        }

        return { ...stationTab, isActive: false }
      })
    }
  })),

  setCompleteAttributeTab: (stationType, tabCompleted) => set((prevState) => ({
    stationTabs: {
      ...prevState.stationTabs,
      [stationType]: prevState.stationTabs[stationType].map(stationTab => {
        if (tabCompleted === stationTab.tabKey) {
          return { ...stationTab, isCompleted: true }
        }

        return { ...stationTab }
      })
    }
  })),

  // eslint-disable-next-line dot-notation
  getAttributeTabActive: () => {
    const pumpStations = get().stationTabs.PUMP
    const stockageStations = get().stationTabs.STOCKAGE

    return [...pumpStations, ...stockageStations].find(stationTab => stationTab.isActive === true)
  },

  allowAttributeTabsToComplete: (stationType) => set((prevState) => ({
    stationTabs: {
      ...prevState.stationTabs,
      [stationType]: prevState.stationTabs[stationType].map(stationTab => ({ ...stationTab, isDisabled: false }))
    }
  }))
}))
