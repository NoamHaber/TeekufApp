import {useContext, useEffect, useState} from 'react'
import BusContext from '../Context/BusContext'
import FormInput from '../formComponents/FormInput'
import loadingSvg from "../resources/loading.svg" 
import {lineLoad } from '../Context/BusActions';
import QrDisplayer from './QrDisplayer';



function TeekufForm(){

    const {form_stage,loading,line_company,cityNames,cityLines,line_company_name,dispatch} = useContext(BusContext);
    const [formPayLoad,setFormPayLoad] = useState([])
    const formStageStructure = [{'stageNum':0,'stageAction':'CityChoice'},{'stageNum':1,'stageAction':'LineChoice'},{'stageNum':2,'stageAction':'QrDisplay'}]

    useEffect(()=>{
        dispatch({type:'START_LOADING'});
        setFormPayLoad(cityNames);
        dispatch({type:'FINISH_LOADING'})
    },[]);

    useEffect(()=>{
        if(form_stage['stageNum']==1){
            setFormPayLoad(cityLines);
        }
        if(form_stage['stageNum']==2){
            setFormPayLoad(line_company);
        }
    },[form_stage['stageNum']]);

    const citySubmit = async (cityInput) => {
        dispatch({type:'START_LOADING'});
        dispatch({type:'SET_CITY',payload:cityInput});
        dispatch({type:'SET_CITY_LINES',payload:await lineLoad(formPayLoad.filter((item) => {return item['CityName'] == cityInput})[0]['CityCode'])});
        dispatch({type:'ADVANCE_FORM_STAGE',payload:formStageStructure[form_stage['stageNum']+1]});
        setFormPayLoad(cityLines);
        dispatch({type:'FINISH_LOADING'});
    }

    const lineSubmit = (lineInput) => {
        dispatch({type:'START_LOADING'});
        dispatch({type:'SET_LINE',payload:lineInput});
        dispatch({type:'SET_LINE_COMPANY',payload:formPayLoad.filter((item) => {return item['NAME'] === lineInput})[0]['CompanyId']})
        dispatch({type:'SET_LINE_COMPANY_NAME',payload:formPayLoad.filter((item) => {return item['NAME'] === lineInput})[0]['CompanyName']})
        dispatch({type:'ADVANCE_FORM_STAGE',payload:formStageStructure[form_stage['stageNum']+1]});
        dispatch({type:'FINISH_LOADING'});
    }


    if(loading){
        return(
            <div className="body-element">
                <div id="form-container">
                    <img src={loadingSvg} className="loading-svg" alt="Page is loading..." />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="body-element">

                    {
                        (form_stage['stageNum'] == 0)
                        ?(
                            <>
                            <div id="form-container">
                                <FormInput FormTitle='שם יישוב/עיר' FormPayLoad={formPayLoad} FormActionName='הבא' FormAction={citySubmit}/>
                            </div>
                            </>
                        ) 
                        :(form_stage['stageNum'] == 1)
                        ?(
                            <>
                            <div id="form-container">
                                <FormInput FormTitle='מספר קו' FormPayLoad={formPayLoad} FormActionName='הבא' FormAction={lineSubmit} />
                            </div>
                            </>
                        )
                        :(
                            <QrDisplayer FormPayLoad={formPayLoad} LineCompany={line_company}/>
                        )
                    }
            </div>
        )
    }
}

export default TeekufForm
