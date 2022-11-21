import React, { useState } from 'react';
function Onclick() {
    const [counter, setCounter] = useState(0);
    const increamentCounter = () => setCounter(counter + 1);
    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={() => increamentCounter()}>Clicked {counter} number of times</button>
            </div>
        </>
    )
}
export default Onclick;