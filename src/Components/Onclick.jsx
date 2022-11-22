import React from 'react';
import Wrapper from './Wrapper';
function Onclick(props) {
    console.log(props);
    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={() => props.increamentCounter()}>{props.name} Clicked {props.counter} number of times</button>
            </div>
        </>
    )
}
export default Wrapper(Onclick);