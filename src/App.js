import React, { useState, useRef } from 'react';
import './App.css';
import Canvas from './Canvas';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

function App() {
  const [turn, setTurn] = useState(1);
  const [animal, setAnimal] = useState('');
  let refCanvas = useRef(null);  
  return (
    <div className="App">
      <h1>Code Nation Presents: Pictionary</h1>
      {turn === 1 && 
        <PlayerOne
          setTurn={setTurn}
          setAnimal={setAnimal}
          animal={animal}
        />}
      <Canvas 
        ref={refCanvas}
      />
      {turn === 2 && 
        <PlayerTwo
          setTurn={setTurn}
          setAnimal={setAnimal}
          animal={animal}
          refCanvas={refCanvas}
        />}
    </div>
  );
}

export default App;
