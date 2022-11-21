import React from 'react';
import Onclick from './Onclick';
import Hover from './Hover';
function HigherOrderComponent() {
    return (
        <>
            <Onclick />
            <Hover />
        </>
    )
}
export default HigherOrderComponent;