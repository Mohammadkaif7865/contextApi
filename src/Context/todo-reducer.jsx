import { ADD_TODO, DELETE_TODO, ADD_STUDENT, DELETE_STUDENT, FEE_PAID, TOGGLE_TODO } from "./todo-action";
const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => item.id === action.payload ? { ...item, complete: !item.complete } : item)
            }
        case ADD_STUDENT:

            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter((item) => item.schoolCode !== action.payload)
            }
        case FEE_PAID:
            return {
                ...state,
                students: state.students.map((item) => item.schoolCode === action.payload ? { ...item, feesPaid: !item.feesPaid } : item)
            }
        default:
            return state;
    }
}
export default todoReducer;