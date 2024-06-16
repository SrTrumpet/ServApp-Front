import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';
import HomeLogin from './pages/HomeLogin';
import VerServicio from './pages/VerServicio';


const App = () => {

    //aca se agrega un useEffect para definir el cambio por ejemlo si el token esta activo, que el usuario entre directamente a home
    //o que se redireccione a login si caduco el token o si no existe

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/ForgotPass" element={<ForgotPass/>} />
                <Route path='/Register' element = { <Register/>} />
                <Route path="/HomeLogin" element={<HomeLogin/>} />
                <Route path="/VerServicio/:id" element={<VerServicio/>}/>
            </Routes>
        </Router>
    );

}

export default App;