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
            If you have your own design I'll make up your design according to the layout,
             if It's not the case , I'll always <span>come up with an ideas</span> for you ,
              We'll discuss starting from what colors do you want me to use and ending with things like buttons, animations and etc.
        </div>
      </div>
    </>
  );
}

export default WebPages;
