import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Detail() {
    const { message2, setMessage2, isAuth, setIsAuth } = useContext(AppContext);
    return (
        <>
            <h1 style={{ backgroundColor: isAuth ? 'green' : 'red' }} >This is the detail component</h1>
            {
                isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Login</button>
            }
            <p>{message2}</p>
        </>
    )
}
export default Detail;