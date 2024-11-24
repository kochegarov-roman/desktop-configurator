import React, { createContext, useReducer, Dispatch } from 'react'
import { currentDeskProperties } from '../constants'
import { ILegBoxSize, IMaterial, IProp, IDeskProperties } from '../types'

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
  setLegSize: (value: ILegBoxSize) => ({ type: 'SET_LEG_SIZE' as const, value })
}

export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

const deskReducer = (
  state: IDeskProperties,
  action: ActionTypes
): IDeskProperties => {
  switch (action.type) {
    case 'UPDATE_SIZE':
      return { ...state, [action.name]: action.value }
    case 'CHANGE_MATERIAL':
      return { ...state, deskTopMaterial: action.value }
    case 'CHANGE_PROP':
      return { ...state, prop: action.value }
    case 'SET_LEG_SIZE':
      return { ...state, legBoxSize: action.value }
    default:
      return state
  }
}

interface IDeskContextProps {
  state: IDeskProperties
  dispatch: Dispatch<ActionTypes>
}

export const DeskContext = createContext<IDeskContextProps | undefined>(
  undefined
)

export const DeskProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(deskReducer, currentDeskProperties)

  return (
    <DeskContext.Provider value={{ state, dispatch }}>
      {children}
    </DeskContext.Provider>
  )
}
