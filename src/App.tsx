import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';
import HomeLogin from './pages/HomeLogin';
import VerServicio from './pages/VerServicio';
import mapboxgl from 'mapbox-gl';
import AñadirServicios from './pages/AñadirServicios';
import Chat from './pages/Chat';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW4xNyIsImEiOiJjbHhpOGt6MjYxbTl4MnFvdjFnOTlmNHVyIn0.kCns696dW_1ZZaK8qXtAFQ';

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
                <Route path="/chat" element={<Chat userId="23"/>}/>
            </Routes>
        </Router>
    );
}

export default App;