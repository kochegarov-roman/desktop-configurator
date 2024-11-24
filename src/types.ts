export interface IMaterial {
  name: string
  color: string
  path: string
  materialKey: string
}

export interface IProp {
  path: string
  name: string
  geometryKey: string
  materialKey: string
}

export interface ILeg {
  path: string
  name: string
  geometryLegKey: string
  geometryClinchKey: string
  materialLegKey: string
  materialClinchKey: string
}

export interface ILegBoxSize {
  width: number
  height: number
  depth: number
}

export interface ISize {
  min: number
  max: number
}

export type SizeKeysType = 'width' | 'depth' | 'height'

export type DeskPropertiesType = {
  [key in SizeKeysType]: {
    size: ISize
    title: string
  }
}

export interface IDeskProperties {
  width: number
  depth: number
  height: number
  deskTopMaterial: IMaterial
  prop: IProp
  leg: ILeg
  legBoxSize: ILegBoxSize
}
