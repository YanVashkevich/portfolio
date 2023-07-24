import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Heart from './3Delements/Heart'


function SocialMedia() {
  return (
    <Canvas>
      <Stage>
        <Heart />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}

export default SocialMedia