import React, { useRef, useEffect } from 'react';
function Ref() {
    const inputRef = useRef();
    const handleSubmit = () => {
        if (refer) {
            console.log(refer.value);
        }
        // alert(` input value is ${inputRef.current.value}`);
    }
    let refer = null;
    const setRef = (e) => {
        refer = e;
    }
    useEffect(() => {
        if (refer) {
            refer.focus();
        }
      
    }, [])
    return (
        <>
            <div className="container">
                <h1>This is Ref Component</h1>
                <input type="text" ref={inputRef} onChange={()=> console.log(inputRef)}/>
                <input type="text" ref={setRef} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
export default Ref;
// ? We do not always require hooks for ref we can simply pass element with its dom object in a function so for our easiness react have created useRef