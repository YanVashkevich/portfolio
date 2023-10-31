
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/heart-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="BASE_HEART" position={[-0.676, 38.876, -0.255]} rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Object_5" position={[-0.09, 0, -38.876]}>
              <mesh name="BASE_HEART_Material_#41_0" geometry={nodes['BASE_HEART_Material_#41_0'].geometry} material={materials.Material_41} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/heart-transformed.glb')
