import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Detail() {
    const { message2 , isAuth} = useContext(AppContext);
    return (
        <>
            <h1 style={{backgroundColor: isAuth? 'green' : 'red'}} >This is the detail component</h1>
            <p>{message2}</p>
        </>
    )
}
export default Detail;