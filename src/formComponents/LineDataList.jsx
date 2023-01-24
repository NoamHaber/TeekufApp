import { useEffect,useState } from "react"
import BusLogoArray from "../NativeData/BusLogoArray";

function LineDataList({InputLine,linePayLoad,updateInput}){

    const [isLineChosen,setIsLineChosen] = useState(false);
    const [lineChosen,setLineChosen] = useState('');
    const [lineList,setLineList] = useState([]);

    const destObject = (destString) =>{
        let destArray =[]
        let cityOfDest=''
        let describedDest=''
        if(destString.substr(0,7)!=='בית שמש'){
            destArray=destString.split(' ');
            cityOfDest=destArray[0];
            describedDest='';
            for (let i=1;i<destArray.length;i++){
                describedDest+=destArray[i]+" ";
            }
        }
        else{
            cityOfDest=destString.substr(0,7);
            describedDest=destString.substr(-(destString.length-7));
        }
        
        return {'city':cityOfDest,'destination':describedDest}
    }

    const handleInputChange = (line) =>{
        updateInput(line);
        setIsLineChosen(true);
        setLineChosen(line);
    }

    useEffect(()=>{
    if(InputLine.length>0 && InputLine!==lineChosen){
            setIsLineChosen(false);
    }
    setLineList(linePayLoad.filter((item)=>item['NAME'].startsWith(InputLine)));
    },[InputLine]);

    return(
        <div id="data-list-container" style={{'display' : (InputLine==='') ? 'none' : (isLineChosen===true) ? 'none' : 'flex'}}>           
            {lineList.slice(0,5).map((item)=><span key={item['ID']} className="city-item" style={{'display':'flex','justifyContent':'space-between','overflow':"hidden"}} onClick={()=>handleInputChange(item['NAME'])}><span style={{'textAlign':'center','fontSize':'14px','padding':'0px 3px','position':'relative','top':'2px'}}>{destObject(item['DestinationName'])['city']}</span><span style={{'textAlign':'center','fontSize':'12px','padding':'0px 3px','position':'relative','top':'2px'}}>{destObject(item['DestinationName'])['destination']}</span><span style={{'textAlign':'center'}}>{item['NAME']} <img style={{'position':'relative','top':'1.5px'}}src={BusLogoArray()[parseInt(item['CompanyId'])]} /></span></span>)}
        </div>
    )
}

export default LineDataList