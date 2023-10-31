import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Heart from "./3Delements/Heart";

function SocialMedia() {
  return (
    <>
      <Canvas>
        <Stage>
          <Heart />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
      <div className="downhint">
        <div className="hint-text">
          So, If you have something to say about my porfolio or you want to <span>work with me</span> and create your dream website, you can contact me in the section down below
          by filling form or just DM me in social medias.
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
