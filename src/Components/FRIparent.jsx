import React from 'react';
import FRInput from './Elements/FRInput';
function FRIparent() {
    let inputRef = React.createRef();
    return (
        <>
            <FRInput ref={inputRef}/>
            <button>Focus On</button>
        </>
    )
}
export default FRIparent;