import { Suspense, useContext, useEffect, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { actions, DesktopContext } from './store/DesktopContext'
import { Leg } from './widgets/leg'
import { Desktop } from './widgets/desktop'
import {
  DESKTOP_MATERIALS_DATA,
  INITIAL_CAMERA_PROPERTIES,
  PROPS_DATA
} from './constants'
import { Prop } from './widgets/prop'
import { Environment } from './widgets/environment'
import { ContextNotFoundError } from './components/ui/context-not-found-error'
import { Overlay } from './widgets/overlay'
import { Settings } from './widgets/settings'
import { ICameraProperties, IDesktopProperties } from './types'
import './index.css'

const MoveCamera = ({ position, lookAt }: ICameraProperties) => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(...position)
    camera.lookAt(...lookAt)
  }, [camera, position, lookAt])

  return null
}

interface IConfiguratorProps {
  changeConfiguratorHandler: (state: IDesktopProperties) => void
}

export const Configurator = ({
  changeConfiguratorHandler
}: IConfiguratorProps) => {
  const context = useContext(DesktopContext)
  if (!context) return <ContextNotFoundError />

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const {
    dispatch,
    state: { width, depth, cameraProperties }
  } = context

  useEffect(() => {
    ;[...PROPS_DATA, ...DESKTOP_MATERIALS_DATA].forEach((p) =>
      useGLTF.preload(p.path)
    )
  }, [])

  useEffect(() => {
    changeConfiguratorHandler(context.state)
  }, [context])

  const cameraLookStart = () => {
    dispatch(actions.setCameraProperties(INITIAL_CAMERA_PROPERTIES))
  }

  return (
    <main className="mt-10">
      <h1 className="mb-3 bold">Конфигуратор рабочего стола</h1>
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        <div className={`w-full min-h-[500px] h-[500px] bg-[#ebebeb] relative`}>
          <Canvas
            ref={canvasRef}
            camera={{ position: [-15, 10, 15], fov: 5 }}
            shadows
          >
            <Suspense fallback={null}>
              <MoveCamera
                position={[...cameraProperties.position]}
                lookAt={[...cameraProperties.lookAt]}
              />
              <OrbitControls minDistance={5} maxDistance={50} makeDefault />
              <Environment />
              <Leg position={[0, 0, width / 1000 / 2]} scale={[1, 1, 1]} />
              <Leg position={[0, 0, -width / 1000 / 2]} scale={[1, 1, -1]} />

              <Prop
                position={[-0.1, 0.005, width / 1000 / 2]}
                scale={[1, 1, 1]}
              />
              <Prop
                position={[-0.1, 0.005, -width / 1000 / 2]}
                scale={[1, 1, -1]}
              />

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
          <Overlay cameraLookStart={cameraLookStart} />
        </div>
        <Settings />
      </div>
    </main>
  )
}
