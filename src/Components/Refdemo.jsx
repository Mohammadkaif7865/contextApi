import React, { useRef, useEffect } from 'react';
function Ref() {
    const inputRef = useRef();
    const handleSubmit = () => {
         alert(` input value is ${inputRef.current.value}`);
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <>
            <div className="container">
                <h1>This is Ref Component</h1>
                <input type="text" ref={inputRef} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
export default Ref;