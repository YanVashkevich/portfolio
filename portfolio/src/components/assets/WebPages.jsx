import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Web from "./3Delements/Web";
import './CSSsFor3D/Hint.css'


function WebPages() {
  return (
    <>
      <Canvas>
        <Stage>
          <Web />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
      <div className="hint">
        <div className="hint-text">
          I build not only SPA , but MPA , if you want me to build you a website, I will build you anithing , according to <span>your taste</span>!
        </div>
      </div>
    </>
  );
}

export default WebPages;
