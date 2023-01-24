import { Link } from "react-router-dom"


function NotFound(){
    return(
        <div className="body-element">
            <div id="not-found-layout">
                <div id="not-found-flow">
                    <div id="not-found-header">
                        העמוד שחיפשת לא קיים
                    </div>
                    <div id="not-found-text">
                        לחזרה לדף הבית לחץ <Link to="/">פה</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound