
import { useState } from 'react';
import './App.css';



const App =  () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };
  return (
    <>
    <div className="App bg-body-dark" >
      <div style={{ backgroundColor: backgroundColor,padding:'200px' }} className="button-container">
        <h1>Change Background Colour</h1>
        <div>
          <button onClick={() => changeColor('red')}>Red</button>
          <button onClick={() => changeColor('green')}>Green</button>
          <button onClick={() => changeColor('blue')}>Blue</button>
          <button onClick={() => changeColor('yellow')}>Yellow</button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
