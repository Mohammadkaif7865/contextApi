import { ADD_STUDENT, DELETE_STUDENT, FEE_PAID } from "./student-action"
const studentReducer = (state, action) => {
    switch (action.type) {
        case ADD_STUDENT:

            return {
                ...state,
                students: [...state.students, action.payload]
            }

        default:
            return state;
    }
}
export default studentReducer;