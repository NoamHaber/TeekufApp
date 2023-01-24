import { useEffect,useContext } from "react"
import { useParams,Link } from "react-router-dom";
import BusContext from "../Context/BusContext";

function BusCompanyUnsupported()
{

    const {dispatch} = useContext(BusContext);

    const params = useParams();
    const companyName = params.company;

    const restartForm = () => {
        dispatch({type:'CLEAR_INFORMATION'});
        console.log('called');
    }

    useEffect(()=>{
        restartForm();   
    },[]);

    return(
        <div className="body-element">
            <div id="unsupported-flow">
                <div id="unsupported-header">
                    אין תמיכה בחברת {companyName}
                </div>
                <div id="unsupported-paragraph">
                    לצערנו אין לנו תמיכה בחברה '{companyName}'.
                    {"\n"} אם תוכלו לצלם את הברקוד באוטובוס ולשלוח לי הודעה בלינקדאין, אנסה להוסיף תמיכה
                    {"\n"} בחברה בהמשך.
                    {"\n"} לפרטים ויצירת קשר לחץ <Link to="/about"> פה. </Link> 
                </div>
            </div>
        </div>
    )
}

export default BusCompanyUnsupported