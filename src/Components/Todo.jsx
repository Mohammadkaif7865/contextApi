import React from 'react';
import AppState from '../Context/AppState';
function Todo() {
    return (
        <>
            <h1>This is TODO page</h1>
            <label htmlFor="todo">TODO</label>
            <input id='todo' type="text" />

        </>
    )
}
export default Todo;