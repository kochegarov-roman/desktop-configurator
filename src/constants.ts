import { IMaterial, IDeskProperties, DeskPropertiesType } from './types'

export const deskTopMaterialsData: IMaterial[] = [
  {
    color: '#c7b299',
    name: 'Ashwood',
    path: '/top_ashwood_mat.glb',
    materialKey: 'top_ashwood_mat'
  },
  {
    color: '#cd7f32',
    name: 'Cedar',
    path: '/top_cedar_mat.glb',
    materialKey: 'top_cedar_mat'
  },
  {
    color: '#1c1c1c',
    name: 'PlasticBlack',
    path: '/top_plastic_black_mat.glb',
    materialKey: 'top_plastic_black_mat'
  },
  {
    color: '#f0f0f0',
    name: 'PlasticWhite',
    path: '/top_plastic_white_mat.glb',
    materialKey: 'top_plastic_white_mat'
  },
  {
    color: '#773f1a',
    name: 'Walnut',
    path: '/top_walnut_mat.glb',
    materialKey: 'top_walnut_mat'
  }
]

export const propsData = [
  {
    path: '/prop_01.glb',
    name: 'Вариант 1',
    geometryKey: 'prop_01',
    materialKey: 'prop_mat'
  },
  {
    path: '/prop_02.glb',
    name: 'Вариант 2',
    geometryKey: 'prop_02',
    materialKey: 'prop_mat'
  }
]

export const holesVariatns = [
  {
    path: '/prop_01.glb',
    name: 'Вариант 1',
    geometryKey: 'prop_01',
    materialKey: 'prop_mat'
  },
  {
    path: '/prop_02.glb',
    name: 'Вариант 2',
    geometryKey: 'prop_02',
    materialKey: 'prop_mat'
  }
]

export const initialDeskSizeProperties: DeskPropertiesType = {
  width: { size: { min: 1200, max: 2400 }, title: 'Ширина A (мм)' },
  depth: { size: { min: 300, max: 900 }, title: 'Глубина A (мм)' },
  height: { size: { min: 500, max: 1200 }, title: 'Высота ножек (мм)' }
}

export const shapeKeysSize = {
  depth: { min: 300, max: 1500 },
  height: { min: 500, max: 1200 }
}

export const legData = [
  {
    path: '/leg.glb',
    name: 'Leg',
    geometryLegKey: 'leg',
    geometryClinchKey: 'leg',
    materialLegKey: 'metal',
    materialClinchKey: 'legs_mat'
  }
]

export const currentDeskProperties: IDeskProperties = {
  width: initialDeskSizeProperties.width.size.min,
  height: initialDeskSizeProperties.height.size.min,
  depth: initialDeskSizeProperties.depth.size.min,
  deskTopMaterial: deskTopMaterialsData[0],
  prop: propsData[0],
  leg: legData[0],
  legBoxSize: { width: 0, height: 0, depth: 0 }
}