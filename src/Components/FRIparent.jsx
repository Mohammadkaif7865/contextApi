import React from 'react';
import FRInput from './Elements/FRInput';
function FRIparent() {
    let inputRef = React.createRef();
    const FocusInput = () => {
        inputRef.current.focus();
    }
    return (
        <>
            <FRInput ref={inputRef} />
            <button onClick={FocusInput}>Focus On</button>
        </>
    )
}
export default FRIparent;