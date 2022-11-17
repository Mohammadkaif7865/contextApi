import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import AppState from './Context/AppState';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>This is the main header</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/detail'>Detail</Link></li>
          </ul>
        </nav>
        <AppState>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail' component={Detail} />
          </Switch>
        </AppState>
      </BrowserRouter>
    </div>
  );
}
export default App;

// ? here we go !!!
// const reducerFunction = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         count: state.count + 1
//       }

//     case 'decrement':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     case 'incby10':
//       return {
//         ...state,
//         count: state.count + action.payload
//       }
//     case 'decby10':
//       return {
//         ...state,
//         count: state.count - action.payload
//       }
//     case 'init':
//       return {
//         ...state,
//         count: action.payload
//       }

//     default:
//       return state
//   }
// };
// const initialState = {
//   count: 0,
// };
// const [input, setInput] = useState(0);
// const [state, dispatch] = useReducer(reducerFunction, initialState);

/* <h1>Reducer Example</h1>
<div>
  <label htmlFor="intialcount">Start Count</label>
  <input type="number" id="intialcount" value={input} onChange={(e) => setInput(Number(e.target.value))} />
  <button onClick={() => dispatch({ type: "init", payload: input })}>Intialize Counter</button>
  <p>{state.count}</p>
  <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
  <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
  <button onClick={() => dispatch({ type: "incby10", payload: 10 })}>Increment by 10</button>
  <button onClick={() => dispatch({ type: "decby10", payload: 10 })}>Decrement by 10</button>
</div> */