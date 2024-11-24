import React, { createContext, useReducer, Dispatch } from 'react'
import {
  currentDesktopProperties,
  HOLE_VARIANTS,
  INITIAL_CAMERA_PROPERTIES
} from '../constants'
import {
  ILegBoxSize,
  IMaterial,
  IProp,
  IDesktopProperties,
  ICameraProperties
} from '../types'

export const actions = {
  updateSize: (name: string, value: number) => ({
    type: 'UPDATE_SIZE' as const,
    name,
    value
  }),
  changeMaterial: (value: IMaterial) => ({
    type: 'CHANGE_MATERIAL' as const,
    value
  }),
  changeProp: (value: IProp) => ({ type: 'CHANGE_PROP' as const, value }),
  setLegSize: (value: ILegBoxSize) => ({
    type: 'SET_LEG_SIZE' as const,
    value
  }),
  setHole: (value: string | null) => ({ type: 'SET_HOLE' as const, value }),
  setCameraProperties: (value: ICameraProperties) => ({
    type: 'SET_CAMERA_PROPERTIES' as const,
    value
  })
}

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

const deskReducer = (
  state: IDesktopProperties,
  action: ActionTypes
): IDesktopProperties => {
  switch (action.type) {
    case 'UPDATE_SIZE':
      return { ...state, [action.name]: action.value }
    case 'CHANGE_MATERIAL':
      return {
        ...state,
        desktopMaterial: action.value,
        cameraProperties: INITIAL_CAMERA_PROPERTIES
      }
    case 'CHANGE_PROP':
      return {
        ...state,
        prop: action.value,
        cameraProperties: { position: [0, 1, 5], lookAt: [5, -5, 0] }
      }
    case 'SET_LEG_SIZE':
      return { ...state, legBoxSize: action.value }
    case 'SET_HOLE':
      return {
        ...state,
        cameraProperties: { position: [5, 10, 5], lookAt: [0, 0, 0] },
        hole:
          HOLE_VARIANTS.find((e) => e.holeShape === action.value) ||
          HOLE_VARIANTS[0]
      }
    case 'SET_CAMERA_PROPERTIES':
      return { ...state, cameraProperties: action.value }
    default:
      return state
  }
}

interface IDeskContextProps {
  state: IDesktopProperties
  dispatch: Dispatch<ActionTypes>
}

export const DesktopContext = createContext<IDeskContextProps | undefined>(
  undefined
)

export const DesktopPropertiesProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [state, dispatch] = useReducer(deskReducer, currentDesktopProperties)

  return (
    <DesktopContext.Provider value={{ state, dispatch }}>
      {children}
    </DesktopContext.Provider>
  )
}
