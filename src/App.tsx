import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';



const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/olvido-de-contrasenna" element={<ForgotPass/>} />
                <Route path='/registrarse' element = { <Register/>} />
            </Routes>
        </Router>
    );

}

export default App;