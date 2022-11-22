import React, { useState } from 'react';
function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [counter, setCounter] = useState(0);
        const increamentCounter = () => setCounter(counter + 1);
        return <OriginalComponent name="hola" counter={counter} increamentCounter={increamentCounter} />
    }
    return NewComponent;
}
export default UpdatedComponent;