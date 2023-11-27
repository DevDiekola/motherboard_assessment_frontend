import '../../styles/Sidebar.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar" className="d-flex flex-column justify-content-between px-3 py-4">
      <div className="top-section pb-3">
        <div className="logo-container text-center">
        <img src={logo} alt="Logo" width="150" />
        </div>
        <div className="links mt-4">
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-home-line"></i>
            <span>Dashboard</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-chat-1-line"></i>
            <span>Consult a Doctor</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-calendar-line"></i>
            <span>Appointments</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
              <i className="ri-file-text-line"></i>
              <span>Medical History</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link active w-100 d-flex align-items-center">
            <i className="ri-add-line"></i>
            <span>My Hospitals</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bottom-section">
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-settings-3-line"></i>
            <span>Settings</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-customer-service-line"></i>
            <span>Help Center</span>
            </div>
          </Link>
          <Link to="#">
            <div className="link w-100 d-flex align-items-center">
            <i className="ri-gift-2-line"></i>
            <span>Refer family & friends</span>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Sidebar