import { useContext,useEffect } from "react";
import BusContext from "../Context/BusContext";

function NoInternetConnection()
{

    const {dispatch} = useContext(BusContext);

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
                    אין חיבור אינטרנט פעיל
                </div>
                <div id="unsupported-paragraph" style={{'textAlign':'center'}}>
                    אין אפשרות להשתמש באפליקציה ללא חיבור אינטרנט
                    <br />
                    ?ניסיתם לנתק ולחבר? לכבות ולהדליק מחדש
                </div>
            </div>
        </div>
    )
}

export default NoInternetConnection