import React, { useContext, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { DeskContext } from '../store/DeskContext'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

interface IPropProps {
  position: [number, number, number]
  scale: [number, number, number]
}

export const Prop = ({ position, scale }: IPropProps) => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const meshPropRef = useRef()

  const {
    state: { legBoxSize, prop }
  } = context
  const { nodes, materials } = useGLTF(prop.path)

  return (
    <mesh
      ref={meshPropRef}
      material={materials[prop.materialKey]}
      geometry={nodes[prop.geometryKey].geometry}
      position={[
        position[0],
        position[1],
        position[2] - (legBoxSize.depth / 2) * scale[2]
      ]}
      scale={scale}
    />
  )
}
