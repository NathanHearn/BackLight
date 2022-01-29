import react, {useState, useEffect} from 'react';

import './App.scss';
import 'react-clock/dist/Clock.css';

import rainWindow from './images/window-rain.gif';

import ToolBar from './ToolBar';
import Clock from 'react-clock'

function App() {

  const [color, setColor] = useState('#C29E40')
  const [image, setImage] = useState(false)


  const [time, setTime] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <div className="App">
      {image && <img src={rainWindow} className="App__BackgroundImage" alt="logo" />}
      <div className="App__BackgroundColor" style={{backgroundColor: color}}>
        <Clock value={time}/>
      </div>
      <ToolBar 
        color={color}
        setColor={setColor}
        image={image}
        setImage={setImage}
      />
    </div>
  );
}

export default App;
