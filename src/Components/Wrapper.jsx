import React, { useState } from 'react';
// * This is the wrapper to provide functionality to the parameter component to follow DRY (Donnot repeat yourself)
function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [counter, setCounter] = useState(0);
        const increamentCounter = () => setCounter(counter + 1);
        return <OriginalComponent name="hola" counter={counter} increamentCounter={increamentCounter} />
    }
    return NewComponent;
}
export default UpdatedComponent;