import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BusContext from "../Context/BusContext";

function TeekufFooter(){
    
    const {print_mode} = useContext(BusContext);

    return(    
        <div id="footer-flow" style={{'display' : (!print_mode) ? 'flex' : 'none','flexDirection':'column'}}>
            <span id="footer-text">השימוש הוא על דעת המשתמש בלבד ועל פי נהלי משרד התחבורה</span>
            <div style={{'display':'flex','justify-content':'center','justify-content':'space-evenly'}}>
                <a href="https://www.linkedin.com/in/noam-haber-a101521a3/" target="_blank" style={{'color':'blue'}} ><FaLinkedin style={{'position':'relative'}}/></a>
                <a href="https://github.com/NoamHaber/" target="_blank" style={{'color':'red'}} ><FaGithub style={{'position':'relative'}}/></a>    
            </div>
        </div>
    )
}

export default TeekufFooter
