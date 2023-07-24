import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Art from './3Delements/Art'

function Ilustrations() {
  return (
    <Canvas>
      <Stage>
        <Art/>
      </Stage>
      <OrbitControls enableZoom={true} autoRotate={false} />
    </Canvas>
  );
}

export default Ilustrations;
