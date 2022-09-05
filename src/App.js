import './App.css';
import Intro from './Portfolio/Intro';
import Works from './Portfolio/Works';
import Skillset from './Portfolio/Skillset';
import Talk from './Portfolio/Talk';
import Me from './Portfolio/Me';
import { useState, useEffect } from 'react';


function App() {

  const [loaded, setLoaded] = useState(true);

  const handleLoading = () => setTimeout(() => {
    setLoaded(false);
  }, 1500);

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () =>  window.removeEventListener("load",  handleLoading);;

  }, [])

  


  return !loaded ? 
    <div className="App">
    <div className='app-cont'>
      <Me />
      <Works />
      <Skillset />
      <Talk />
    </div>
  </div>
  :
  <Intro />
}

export default App;
