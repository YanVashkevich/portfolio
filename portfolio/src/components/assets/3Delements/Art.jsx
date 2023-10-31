
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/art-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Victorian_Framed_Painting_Victorian_Paintings_0.geometry} material={materials.Victorian_Paintings} position={[-1.717, -0.871, -0.033]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/art-transformed.glb')
