import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Todo from './Components/Todo';
import Display from './Components/Display';
import AppState from './Context/AppState';
import Example from './Components/Example';
import StudentRegistration from './Components/StudentRegistration ';
import Students from './Components/Students';
function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>This is the main header</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/threedimension'>3D</Link></li>
            <li><Link to='/detail'>Detail</Link></li>
            <li><Link to='/todo'>Todo</Link></li>
            <li><Link to='/display'>HOC</Link></li>
            <li><Link to='/studentRegistration'>Registration</Link></li>
            <li><Link to='/students'>StudentsInfo</Link></li>
          </ul>
        </nav>
        <AppState>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/threedimension' component={Example} />
            <Route exact path='/detail' component={Detail} />
            <Route exact path='/todo' component={Todo} />
            <Route exact path='/students' component={Students} />
            <Route exact path='/display' component={Display} />
            <Route exact path='/studentRegistration' component={StudentRegistration} />
          </Switch>
        </AppState>
      </BrowserRouter>
    </>
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