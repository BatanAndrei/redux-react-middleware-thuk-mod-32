import { addManyCustomersAction } from '../Reducers/Reducers';

export const fetchAction = () => {
    return (dispatch, getState) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {dispatch(addManyCustomersAction(json));
        console.log('current state', getState())})
        }
    }
