import React from 'react';
function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        return <OriginalComponent name="hola" />
    }
    return NewComponent;
}
export default UpdatedComponent;