import './App.css';
import Intro from './Portfolio/Intro';
import Works from './Portfolio/Works';
import Skillset from './Portfolio/Skillset';
import Talk from './Portfolio/Talk';
import Me from './Portfolio/Me';


function App() {
  return (
    <div className="App">
      <div className='app-cont'>
        <Intro />
        <Me />
        <Works />
        <Skillset />
        <Talk />
      </div>
    </div>
  );
}

export default App;
