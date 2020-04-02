import React, { useRef, useReducer } from 'react';
import './App.css';
import Canvas from './Canvas';
import Drawing from './Drawing';
import Guessing from './Guessing';

const initialState = {
  round: 1,
  phase: "drawing",
  score: {
    playerOne: 0,
    playerTwo: 0
  },
  drawingPlayer: 1,
  guessingPlayer: 2,
  animal: "" 

};

function reducer(state, action) {
  switch (action.type) {
    case 'setPhase':
      return {phase: action.payload};
    case 'setAnimal':
      return {animal: action.payload};
    case 'setRound':
      return {round: state.round + 1};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let refCanvas = useRef(null);  
  return (
    <div className="App">
      <h1>Code Nation Presents: Pictionary</h1>
      {state.phase === "drawing" && 
        <Drawing
          dispatch={dispatch}
          animal={state.animal}
        />}
      <Canvas 
        ref={refCanvas}
      />
      {state.phase === "guessing" && 
        <Guessing
          dispatch={dispatch}
          animal={state.animal}
          refCanvas={refCanvas}
        />}
    </div>
  );
}

export default App;
