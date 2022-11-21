import React,{useState} from 'react';
function Hover() {
    const [counter, setCounter] = useState(0);
    const increamentCounter = () => setCounter(counter + 1);
    return (
        <>
            <div>
                <button className='btn btn-light' onMouseOver={() => increamentCounter()}>Clicked {counter} number of times</button>
            </div>
        </>
    )
}
export default Hover;