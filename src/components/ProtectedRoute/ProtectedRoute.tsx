import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthState } from '../../features/auth/auth_slice';

const ProtectedRoute = () => {
  const { user } = useSelector((state: any) => state.auth as AuthState);
  const navigate = useNavigate();

  // show unauthorized screen if no user is found in redux store
  if (!user) {
    navigate('/login');
  }

  return <Outlet />
}

export default ProtectedRoute