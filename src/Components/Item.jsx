import React from 'react';
import { useState } from 'react';
import Wrapper2 from './Wrapper2';
function Item(props) {
    const [value, setValue] = useState('');
    return (
        <>
            <h1>Name: {props.name}</h1>
            <input type="text" value={value} onChange={(e) => { props.setName(e.target.value); setValue(e.target.value) }} />
        </>
    )
}
export default Wrapper2(Item);