import { BoxGeometry, SphereGeometry } from 'three'

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

export interface ISize {
  width: number
  height: number
  depth: number
}

export interface ILegBoxSize extends ISize {}

export interface ISizeLimit {
  min: number
  max: number
}

export type SizeKeysType = 'width' | 'depth' | 'height'

export type DesktopPropertiesType = {
  [key in SizeKeysType]: {
    size: ISizeLimit
    title: string
  }
}

export interface IHoleVariant {
  useHole: boolean
  title: string
  holeShape: 'rectangle' | 'circle' | 'square' | null
  geometry: BoxGeometry | SphereGeometry | null
}

export interface ICameraProperties {
  position: [number, number, number]
  lookAt: [number, number, number]
}

export interface IDesktopProperties {
  width: number
  depth: number
  height: number
  desktopMaterial: IMaterial
  prop: IProp
  leg: ILeg
  legBoxSize: ILegBoxSize
  hole: IHoleVariant
  cameraProperties: ICameraProperties
}
