//import logo from './logo.svg';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import AgregarMenu from './pages/agregarMenu/AgregarMenu';
import VerMenu from './pages/verMenu/VerMenu';
import './App.css';

//import {BsWhatsapp} from "react-icons/bs/BsWhatsapp";
import {  Routes, Route } from "react-router-dom";



function App() {
  return (
  
      <Routes>
        <Route path='/' element={<Home/>} />,
        <Route path='/login' element={<Login/>} />,
        <Route path='/agregarMenu' element={<AgregarMenu/>} />,
        <Route path='/VerMenu' element={<VerMenu/>} />,
      </Routes>

  );
}

export default App;
