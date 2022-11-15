import React, { useState } from 'react';
import AppContext from './app-context';
function AppState(props) {
    const [message1, setMessage1] = useState("Message1");
    const [message2, setMessage2] = useState("Message2");
    return (
        <>
            <AppContext.Provider value={{ message1,message2 }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;