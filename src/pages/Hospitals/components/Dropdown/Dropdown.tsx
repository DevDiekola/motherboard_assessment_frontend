const Dropdown = () => {
  return (
    <div className="dropdown" role="button">
      <button id="dropdownMenuButton" data-bs-toggle="dropdown">
      <i className="ri-more-2-line"></i>
      </button>
      <div className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0)">
          <i className="ri-arrow-right-circle-line me-3"></i>
          <span>Do something</span>
        </a>
        <a className="dropdown-item d-flex align-items-center" href="javascript:void(0)">
          <i className="ri-arrow-right-circle-line me-3"></i>
          <span>Do something else</span>
        </a>
      </div>
    </div>
  )
}

export default Dropdown