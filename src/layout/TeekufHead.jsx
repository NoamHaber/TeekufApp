import BusContext from '../Context/BusContext'
import { useContext } from 'react'
import { FaBus, FaQrcode } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function TeekufHead(){
    
    const restartForm = () => {
        dispatch({type:'CLEAR_INFORMATION'});
        console.log('called');
    }

    const {dispatch,print_mode} = useContext(BusContext);

    return(
        <div id='head-flow' style={{'display':(!print_mode) ? 'block' : 'none'}}>
            <div id='head-container'>
                <Link to="/" onClick={restartForm} className='page-links'>
                    <div id="head-logo">
                        <FaBus id='bus-logo'/>
                        <span id='text-logo'>
                        </span>
                        <FaQrcode id='qr-logo'/>
                    </div>
                </Link>
                <div id="head-menu">
                    <Link to="/About" className='page-links'>
                        <div className="nav-item">
                            אודות
                        </div>
                    </Link>
                    <Link to="CreateQrCode" className='page-links'>
                        <div className="nav-item" >
                            QR צור קוד
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeekufHead