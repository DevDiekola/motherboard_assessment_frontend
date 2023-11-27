import '../../styles/Navbar.scss';
import avatar from '../../assets/images/avatar.jpg';

const Navbar = () => {
  return (
    <div id="navbar" className="d-flex justify-content-between align-items-center px-4">
      <div className="input-div">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="right-div">
        <button>
          <i className="ri-notification-2-line"></i>
        </button>
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  )
}

export default Navbar