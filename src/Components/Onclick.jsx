import React from 'react';
import Wrapper from './Wrapper';
function Onclick(props) {

    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={() => props.increamentCounter()}>Clicked {props.counter} number of times</button>
            </div>
        </>
    )
}
export default Wrapper(Onclick);