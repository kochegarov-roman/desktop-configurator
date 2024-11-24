import React from 'react'

export const Environment = ({
  direction = [-1, 5, 1]
}: {
  direction?: [number, number, number]
}) => (
  <>
    <directionalLight
      position={direction}
      intensity={1.5}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-bias={0.005}
    />
    <ambientLight intensity={1.4} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.5} />
    </mesh>
  </>
)
