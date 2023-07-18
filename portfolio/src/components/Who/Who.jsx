import React, { useState } from "react";
import "./Who.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../assets/Cube";

export const Who = () => {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="who">
      <div className="main-content">
        <div className="left">
          <Canvas camera={{ fov: 25, position: [3, 3, 3] }}>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>

        <div className="right">
          <h2 className="title">Think outside of the box.</h2>
          <div className="what-we-do">-Who Am I</div>
          <div className="text">
            I'm a teenager, who is intersted in becoming frontend developer.
          </div>
          <button onClick={toggleModal} className="learn-btn">
            Learn more
          </button>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <div className="text-modal">
                  Hello , I'm Yan , young web developer from a Belarus.
                  I'm building applications, exploring new things, learning and working on myself , sharpening my skills in coding.
                  If you got interested or you just want to contact me, fill form in contact section or DM me in social medias. 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
