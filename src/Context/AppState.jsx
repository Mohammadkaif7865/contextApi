import React, { useState } from 'react';
import AppContext from './app-context';
function AppState(props) {
    const [message1, setMessage1] = useState("Message1");
    const [message2, setMessage2] = useState("Message2");
    const [isAuth, setIsAuth] = useState(true);
    const [todo, setTodo] = useState([]);
    return (
        <>
            <AppContext.Provider value={{ setIsAuth, setMessage1, setMessage2, message1, isAuth, message2, todo, setTodo }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;