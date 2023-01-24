import eged from '../resources/qr_codes/eged_1.png'
import dan from '../resources/qr_codes/dan_3.png'
import metropolin from '../resources/qr_codes/metropolin_4.png'
import kavim from '../resources/qr_codes/kavim_11.png'
import electra_afikim from '../resources/qr_codes/electra_afikim_25.png'
import dan_beersheva from '../resources/qr_codes/dan_beersheva_32.png'
import tnufa from '../resources/qr_codes/tnufa_34.png'
import extra_jerusalem from '../resources/qr_codes/extra_jerusalem_38.png'
import superbus from '../resources/qr_codes/superbus_13.png'
import dan_badarom from '../resources/qr_codes/dan_badarom_31.png'
import eged_taavura from '../resources/qr_codes/eged_taavura_9.png'

function ImageArray() {
    
    const ImgArray = []

    for (let i=0;i<180;i++)
    {
        ImgArray.push(i);
    }

    ImgArray[1]=eged;
    ImgArray[3]=dan;
    ImgArray[4]=metropolin;
    ImgArray[9]=eged_taavura;
    ImgArray[11]=kavim;
    ImgArray[13]=superbus;
    ImgArray[25]=electra_afikim;
    ImgArray[31]=dan_badarom;
    ImgArray[32]=dan_beersheva;
    ImgArray[34]=tnufa;
    ImgArray[38]=extra_jerusalem;

    return ImgArray
}

export default ImageArray