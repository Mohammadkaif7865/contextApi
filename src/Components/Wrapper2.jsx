import React, { useState } from 'react';
function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [name, setName] = useState("xyz");
        return <OriginalComponent name={name} setName={setName} />
    }
    return NewComponent;
}
export default UpdatedComponent;
