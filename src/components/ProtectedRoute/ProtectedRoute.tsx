import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthState } from '../../features/auth/auth_slice';
import Loading from '../Loading/Loading';

interface Props {
  error: any
}

const ProtectedRoute = ({ error }: Props) => {
  const { user, userLoading } = useSelector((state: any) => state.auth as AuthState);
  const navigate = useNavigate();

  // show unauthorized screen if no user is found in redux store
  if (user === null && !userLoading || error) {
    navigate('/login');
  }

  if (userLoading) {
    return <Loading />
  }

  return <Outlet />
}

export default ProtectedRoute