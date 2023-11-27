import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../styles/Hospitals.scss';

const Hospitals = () => {
  return (
    <>
    <Sidebar></Sidebar>
        <Navbar></Navbar>
    <div id="hospitals" className="bg-light p-4">
      <div className="header d-flex justify-content-between align-items-center">
        <h3>My Hospitals</h3>
        <button className="d-flex justify-content-between align-items-center">
          <i className="ri-search-line me-2"></i>
          <span>Find hospitals near me</span>
        </button>
      </div>
      <div className="categories d-flex mt-4">
        <div className="category active d-flex justify-content-between align-items-center me-3">
          <i className="ri-add-line me-2"></i>
          <span>All Hospitals</span>
          <div className="count text-center ms-2">0</div>
        </div>
        <div className="category d-flex justify-content-between align-items-center me-3">
          <i className="ri-time-line me-2"></i>
          <span>Recently Visited</span>
          <div className="count text-center ms-2">0</div>
        </div>
        <div className="category d-flex justify-content-between align-items-center">
          <i className="ri-heart-line me-2"></i>
          <span>Favorites</span>
          <div className="count text-center ms-2">0</div>
        </div>
      </div>
      <div className="sub-header d-flex justify-content-between align-items-center mt-5">
        <h4>All Hospitals</h4>
        <div className="actions d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center me-4">
            <i className="ri-search-line me-2"></i>
            <span>Search</span>
          </div>
          <div className="d-flex align-items-center me-4">
            <i className="ri-filter-line me-2"></i>
            <span>Filter</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="ri-arrow-down-s-line"></i>
            <span>Sort</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hospitals