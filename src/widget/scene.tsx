import React, { Suspense, useContext, useEffect } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { DeskContext } from '../store/DeskContext'
import { Leg } from './leg'
import { Desktop } from './desktop'
import { deskTopMaterialsData, propsData } from '../constants'
import { Prop } from './prop'
import { Environment } from './environment'
import { ContextNotFoundError } from '../components/ui/context-not-found-error'
import { FullPageSpinner } from '../components/ui/full-page-spinner'

export const Scene = ({}: {}) => {
  const context = useContext(DeskContext)
  if (!context) return <ContextNotFoundError />

  const {
    state: { width, depth }
  } = context

  useEffect(() => {
    [...propsData, ...deskTopMaterialsData].forEach((p) =>
      useGLTF.preload(p.path)
    )
  }, [])

  return (
    <Canvas
      className="flex-1"
      style={{ minHeight: '500px', height: '500px', background: '#ebebeb' }}
      camera={{ position: [-15, 10, 15], fov: 5 }}
      shadows
    >
      <Suspense fallback={<FullPageSpinner />}>
        <OrbitControls minDistance={5} maxDistance={50} />
        <Environment />
        <Leg position={[0, 0, width / 1000 / 2]} scale={[1, 1, 1]} />
        <Leg position={[0, 0, -width / 1000 / 2]} scale={[1, 1, -1]} />

        <Prop position={[-0.1, 0.005, width / 1000 / 2]} scale={[1, 1, 1]} />
        <Prop position={[-0.1, 0.005, -width / 1000 / 2]} scale={[1, 1, -1]} />

        <Prop
          position={[depth / 1000 - 0.2, 0.005, width / 1000 / 2]}
          scale={[1, 1, 1]}
        />
        <Prop
          position={[depth / 1000 - 0.2, 0.005, -width / 1000 / 2]}
          scale={[1, 1, -1]}
        />
        <Desktop />
      </Suspense>
    </Canvas>
  )
}
