import { useContext, useRef, useState } from 'react'
import * as THREE from 'three'
import { DesktopContext } from '../store/DesktopContext'
import { useGLTF } from '@react-three/drei'
import { PivotControls } from '@react-three/drei'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'
import {Geometry, Base, Subtraction, CSGGeometryRef} from '@react-three/csg'
import { IHoleVariant } from '../types'

const Hole = ({ hole }: { hole: IHoleVariant }) => {
  if (!hole.useHole || !hole.geometry) return null

  return (
    <Subtraction rotation={[0, Math.PI / 2, 0]} position={[0.1, 0.01, 0.4]}>
      <Geometry>
        <Base geometry={hole.geometry} />
      </Geometry>
    </Subtraction>
  )
}

export const Desktop = () => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const csg = useRef<CSGGeometryRef | null>(null)
  const {
    state: { width, depth, height, desktopMaterial, hole }
  } = context
  const { materials } = useGLTF(desktopMaterial.path)

  const boxGeometry = new THREE.BoxGeometry(depth / 1000, 0.01, width / 1000)
  const [initialPositionX] = useState(depth / 1000)

  return (
    <mesh
      castShadow={true}
      material={materials[desktopMaterial.materialKey]}
      position={[
        (depth / 1000 - initialPositionX) / 2,
        height / 1000 - 0.01,
        0
      ]}
    >
      <Geometry ref={csg} computeVertexNormals>
        <Base name="base" geometry={boxGeometry} />
        <PivotControls
          activeAxes={[true, false, true]}
          rotation={[Math.PI, 0, 0]}
          scale={0.1}
          anchor={[0.4, 0, 0]}
          onDrag={() => {
            csg.current?.update()
          }}
        >
          <Hole hole={hole} />
        </PivotControls>
      </Geometry>
    </mesh>
  )
}
