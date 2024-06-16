import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';
import HomeLogin from './pages/HomeLogin';
import VerServicio from './pages/VerServicio';
import mapboxgl from 'mapbox-gl';
import AñadirServicios from './pages/AñadirServicios';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW4xNyIsImEiOiJjbHhnbHJhbWExMzV6Mm1wdzczdDUxMHc2In0.wiU7M9_rXHDazJsl54Mpmg';

const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/ForgotPass" element={<ForgotPass/>} />
                <Route path='/Register' element = { <Register/>} />
                <Route path="/HomeLogin" element={<HomeLogin/>} />
                <Route path="/VerServicio/:id" element={<VerServicio/>}/>
                <Route path="/AñadirServicios" element={<AñadirServicios/>}/>
            </Routes>
        </Router>
    );

}

export default App;