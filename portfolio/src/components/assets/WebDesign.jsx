import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Tablet from "./3Delements/Tablet";
import "./WebDesign.css";

function WebDesign() {
  const [closed, setIsclosed] = useState(true);

  const closeHint = () => {
    setIsclosed(false);
  };

  return (
    <>
      <Canvas>
        <Stage>
          <Tablet />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
      {closed && (
        <div className="hint">
          <div className="hint-text">
            Hello! If you want to see more 3D objects, try to click on the next
            words and you'll see the magic! HIghly recommend to click on the
            "Development")
          </div>
          <img
            onClick={closeHint}
            className="hint-image"
            src="./Imgs/cross.png"
          />
        </div>
      )}
    </>
  );
}

export default WebDesign;
