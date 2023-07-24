import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Web from './3Delements/Web'

function WebPages() {
  return (
    <Canvas>
      <Stage>
        <Web />
      </Stage>
    <OrbitControls enableZoom={false} autoRotate={false} />
  </Canvas>
  )
}

export default WebPages