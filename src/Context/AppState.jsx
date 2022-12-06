import React, { useState, useReducer, useEffect } from 'react';
import AppContext from './app-context';
import reducerFunction from './app-reducer';
import { ADD_TODO, TOGGLE_TODO, ADD_STUDENT, DELETE_STUDENT, FEE_PAID, DELETE_TODO, INITIALIZE_STUDENTS } from './app-action';
const url = "https://energetic-cyan-fedora.cyclic.app";
function AppState(props) {
    const [students, setStudents] = useState([]);
    const initialState = {
        todos: [{ id: 43423, text: 'make coffee', complete: false }], // # {id: random_number , text: random_string , complete: booleans}
        students: students
    }
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    const [message1, setMessage1] = useState("Message1");
    const [message2, setMessage2] = useState("Message2");
    const [isAuth, setIsAuth] = useState(true);
    // * INITIALIZE_STUDENTS  
    const initializeStudents = (data) => {
        dispatch({
            type: INITIALIZE_STUDENTS,
            payload: data
        })
    }
    // * ADD_STUDENT
    const addStudent = (data) => {
        dispatch({
            type: ADD_STUDENT,
            payload: data
        })
    }
    // * DELETE_STUDENT
    const deleteStudent = (id) => {
        fetch(`${url}/deleteStudent/${id}`, { method: 'DELETE' }).then((response) => response.json()).then((responseData) => console.log(responseData));
        dispatch({
            type: DELETE_STUDENT,
            payload: id
        })
    }
    // * FEE_PAID 
    const feesPaid = (id, status) => {
        const a = {
            feestatus: !status
        }
        fetch(`${url}/changeFeestatus/${id}`, {
            method: "PUT", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(a)
        }).then((res) => res.json()).then((data) => console.log(data));
        dispatch({
            type: FEE_PAID,
            payload: id
        })
    }
    // * Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }
    // * Toggle todo
    const toggleTodo = (todoId) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoId
        })
    }
    // * Delete todo
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    }
    useEffect(() => {
        fetch(`${url}/getStudents`, { method: 'GET' }).then((response) => response.json()).then((data) => setStudents(data));
    }, [])
    useEffect(() => {
        initializeStudents(students);
    }, [students])
    return (
        <>
            <AppContext.Provider value={{ setIsAuth, setMessage1, setMessage2, message1, isAuth, message2, todos: state.todos, addTodo, deleteTodo, toggleTodo, addStudent, deleteStudent, students: state.students, feesPaid }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}
export default AppState;