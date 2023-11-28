import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthState } from '../../features/auth/auth_slice';
import Loading from '../Loading/Loading';

const ProtectedRoute = () => {
  const { user, userLoading, userError } = useSelector((state: any) => state.auth as AuthState);
  const navigate = useNavigate();

  // show unauthorized screen if no user is found in redux store
  if (!userLoading && (user === null || userError)) {
    navigate('/login');
  }

  if (user === null && userLoading) {
    return <Loading />
  }

  return <Outlet />
}

export default ProtectedRoute