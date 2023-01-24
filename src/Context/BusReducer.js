function BusReducer(state,action)
{
    switch(action.type){
        case 'START_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'FINISH_LOADING':
            return {
                ...state,
                loading:false
            }
        case 'ADVANCE_FORM_STAGE':
            return{
                ...state,
                form_stage:action.payload
            }
        case 'SET_CITY_NAMES':
            return {
                ...state,
                city_names:action.payload
            }
        case 'SET_CITY':
            return{
                ...state,
                city:action.payload
            }
        case 'SET_CITY_LINES':
            return{
                ...state,
                lines_of_city:action.payload
            }
        case 'SET_LINE':
            return{
                ...state,
                line:action.payload
            }
        case 'SET_LINE_COMPANY':
            return{
                ...state,
                line_company:action.payload
            }
        case 'SET_LINE_COMPANY_NAME':
            return{
                ...state,
                line_company_name:action.payload
            }
        case 'SET_QR_NUMBER':
            return{
                ...state,
                qr_number:action.payload
            }
        case 'CLEAR_INFORMATION':
            return{
                ...state,
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
        case 'CHANGE_PRINT_MODE':
            return{
                ...state,
                print_mode:action.payload
            }
        default:
            return state
    }
}

export default BusReducer