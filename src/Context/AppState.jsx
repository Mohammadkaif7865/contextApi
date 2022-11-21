import React, { useState, useReducer } from 'react';
import AppContext from './app-context';
import reducerFunction from './todo-reducer';
function AppState(props) {
    const initialState = {
        todos: [],
    }
    const [message1, setMessage1] = useState("Message1");
    const [message2, setMessage2] = useState("Message2");
    const [isAuth, setIsAuth] = useState(true);
    
    return (
        <>
            <AppContext.Provider value={{ setIsAuth, setMessage1, setMessage2, message1, isAuth, message2}}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;