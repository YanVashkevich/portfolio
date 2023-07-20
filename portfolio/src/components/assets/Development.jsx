import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Logo from './Logo'


function Development() {
  return (
    <Canvas camera={{ fov:90 }}>
      <Stage>
       <Logo />
      </Stage>
    <OrbitControls enableZoom={false} autoRotate={false} />
  </Canvas>
  )
}

export default Development