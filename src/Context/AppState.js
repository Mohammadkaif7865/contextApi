import React from 'react';
import AppContext from './app-context';
function AppState(props) {
    return (
        <>
            <AppContext.Provider value={{message : "This is from context"}}>
                 {props.child}
            </AppContext.Provider>
        </>
    )
}
export default AppState;