import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo-action";
const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
       return {}
        case DELETE_TODO:
       return {}
        case TOGGLE_TODO:
       return {}

        default:
            return state;
    }
}