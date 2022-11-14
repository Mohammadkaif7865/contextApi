import React, { useState } from 'react';
import AppContext from './app-context';
function AppState(props) {
    return (
        <>
            <AppContext.Provider value={{ message1: "This is a message for home page", message2: "This is message for details" }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;