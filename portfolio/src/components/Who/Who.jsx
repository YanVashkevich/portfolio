import React from 'react'
import './Who.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from '../assets/Cube'


export const Who = () => {
  return (
    <div className='who'>
        <div className='main-content'>
          <div className='left'>
            <Canvas camera={{fov:25, position: [3,3,3]}}>
              <OrbitControls enableZoom = {false} autoRotate= {false}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3, 2, 1]}/>
              <Cube/>
            </Canvas>
          </div>

          <div className='right'>
                <h2 className='title'>Think outside of the box.</h2>
                <div className='what-we-do'>-Who Am I</div>
                <div className='text'>I'm a teenager, who is intersted in becoming frontend developer.</div>
                <a href='https://github.com/YanVashkevich'><button className='learn-btn'>Learn more</button></a>
          </div>
        </div>
    </div>
  )
}
