import React, { useState } from 'react';
function UpdatedComponent(OriginalComponent) {
    const [counter, setCounter] = useState(0);
    const increamentCounter = () => setCounter(counter + 1);
    function NewComponent() {
        return <OriginalComponent name="hola" counter={counter} increamentCounter={increamentCounter} />
    }
    return NewComponent;
}
export default UpdatedComponent;