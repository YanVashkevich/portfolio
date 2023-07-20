import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Art from './Art'

function Ilustrations() {
  return (
    <Canvas camera={{ fov: 90, position: [0, 0, 3] }}>
      <Stage>
        <Art/>
      </Stage>
      <OrbitControls enableZoom={true} autoRotate={false} />
    </Canvas>
  );
}

export default Ilustrations;
