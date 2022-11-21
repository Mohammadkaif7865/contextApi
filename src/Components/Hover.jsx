import React, { useState } from 'react';
import Wrapper from './Wrapper';
function Hover(props) {
    const [counter, setCounter] = useState(0);
    const increamentCounter = () => setCounter(counter + 1);
    console.log(props);
    return (
        <>
            <div>
                <button className='btn btn-light' onMouseOver={() => increamentCounter()}>Clicked {counter} number of times</button>
            </div>
        </>
    )
}
export default Wrapper(Hover);