import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Logo from "./3Delements/Logo";
import './CSSsFor3D/DownHint.css'


function Development() {
  return (
    <>
      <Canvas>
        <Stage>
          <Logo />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
      <div className="downhint">
        <div className="hint-text">
          Alright. If you are here , you can see <span>React logo</span>. It's a language I
          built most of my applications on.
        </div>
      </div>
    </>
  );
}

export default Development;
