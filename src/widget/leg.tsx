import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { actions, DeskContext } from '../store/DeskContext'
import { shapeKeysSize } from '../constants'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'

interface ILegProps {
  position: [number, number, number]
  scale: [number, number, number]
}

export const Leg = ({ position, scale }: ILegProps) => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const meshRef = useRef()
  const legRef = useRef()

  const {
    state: { leg, depth, height, legBoxSize },
    dispatch
  } = context
  const { nodes, materials } = useGLTF(leg.path)

  const { max: maxHeight, min: minHeight } = shapeKeysSize.height
  const { max: maxDepth, min: minDepth } = shapeKeysSize.depth

  const morphValues: [number, number] = [
    (depth - minDepth) / (maxDepth - minDepth),
    (height - minHeight) / (maxHeight - minHeight)
  ]

  const geometryLeg = nodes[leg.geometryLegKey].children[0].geometry

  useEffect(() => {
    if (legBoxSize.width) return

    const ogMetal = geometryLeg
    ogMetal.computeBoundingBox()
    const { min, max } = ogMetal.boundingBox
    const widthG = max.x - min.x
    const heightG = max.y - min.y
    const depthG = max.z - min.z
    dispatch(
      actions.setLegSize({ width: widthG, height: heightG, depth: depthG })
    )
  }, [])

  position = [
    position[0],
    position[1],
    position[2] - (legBoxSize.depth / 2) * scale[2]
  ]

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={geometryLeg}
        material={materials[leg.materialLegKey]}
        scale={scale}
        position={position}
        morphTargetInfluences={morphValues}
      ></mesh>
      <mesh
        ref={legRef}
        geometry={nodes[leg.geometryClinchKey].children[1].geometry}
        material={materials[leg.materialClinchKey]}
        scale={scale}
        position={position}
        morphTargetInfluences={morphValues}
      ></mesh>
    </>
  )
}
