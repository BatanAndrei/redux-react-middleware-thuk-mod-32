import { fetchAction } from '../Actions/fetchAction';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';


function FetchComponent({store}) {
   const dispatch = useDispatch();
   
    useEffect(() => {
    dispatch(fetchAction());
}, [])

    return(
        <>
            <div>
               {}
            </div>
        </>
    )
}

export default FetchComponent;