
const TransportAddress = "https://bus.gov.il/WebApi/api/passengerinfo/";
const LinesOfCityQuery="GetBusLineListByYeshuv/";

export const lineLoad = async (cityCode) =>{

    if(navigator.onLine===false) {
        window.location.href=('/NoInternetConnection');
    }
    else{
        const lineData = await fetch(TransportAddress+LinesOfCityQuery+cityCode+"/1/he/false");
        if(lineData.status === 404 && lineData.status === 400){
            window.location.href=('/notfound');
        }
        else{
            const lineJson = await lineData.json();
            const lineList = lineJson;
            return lineList;
        }
        }
}

