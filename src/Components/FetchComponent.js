import { fetchAction } from '../Actions/fetchAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  Style  from './FetchComponentStyle.module.css';


function FetchComponent() {
   const dispatch = useDispatch();
   let resTodos = [];
   resTodos = useSelector((state) => state?.todos[0]);
   
    useEffect(() => {
    dispatch(fetchAction())
}, [])

    return(
        <>
            {resTodos?.map((tod) => 
                <>
                    <div className={Style.position}>
                        <div className={Style.gap} key={tod.id}>id: {tod.id} -</div>
                        <div className={Style.color} key={tod.id}>{tod.title}</div>
                    </div>
               </>)}
        </>
    )
}

export default FetchComponent;