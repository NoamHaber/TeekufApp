import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BusContext from "../Context/BusContext";

function TeekufFooter(){
    
    const {print_mode} = useContext(BusContext);

    return(    
        <div id="footer-flow" style={{'display' : (!print_mode) ? 'flex' : 'none'}}>
            <span id="footer-text">
            השימוש הוא על דעת המשתמש בלבד ועל פי נהלי משרד התחבורה
            <FaGithub style={{'margin':'2.5px 2px'}}/>
            <FaLinkedin style={{'margin':'2.5px 2px'}}/>
            </span>
        </div>
    )
}

export default TeekufFooter
