import {
  IMaterial,
  IDesktopProperties,
  DesktopPropertiesType,
  IHoleVariant,
  ICameraProperties
} from './types'
import * as THREE from 'three'

export const DESKTOP_MATERIALS_DATA: IMaterial[] = [
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

export const PROPS_DATA = [
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

export const HOLE_VARIANTS: IHoleVariant[] = [
  {
    title: 'Без отверстия',
    useHole: false,
    holeShape: null,
    geometry: null
  },
  {
    useHole: true,
    title: 'Квадрат',
    holeShape: 'square',
    geometry: new THREE.BoxGeometry(0.05, 1, 0.05)
  },
  {
    useHole: true,
    title: 'Прямоугольник',
    holeShape: 'rectangle',
    geometry: new THREE.BoxGeometry(0.2, 1, 0.05)
  },
  {
    useHole: true,
    title: 'Круг',
    holeShape: 'circle',
    geometry: new THREE.SphereGeometry(0.03, 64, 64)
  }
]

export const SIZE_UNIT = 1000;

export const INITIAL_DESKTOP_SIZE_PROPERTIES: DesktopPropertiesType = {
  width: { size: { min: 1200/SIZE_UNIT, max: 2400/SIZE_UNIT }, title: 'Ширина A (мм)' },
  depth: { size: { min: 300/SIZE_UNIT, max: 900/SIZE_UNIT }, title: 'Глубина A (мм)' },
  height: { size: { min: 500/SIZE_UNIT, max: 1200/SIZE_UNIT }, title: 'Высота ножек (мм)' }
}

export const SHAPE_KEYS_SIZE = {
  depth: { min: 300/SIZE_UNIT, max: 1500/SIZE_UNIT },
  height: { min: 500/SIZE_UNIT, max: 1200/SIZE_UNIT }
}

export const LEG_DATA = [
  {
    path: '/leg.glb',
    name: 'Leg',
    geometryLegKey: 'leg',
    geometryClinchKey: 'leg',
    materialLegKey: 'metal',
    materialClinchKey: 'legs_mat'
  }
]

export const INITIAL_CAMERA_PROPERTIES: ICameraProperties = {
  position: [-15, 10, 15],
  lookAt: [0, 5, 0]
}

export const currentDesktopProperties: IDesktopProperties = {
  width: INITIAL_DESKTOP_SIZE_PROPERTIES.width.size.min,
  height: INITIAL_DESKTOP_SIZE_PROPERTIES.height.size.min,
  depth: INITIAL_DESKTOP_SIZE_PROPERTIES.depth.size.min,
  desktopMaterial: DESKTOP_MATERIALS_DATA[0],
  prop: PROPS_DATA[0],
  leg: LEG_DATA[0],
  legBoxSize: { width: 0, height: 0, depth: 0 },
  hole: HOLE_VARIANTS[0],
  cameraProperties: INITIAL_CAMERA_PROPERTIES
}
