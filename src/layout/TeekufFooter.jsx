import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BusContext from "../Context/BusContext";

function TeekufFooter(){
    
    const {print_mode} = useContext(BusContext);

    return(    
        <div id="footer-flow" style={{'display' : (!print_mode) ? 'flex' : 'none'}}>
            <span id="footer-text">
            השימוש הוא על דעת המשתמש בלבד ועל פי נהלי משרד התחבורה
            <FaGithub href="https://github.com/NoamHaber/" target="_blank" style={{'margin':'2.5px 2px','position':'relative','top':'2px'}}/>
            <FaLinkedin href="https://www.linkedin.com/in/noam-haber-a101521a3/" target="_blank" style={{'margin':'2.5px 2px', 'position':'relative','top':'2px'}}/>
            </span>
        </div>
    )
}

export default TeekufFooter
