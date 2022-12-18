import React, { useRef, useEffect } from 'react';
function Ref() {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
    }, [])
    return (
        <>
            <div className="container">
                <h1>This is Ref Component</h1>
                <input type="text" ref={inputRef} />
            </div>
        </>
    )
}
export default Ref;