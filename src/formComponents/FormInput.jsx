import { useEffect, useState } from "react";
import CityDataList from "./CityDataList";
import LineDataList from "./LineDataList";
import StageElement from "./StageElement";

function FormInput({FormTitle,FormPayLoad,FormActionName,FormAction})
{
    const [inputValue,setInputValue] = useState('');

    const validityCheck = () => {
        if(FormTitle == 'שם יישוב/עיר')
        {
            return FormPayLoad.map((item)=>{return item['CityName']});
        }
        if(FormTitle == 'מספר קו')
        {
            return FormPayLoad.map((item)=>{return item['NAME']})
        }
    }

    const validityArray = validityCheck();

    const updateInput = (update) =>{
        setInputValue(update);
    }

    const inputHandle = (e) => {
        setInputValue(e.target.value);
    }    

    const formSubmit = (e) => {
        e.preventDefault();
        if (validityArray.includes(inputValue)){
            FormAction(inputValue);
            setInputValue('');
        }
    }

    return(
        <>
            <div id="form-input-container">
                <form id="teekuf-form" onSubmit={formSubmit}>
                    <div className="form-input">
                        <div className="form-text">{FormTitle}</div>
                        <input list="form-data" className="form-input-element" onChange={inputHandle} value={inputValue}/>
                    </div>
                    {(FormTitle=='שם יישוב/עיר') 
                        ? (
                            <CityDataList InputCity={inputValue} updateInput={updateInput}/>
                        )
                        : (                                                                                            
                            <LineDataList InputLine={inputValue} linePayLoad={FormPayLoad} updateInput={updateInput}/>
                        )
                    }
                    <button id="generate-qr" style={{backgroundColor: (validityArray.includes(inputValue)) ? 'purple':'#121212',color:(validityArray.includes(inputValue)) ? 'white':'#121212'}}>
                        {FormActionName}
                    </button>
                </form>
            </div>
        </>
    )
}


export default FormInput
