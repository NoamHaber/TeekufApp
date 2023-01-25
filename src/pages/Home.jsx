import { FaQrcode, FaBus } from "react-icons/fa"

function Home(){
    return(
        <div id="home-container" className="body-element">
            <div id="home-flow">
                <div id="home-element">
                    <span id="home-text">לנסוע איך שמתאים לך</span>
                    <div id="home-icons">
                        <FaQrcode className="home-icon" />
                        <FaBus className="home-icon" />
                    </div>
                    <Link to="/CreateQrCode" style={{'display':'flex','justifyContent':'center'}}>
                        <button id="start-form">
                                    QR צור קוד
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
