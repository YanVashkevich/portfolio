import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Web from './Web'

function WebPages() {
  return (
    <Canvas camera={{ fov: 90 }}>
      <Stage>
        <Web />
      </Stage>
    <OrbitControls enableZoom={false} autoRotate={false} />
  </Canvas>
  )
}

export default WebPages