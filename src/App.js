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
        count: state - 1
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
       <p></p>
       <button>Increment</button>
       <button>Decrement</button>
     </div>
    </div>
  );
}

export default App;
