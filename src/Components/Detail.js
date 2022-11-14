import React, { useContext } from 'react';
import AppContext from '../Context/App-context';
function Detail() {
    const { message } = useContext(AppContext);
    return (
        <>
            <h1>This is the detail component</h1>
            <p>message</p>
        </>
    )
}
export default Detail;