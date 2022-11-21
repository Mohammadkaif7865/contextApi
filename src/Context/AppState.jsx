import React, { useState, useReducer } from 'react';
import AppContext from './app-context';
import reducerFunction from './todo-reducer';
import { ADD_TODO,TOGGLE_TODO,DELETE_TODO } from './todo-action';
function AppState(props) {
    const initialState = {
        todos: [], // # {id: random_number , text: random_string , complete: booleans}
    }
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    const [message1, setMessage1] = useState("Message1");
    const [message2, setMessage2] = useState("Message2");
    const [isAuth, setIsAuth] = useState(true);
    // * Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }
    // * Toggle todo
    const toggleTodo = (todo) => {
        dispatch({
            type: TOGGLE_TODO,
        })
    }
    // * Delete todo
    return (
        <>
            <AppContext.Provider value={{ setIsAuth, setMessage1, setMessage2, message1, isAuth, message2, todos: state.todos }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;