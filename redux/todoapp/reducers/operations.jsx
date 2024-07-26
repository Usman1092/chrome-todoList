
import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO,UPDATE_TODOS_ORDER } from "../actions";

// const initialState=[
    // {id: 1, todo: 'Buy Laptop', completed: false},
    // {id: 2, todo: 'Master Redux', completed: false},
    // {id: 3, todo: 'Watering Plants', completed: true},
// ];
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const operationsReducer=(state=initialState, action)=>{
   let newState; 
   switch (action.type) {
        case ADD_TODO:
            newState = [...state, action.payload];
            break;
        case DELETE_ALL:
            newState = [];
            break;
        case REMOVE_TODO:
            newState = state.filter((todo) => todo.id !== action.payload);
            break;
        case UPDATE_TODO:
            newState = state.map((item) =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );
            break;
        case UPDATE_CHECKBOX:
            newState = state.map((item) =>
                item.id === action.payload ? { ...item, completed: !item.completed } : item
            );
            break;
            
        // case UPDATE_TODOS_ORDER:
        //     return { ...state, todos: action.payload };
        case UPDATE_TODOS_ORDER:
            newState = action.payload;
            break;
        default:
            newState = state;
    }
    localStorage.setItem('todos', JSON.stringify(newState));
    return newState;
}