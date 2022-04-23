import './App.css';
import { Routes, Route } from "react-router-dom";
import Gethelp from './Portfolio/Gethelp';
import Intro from './Portfolio/Intro';
import Works from './Portfolio/Works';
import Skillset from './Portfolio/Skillset';
import Talk from './Portfolio/Talk';
import Me from './Portfolio/Me';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gethelp />} />
        <Route path="Intro" element={<Intro />} />
        <Route path="Me" element={<Me />}/> 
        <Route path="Works" element={<Works />}/>
        <Route path="Skillset" element={<Skillset />}/>
        <Route path="Talk" element={<Talk />}/>
      </Routes>
    </div>
  );
}

export default App;
