import React from 'react'
import './Hero.css'
import { Navbar } from '../Navbar/Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'


export const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
        <div className='main-content'>
            <div className='left'>
              <h2 className='title'>Work It Harder. Make It Better.</h2>
              <div className='what-we-do'>- What I Do</div>
              <div className='text'>Studying. Learning. Exploring.</div>
              <a href='https://github.com/YanVashkevich?tab=repositories'><button className='learn-btn'>Learn more</button></a>
            </div>
            <div className='right'>
              <Canvas>
                <OrbitControls enableZoom = {false} autoRotate ={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={1}/>
                <Sphere args={[1, 100, 200]} scale={2.7}>
                  <MeshDistortMaterial color="#f94001" attach='material' distort={0.4} speed={ 1.25 }/>
                </Sphere>
              </Canvas>
              <img src='space.jpg' className='cube-image'/>
            </div>
        </div>
    </div>
  )
}
