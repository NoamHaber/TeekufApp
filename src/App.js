import './App.css';
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import { BusProvider } from './Context/BusContext';
import TeekufHead from './layout/TeekufHead'
import About from './pages/About'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QrPrintPage from './pages/QrPrintPage'
import CreateQrCode from './pages/CreateQrCode';
import TeekufFooter from './layout/TeekufFooter'
import BusCompanyUnsupported from './pages/BusCompanyUnsupported';
import NoInternetConnection from './pages/NoInternetConnection';

function App() {
  return (
    <BusProvider>
      <Router>      
        <TeekufHead />
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/CreateQrCode" element={<CreateQrCode/>} />
                <Route path="/NotFound" element={<NotFound/>} />
                <Route path="/busNotSupported/:company" element={<BusCompanyUnsupported />} />
                <Route path="/NoInternetConnection" element={<NoInternetConnection />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/QrCodeForPrint/:id/:line/:company" element={<QrPrintPage />} />
            </Routes>
          <TeekufFooter />
      </Router>
    </BusProvider>  
  );
}

export default App;