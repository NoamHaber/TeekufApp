import BusContext from "../Context/BusContext";
import ImageArray from "../NativeData/ImageArray";
import { useParams } from "react-router-dom";
import { useContext, useEffect} from "react";


function QrPrintPage(){

    const {dispatch} = useContext(BusContext);
    const params = useParams();
    const ImgId = parseInt(params.id);
    const lineNum = params.line;
    const companyName = params.company;

    useEffect(()=>{
        dispatch({type:'CHANGE_PRINT_MODE',payload:true});
        setTimeout(()=>{
            window.print();
        },1000)
    },[]);

    return(
        <div id="printPage">
            <h1> {companyName} - קו {lineNum} </h1>
            <img  id="print-img"src={ImageArray()[ImgId]}/>
        </div>
    )

}

export default QrPrintPage