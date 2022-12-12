import React from 'react';
import Wrapper2 from './Wrapper2';
function Item(props) {
    console.log(props);
    return (
        <>
            <h1>This is item component</h1>
        </>
    )
}
export default Wrapper2(Item);