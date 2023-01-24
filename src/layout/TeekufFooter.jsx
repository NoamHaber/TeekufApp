import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BusContext from "../Context/BusContext";

function TeekufFooter(){
    
    const {print_mode} = useContext(BusContext);

    return(    
        <div id="footer-flow" style={{'display' : (!print_mode) ? 'flex' : 'none','justifyContent':'space-between'}}>
            <a href="https://www.linkedin.com/in/noam-haber-a101521a3/" target="_blank" style={{'color':'blue','marginLeft':'4px'}} ><FaLinkedin style={{'position':'relative','height':'40px','width':'40px'}}/></a>    
            <span id="footer-text" style={{'text-align':'center'}}>השימוש הוא על דעת המשתמש בלבד ועל פי נהלי משרד התחבורה</span>
            <a href="https://github.com/NoamHaber/" target="_blank" style={{'color':'red','marginRight':'4px'}} ><FaGithub style={{'position':'relative','height':'40px','width':'40px'}}/></a>    
        </div>
    )
}

export default TeekufFooter
