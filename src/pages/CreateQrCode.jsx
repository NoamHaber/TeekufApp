import TeekufForm from '../formComponents/TeekufForm'
import StageElement from '../formComponents/StageElement';
import { useContext } from 'react';
import BusContext from '../Context/BusContext';
import { useEffect } from 'react';

function CreateQrCode()
{
    
    const {dispatch} = useContext(BusContext);

    const restartForm = () => {
        dispatch({type:'CLEAR_INFORMATION'});
    }

    useEffect(()=>{
        restartForm();
    },[]);
    
    return(
        <div>
            <StageElement />
            <TeekufForm />
        </div>
    )
}

export default CreateQrCode
