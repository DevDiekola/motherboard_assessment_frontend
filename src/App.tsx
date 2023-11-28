import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Hospitals from './pages/Hospitals/Hospitals'
import Register from './pages/Register/Register';
import { useAppDispatch } from "./store/store";
import { useGetUserDetailsQuery } from "./services/auth/auth_service";
import { useEffect } from "react";
import { setCredentials } from "./features/auth/auth_slice";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

  const dispatch = useAppDispatch();

  const { data, error } = useGetUserDetailsQuery('user', {
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data])

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute error={error} />}>
          <Route path="/" element={ <Hospitals/> } />
          <Route path="/hospitals" element={ <Hospitals/> } />
        </Route>
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </>
  )
}

export default App
