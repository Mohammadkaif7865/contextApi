import './App.css';
import React, { useState, useReducer } from 'react';
const reducerFunction = (state, action) => { };
const initialState = {
  count: 0,
};
function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className="App">

    </div>
  );
}

export default App;
