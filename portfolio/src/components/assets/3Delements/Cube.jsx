import React, { useRef } from "react";
import { RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";


function Cube() {

  const textRef = useRef();
  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

  return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 3 ]} />
            <color attach="background" args={["#020331"]} />
            <Text ref={textRef} fontSize={1.25} color='lightgray'>
              Portfolio
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
  );
}

export default Cube;
