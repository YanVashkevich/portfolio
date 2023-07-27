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
          In the end, I would like to ask you to write me <span>what did you
          think about my website</span> , you can contact me in the section down below
          by filling form or just DM me in social medias.
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
