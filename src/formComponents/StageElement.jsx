import { useContext } from "react"
import BusContext from "../Context/BusContext"

function StageElement()
{
    const {form_stage} = useContext(BusContext);

    return(
        <div id="stage-layout">
            <div id="text-container">
                <span className="stage-text-container">
                        <span className="stage-text-flow"><span className="stage-text" style={{'color':(form_stage['stageNum']===2) ? 'purple':'grey'}}> קוד QR </span></span>
                        <span className="stage-stance-flow"><span className="stage-stance" style={{'border':(form_stage['stageNum'] === 2) ? '2px solid white' : 'none','backgroundColor':(form_stage['stageNum'] === 2) ? 'purple' : 'grey'}}></span></span>
                </span>
                <span className="connecting-line-flow"><span className="connecting-line" style={{'backgroundColor': (form_stage['stageNum']>1) ? 'purple' : 'grey'}}></span></span>
                <span className="stage-text-container">
                        <span className="stage-text-flow"><span className="stage-text" style={{'color':(form_stage['stageNum'] > 0) ? 'purple' : 'grey'}}> מספר קו </span></span>
                        <span className="stage-stance-flow"><span className="stage-stance" style={{'border':(form_stage['stageNum'] === 1) ? '2px solid white' : 'none','backgroundColor':(form_stage['stageNum']>0) ? 'purple' : 'grey'}}></span></span>
                </span>
                <span className="connecting-line-flow"><span className="connecting-line" style={{'backgroundColor':(form_stage['stageNum']>0)?'purple':'grey'}}></span></span>                
                <span className="stage-text-container" >
                        <span className="stage-text-flow"><span className="stage-text" style={{'color':(form_stage['stageNum'] > -1) ? 'purple' : 'grey'}}> שם יישוב </span></span>
                        <span className="stage-stance-flow"><span className="stage-stance" style={{'border':(form_stage['stageNum'] === 0) ? '2px solid white' : 'none','backgroundColor':'purple'}}></span></span>
                </span>
            </div>
        </div>
    )
}

export default StageElement