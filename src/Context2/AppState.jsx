import React, { useReducer } from 'react';
import AppContext from '../Context/app-context';
import { DELETE_STUDENT, ADD_STUDENT, FEE_PAID } from './student-action';
import reducerFunction from './student-reducer';
function AppState(props) {
    const initialState = {
        students: [{ name: "Rohan", schoolRollNumber: "12122008rohan", class: 2, section: 'A', feesPaid: false }]
    }
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    // * DELETE_STUDENT
    const deleteStudent = (id) => {
        dispatch({
            type: DELETE_STUDENT,
            payload: id
        })
    }
    // * ADD_STUDENT
    const addStudent = (data) => {
        dispatch({
            type: ADD_STUDENT,
            payload: data
        })
    }
    return (
        <>
            <AppContext.Provider>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;