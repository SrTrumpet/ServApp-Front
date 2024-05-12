import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import Register from './pages/Register';


const App = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/ForgotPass" element={<ForgotPass/>} />
                <Route path='/Register' element = { <Register/>} />
            </Routes>
    
        </Router>
    );

}

export default App;