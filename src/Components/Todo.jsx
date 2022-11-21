import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Todo() {
    const { todos } = useContext(AppContext);
    console.log(todos);
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task to be Done</label>
                    <input type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">TODO</button>
            </form>
        </>
    )
}
export default Todo;