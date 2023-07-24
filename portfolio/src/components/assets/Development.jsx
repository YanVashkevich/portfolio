import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Logo from './3Delements/Logo'


function Development() {
  return (
    <Canvas>
      <Stage>
       <Logo />
      </Stage>
    <OrbitControls enableZoom={false} autoRotate={false} />
  </Canvas>
  )
}

export default Development