const INIT_TODOS = 'INIT_TODOS';

const initialState = {
    todos: []
}


export function Reducer(state = initialState, action) {
    switch(action.type) {
        case INIT_TODOS: {
            return{
                ...state,
                todos: [action.payload] 
            }
        } 
    }
}

export const addManyCustomersAction = (todos) => ({ type: INIT_TODOS, payload: todos}) 
