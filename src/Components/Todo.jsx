import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Todo() {
    const { todo, setTodo } = useContext(AppContext);
    console.log(todo);
    return (
        <>
            <h1>This is TODO page</h1>
            <label htmlFor="todo">TODO</label>
            <input id='todo' type="text" />

        </>
    )
}
export default Todo;