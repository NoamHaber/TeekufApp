import { createContext, useReducer } from "react";
import BusReducer from "./BusReducer";
import CityList from "../NativeData/CityList.json"

const BusContext = createContext();

export const BusProvider = ({children}) => {

    const initialState = {
        city_names : CityList,
        city : '',
        lines_of_city : [],
        form_stage: {'stageNum':0,'stageAction':'הכנס שם יישוב'},
        line: 0,
        line_company:'',
        line_company_name:'',
        qr_number: 0,
        loading: false,
        print_mode : false
    }

    const [state, dispatch] = useReducer(BusReducer, initialState);

    return(
        <BusContext.Provider value={{city : state.city, line : state.line, line_company : state.line_company, line_company_name:state.line_company_name, cityLines:state.lines_of_city,qr_number:state.qr_number,loading:state.loading,form_stage:state.form_stage,cityNames:state.city_names,print_mode:state.print_mode,dispatch}}>
            {children}
        </BusContext.Provider>
    )
}

export default BusContext