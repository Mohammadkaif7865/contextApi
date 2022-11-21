import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo-action";
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
                todos: state.todos.filter((item)=> item.id !== action.payload)
             }
        case TOGGLE_TODO:
            return { 
                ...state,
                todos: state.todos.map((item)=> item.id === action.payload?{...item, complete: !item.complete}: item )
             }

        default:
            return state;
    }
}
export default todoReducer;