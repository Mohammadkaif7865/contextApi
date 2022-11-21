import React, { useContext, useState } from 'react';
import AppContext from '../Context/app-context';
function Todo() {
    const [todoText, setTodoText] = useState("");
    const { todos } = useContext(AppContext);
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task to be Done</label>
                    <input type='text' className="form-control" id="exampleInputEmail1" value={todoText} aria-describedby="emailHelp" onChange={(e) => setTodoText(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">TODO</button>
            </form>

            {
                todos.map((item, i) => {
                    return <div className="todo" key={i}>
                        <div className="todoTopic">
                            <h2>{item.text}</h2>
                        </div>
                        <button className='btn btn-success'>Completed</button>
                        <button className='btn btn-danger'>Delete TODO</button>
                    </div>
                })
            }
        </>
    )
}
export default Todo;