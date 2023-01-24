import { useEffect,useState,useContext } from "react"
import BusContext from "../Context/BusContext"

function CityDataList({InputCity,updateInput}){

    const {cityNames} = useContext(BusContext);
    const [cityList,setCityList] = useState([]);
    const [cityChosen,setCityChosen] = useState(false)
    
    const handleInputChange = (e) =>{
        e.preventDefault();
        updateInput(e.target.innerText);
        setCityChosen(true);
    }

    useEffect(()=>{
        if(cityList.length>0 && cityNames.filter((item)=>item['CityName'].startsWith(InputCity)).length>0)
        {
            if(cityNames.filter((item)=>item['CityName'].startsWith(InputCity))[0]['CityName']!==InputCity){
                setCityChosen(false);
            }
        }
        setCityList(cityNames.filter((item)=>item['CityName'].startsWith(InputCity)))        
    },[InputCity]);

    return(
        <div id="data-list-container" style={{'display' : (InputCity==='') ? 'none' : (cityChosen===true) ? 'none' : 'flex'}}>
            {cityList.slice(0,5).map((item)=><span key={item['key']} className="city-item" onClick={handleInputChange}> {item['CityName']}</span>)}
        </div>
    )
}

export default CityDataList