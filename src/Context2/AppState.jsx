import React from 'react';
import AppContext from '../Context/app-context';
import reducerFunction from './student-reducer';
function AppState(props) {
    return (
        <>
            <AppContext.Provider>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;