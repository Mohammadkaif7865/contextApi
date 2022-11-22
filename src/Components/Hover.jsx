import React from 'react';
import Wrapper from './Wrapper';
function Hover(props) {
    console.log(props);
    return (
        <>
            <div>
                <button className='btn btn-light' onMouseOver={() => props.increamentCounter()}> {props.name}  Clicked {props.counter} number of times</button>
            </div>
        </>
    )
}
export default Wrapper(Hover);