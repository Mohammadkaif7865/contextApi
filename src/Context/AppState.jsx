import React, { useState, useReducer, useEffect } from 'react';
import AppContext from './app-context';
import reducerFunction from './todo-reducer';
import { ADD_TODO, TOGGLE_TODO, ADD_STUDENT, DELETE_STUDENT, FEE_PAID, DELETE_TODO, INITIALIZE_STUDENTS } from './todo-action';
const url = "https://energetic-cyan-fedora.cyclic.app/getStudents";
function AppState(props) {
    const [students, setStudents] = useState([]);
    const initialState = {
        todos: [{ id: 43423, text: 'make coffee', complete: false }], // # {id: random_number , text: random_string , complete: booleans}
        students: students
    }
    console.log(students);
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
    // * FEE_PAID
    const feesPaid = (id) => {
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
        fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => setStudents(data));
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