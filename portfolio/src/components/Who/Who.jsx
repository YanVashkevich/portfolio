import React, { useState } from "react";
import "./Who.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../assets/3Delements/Cube";

export const Who = () => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="who">
      <div className="who-main-content">

        <div className="who-left">
          <Canvas className="cube" camera={{ fov: 25, position: [3, 3, 3] }}>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>

        <div className="who-right">
          <h1>I'm Front-end/Full-stack Developer and I'm ready to build unique website just FOR YOU!</h1> 
          <button onClick={toggleModal} className="send-btn">
            Learn more
          </button>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <div className="text-modal">
                  I'm building websites using modern technologies and trending designs. 
                   Thanks to the <a href="https://iamit.net/home">IamIT</a> "Web Development Program" and multiple hours of studying and exploring ethernet I'm confident in my coding skills,
                    so, I'm ready to build a unique website just for you.
                     If you're interesting what programming languages do I use here is my stack: <a>HTML | CSS | React | Javascript | Three.js | jQuery | PHP | TypeScript | Node.js | Git | JSON | Axios</a>.
                      Also the language barrier won't be a problem for us,
                        my native languages are Belarusian and Russian and also I have an Upper Intermediate level in both English and Polish.
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
