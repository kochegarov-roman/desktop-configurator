import React, { useContext, useRef, useState } from 'react'
import * as THREE from 'three'
import { DeskContext } from '../store/DeskContext'
import { useGLTF } from '@react-three/drei'
import { PivotControls } from '@react-three/drei'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'
import { Geometry, Base, Subtraction } from '@react-three/csg'

const Window = (props: any) => (
  <Subtraction {...props}>
    <Geometry>
      <Base geometry={props.box} />
    </Geometry>
  </Subtraction>
)

export const Desktop = () => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const BoxHole = new THREE.BoxGeometry(0.1, 1, 0.1)
  const csg = useRef()
  const {
    state: { width, depth, height, deskTopMaterial }
  } = context
  const { materials } = useGLTF(deskTopMaterial.path)

  const boxGeometry = new THREE.BoxGeometry(depth / 1000, 0.01, width / 1000)
  const [initialPositionX] = useState(depth / 1000)

  return (
    <mesh
      castShadow={true}
      material={materials[deskTopMaterial.materialKey]}
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
            csg.current.update()
          }}
        >
          <Window
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0.05, 0]}
            box={BoxHole}
          />
        </PivotControls>
      </Geometry>
    </mesh>
  )
}
