import ImageArray from '../NativeData/ImageArray';
import { FaPrint, FaDownload, FaRedo } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import BusContext from '../Context/BusContext';

function QrDisplayer({FormPayLoad,LineCompany})
{

    const {line,line_company,line_company_name,dispatch} = useContext(BusContext);

    const navigate = useNavigate();

    const restartForm = () => {
        dispatch({type:'CLEAR_INFORMATION'});
    }

    useEffect(()=>{
        if(line_company===ImageArray()[line_company])
        {
            navigate("/busNotSupported/"+line_company_name);
        }
    },[]);

    return(
        <>
            <div id="qr-layout">
                <div id="qr-container">
                    <div id="qr-title">
                        קוד לסריקה
                    </div>
                    <img id="qr-symbol" src={ImageArray()[LineCompany]}/>
                    <div id="qr-actions">
                        <div id="print-action" className='qr-action'>
                            <Link to={'/QrCodeForPrint/'+LineCompany+'/'+line+'/'+line_company_name} target="_blank" className="qr-action-text">הדפס</Link>
                            <FaPrint />
                        </div>   
                        <div id="download-action" className='qr-action'>
                        <a href={ImageArray()[LineCompany]} download className="qr-action-text">הורד</a>
                            <FaDownload />
                        </div>
                        <div id="new-code-action" className='qr-action'>
                        <Link to="/" id="new-form" onClick={restartForm} className="qr-action-text">חדש</Link>
                            <FaRedo />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrDisplayer