import '../../styles/Navbar.scss';
import { useSelector } from 'react-redux';
import { AuthState } from '../../features/auth/auth_slice';
import { useAppDispatch } from '../../store/store';
import { logoutUser } from '../../features/auth/auth_action';
import { openSidebar } from '../../features/sidebar/sidebar_slice';

const Navbar = () => {
  const { user } = useSelector((state: any) => state.auth as AuthState);

  const dispatch = useAppDispatch();
  
  return (
    <div id="navbar" className="d-flex justify-content-between align-items-center px-4">
      <div onClick={() => dispatch(openSidebar())} className="navbar-drawer">
        <i className="ri-menu-2-line"></i>
      </div>
      <div className="input-div">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="right-div d-flex">
        <button>
          <i className="ri-notification-2-line"></i>
        </button>
        {user && <div className="dropdown" role="button">
          <div className="initial d-flex justify-content-center align-items-center" id="dropdownMenuButton" data-bs-toggle="dropdown">
            {user?.email.charAt(0).toUpperCase()}
          </div>
          <div className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0)">
              <i className="ri-settings-4-line me-3"></i>
              <span>Settings</span>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0)">
              <i className="ri-user-line me-3"></i>
              <span>My Profile</span>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="javascript:void(0)">
              <i className="ri-customer-service-line me-3"></i>
              <span>Help Center</span>
            </a>
            <a onClick={() => dispatch(logoutUser())} className="dropdown-item d-flex align-items-center border-top" href="javascript:void(0)">
              <i className="ri-logout-box-line me-3"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar