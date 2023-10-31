import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Tablet from "./3Delements/Tablet";
import "./CSSsFor3D/Hint.css";

function WebDesign() {

  return (
    <>
      <Canvas>
        <Stage>
          <Tablet/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
      
        <div className="hint">
          <div className="hint-text">
            Hello! If you want to see more 3D objects, try to click on the next
            words and you'll see the magic! HIghly recommend to click on the
            <span> Development</span> and dont forget to click on the other words!
          </div>
        </div>
    </>
  );
}

export default WebDesign;
