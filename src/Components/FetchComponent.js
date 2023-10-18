import { fetchAction } from '../Actions/fetchAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function FetchComponent() {
   const dispatch = useDispatch();
   //const todos = useSelector((state) => state.todos)

   useEffect(() => {
    dispatch(fetchAction());
}, [])
    return(
        <>
            <button onClick={() => dispatch(fetchAction())}>Get users</button>
        </>
    )
}

export default FetchComponent;