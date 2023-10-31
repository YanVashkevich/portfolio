import React from "react";
import "./Hero.css";
import { Navbar } from "../Navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";


function Hero() {
  return (
    <div className="hero">
      <Navbar />

        <div className="hero-left">
          <h1>
            Hello, my name is <span>Vashkevich Yan</span> and I'm a self-taught
            developer!<br/> I was born in Belarus. But more than 1 year ago I moved
            to Poland and decided that I need to make changes in my life, so, I
            started learning coding and became pretty good at it cause I've been
            building applications and developing for months.<br/> So now,<span> </span> 
            <span>
              creating a gorgeous unique website is a simple task for me!
            </span>
          </h1>
        </div>

        <div className="hero-right">
              <Canvas className="orbit">
                <OrbitControls enableZoom={false} autoRotate={false} />
                <ambientLight intensity={1} />
                <directionalLight position={1} />
                <Sphere args={[1, 200, 200]} scale={2.7}>
                  <MeshDistortMaterial
                    color="rgb(8, 80, 120)"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                  />
                </Sphere>
              </Canvas>
            <img src="./Imgs/photo.png" className="photo" />
        </div>
        
    </div>
  );
}

export default Hero;
