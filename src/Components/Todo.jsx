import React, { useContext, useState } from 'react';
import AppContext from '../Context/app-context';
import './todo.css';
function Todo() {
    const [todoText, setTodoText] = useState("");
    const { todos, addTodo, deleteTodo, toggleTodo } = useContext(AppContext);
    return (
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task to be Done</label>
                    <input type='text' className="form-control" id="exampleInputEmail1" value={todoText} aria-describedby="emailHelp" onChange={(e) => setTodoText(e.target.value)} />
                </div>
                <button type="buttom" className="btn btn-primary" onClick={() => addTodo({ id: Math.floor(Math.random() * 10000), text: todoText, complete: false })}>TODO</button>
            </div>

            {
                todos.map((item, i) => {
                    return <div className="todo" key={i}>
                        <div className="todoTopic">
                            <h2 style={{ color: item.complete ? 'green' : 'red ' }}>{item.text}</h2>
                        </div>
                        <button className='btn btn-success' onClick={() => toggleTodo(item.id)}>Completed</button>
                        <button className='btn btn-danger' onClick={() => deleteTodo(item.id)}>Delete TODO</button>
                    </div>
                })
            }
        </>
    )
}
export default Todo;