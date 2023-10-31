import  React from 'react';
import './App.css';
import  Hero  from "./components/Hero/Hero";
import { Who } from "./components/Who/Who";
import { Contact } from "./components/Contact/Contact";
import Works from './components/Works/Works';
import Conditions from './components/Conditions/Conditions';
import Modal from './components/Modals/Modal';
import Price from './components/Price/Price';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Who/>
      <Works/>
      <Price/>
      <Conditions/>
      <Modal/>
      <Contact/>
    </div>
  );
}

export default App;
