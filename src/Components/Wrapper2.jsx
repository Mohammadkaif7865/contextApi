import React, { useState } from 'react';
function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [name, setName] = useState("xyz");
        return <OriginalComponent name={name} setName={setName} />
    }
    return NewComponent;
}
// ? Once you leaked the your secret it no longer yours haha!!
export default UpdatedComponent;
