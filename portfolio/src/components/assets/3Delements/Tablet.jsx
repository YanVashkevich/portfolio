import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tablet-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.iPad_Pro_2020_Body_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.iPad_Pro_2020_screen_0.geometry} material={materials.screen} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.camera_module_glass_0.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes['camera1_camera1(2)_0'].geometry} material={materials.camera12} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.camera_module2001_Camera_Flash_0.geometry} material={materials.Camera_Flash} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.camera_module2001_Mic_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/tablet-transformed.glb')
