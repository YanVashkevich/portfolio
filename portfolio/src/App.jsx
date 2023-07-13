import './App.css'
import { Hero } from "./components/Hero/Hero";
import { Works } from "./components/Works/Works";
import { Who } from "./components/Who/Who";
import { Contact } from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
