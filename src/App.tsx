import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Hospitals from './pages/Hospitals/Hospitals'
import Register from './pages/Register/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Hospitals/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/hospitals" element={ <Hospitals/> } />
      </Routes>
    </>
  )
}

export default App
