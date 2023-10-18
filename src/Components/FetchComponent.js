import { fetchAction } from '../Actions/fetchAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function FetchComponent() {
   const dispatch = useDispatch();
   let resTodos = [];
   resTodos = useSelector((state) => state?.todos[0]);
   
    useEffect(() => {
    dispatch(fetchAction())
}, [])

    return(
        <>
            <div>
               {resTodos?.map((tod) => <div key={tod.id}>* {tod.title}</div>)}
            </div>
        </>
    )
}

export default FetchComponent;