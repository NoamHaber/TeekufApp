import eged from '../resources/bus_logos/eged_1.png'
import dan from '../resources/bus_logos/dan_3.png'
import metropolin from '../resources/bus_logos/metropolin_4.png'
import kavim from '../resources/bus_logos/kavim_11.png'
import electra_afikim from '../resources/bus_logos/electra_afikim_25.png'
import dan_beersheva from '../resources/bus_logos/dan_beersheva_32.png'
import tnufa from '../resources/bus_logos/tnufa_34.png'
import extra_jerusalem from '../resources/bus_logos/extra_jerusalem_38.png'
import superbus from '../resources/bus_logos/superbus_13.png'
import eged_taavura from '../resources/bus_logos/eged_taavura_9.png'
import dan_badarom from '../resources/bus_logos/dan_badarom_31.png'
import bet_shemesh from '../resources/bus_logos/bet_shemesh_35.png'

function BusLogoArray()
{
    const logoArray = []

    for (let i=0;i<40;i++)
    {
        logoArray.push(i);
    }

    logoArray[1]=eged;
    logoArray[3]=dan;
    logoArray[4]=metropolin;
    logoArray[9]=eged_taavura;
    logoArray[11]=kavim;
    logoArray[13]=superbus;
    logoArray[25]=electra_afikim;
    logoArray[31]=dan_badarom;
    logoArray[32]=dan_beersheva;
    logoArray[34]=tnufa;
    logoArray[35]=bet_shemesh;
    logoArray[38]=extra_jerusalem;

    return logoArray;
}

export default BusLogoArray