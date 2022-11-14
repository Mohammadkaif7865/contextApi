import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Detail() {
    const { message2 } = useContext(AppContext);
    return (
        <>
            <h1>This is the detail component</h1>
            <p>{message2}</p>
        </>
    )
}
export default Detail;