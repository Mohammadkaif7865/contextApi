import React, { useContext, useState } from 'react';
import AppContext from '../Context/app-context';
function Detail() {
    const { message2, setMessage2, isAuth, setIsAuth } = useContext(AppContext);
    const [message, setMessage] = useState(message2);
    return (
        <>
            <h1 style={{ backgroundColor: isAuth ? 'green' : 'red' }} >This is the detail component</h1>
            {
                isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Login</button>
            }

            <div>
                <label htmlFor="message">Message2</label>
                <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={() => setMessage2(message)}>Change</button>
            </div>

            <p>{message2}</p>
        </>
    )
}
export default Detail;