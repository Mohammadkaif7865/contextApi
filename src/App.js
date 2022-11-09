import './App.css';
import React, { useState, useReducer } from 'react';
const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }

    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    case 'incby10':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'decby10':
      return {
        ...state,
        count: state.count - action.payload
      }
    case 'init':
      return {
        ...state,
        count: action.payload
      }

    default:
      return state
  }
};
const initialState = {
  count: 0,
};
function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <div>
        <label htmlFor="intialcount">Start Count</label>
        <input type="number" id="intialcount" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => dispatch({ type: "init", payload: input })}>Intialize Counter</button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "incby10", payload: 10 })}>Increment by 10</button>
        <button onClick={() => dispatch({ type: "decby10", payload: 10 })}>Decrement by 10</button>
      </div>
    </div>
  );
}

export default App;
