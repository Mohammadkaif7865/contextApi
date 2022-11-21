import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Todo() {
    const { } = useContext(AppContext);
  
    return (
        <>
            <h1>This is TODO page</h1>
            <label htmlFor="todo">TODO</label>
            <input id='todo' type="text" />

        </>
    )
}// ? This is the end of every arguemnts
export default Todo;