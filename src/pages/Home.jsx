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
                </div>
            </div>
        </div>
    )
}

export default Home
