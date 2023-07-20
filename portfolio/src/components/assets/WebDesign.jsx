import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Tablet from './Tablet'


function WebDesign() {
  return (
    <Canvas camera={{ fov:90 }}>
      <Stage>
        <Tablet />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}

export default WebDesign;
