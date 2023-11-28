import { useMemo, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../styles/Hospitals.scss';
import hospitalData from '../../data/hospitals.json';
import Table from './components/Table/Table';
import Dropdown from './components/Dropdown/Dropdown';

const Hospitals = () => {

  const [hospitals, setHospitals] = useState(hospitalData);
  const [category, setCategory] = useState("all");

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Ratings",
        accessor: "ratings",
        Cell: ({ value }: any) => {
          for (let i = 0; i < value.length; i++) {
            
          }
          return Array.from({ length: value }).map((_, i) => (
            <i key={i} className="ri-star-fill star"></i>
          ))
        },
      },
      {
        Header: "Action",
        Cell: () => {
          return <Dropdown />
        },
      },
    ], []
  );

  const currentDate = new Date();
  const twoMonthsAgo = new Date(currentDate);
  twoMonthsAgo.setMonth(currentDate.getMonth() - 2);

  const recentlyVisited = hospitalData.filter((hospital) => {
    const objectDate = new Date(hospital.lastVisited);
    return objectDate >= twoMonthsAgo;
  }).length;

  const favorites = hospitalData.filter((hospital) => hospital.favorite).length;

  const filterByCategory = (category: 'all' | 'recent' | 'favorites') => {
    setCategory(category);

    switch (category) {
      case 'recent':
        setHospitals(
          hospitalData.filter((hospital) => {
            const objectDate = new Date(hospital.lastVisited);
            return objectDate >= twoMonthsAgo;
          })
        );
        break;
      case 'favorites':
        setHospitals(
          hospitalData.filter((hospital) => hospital.favorite)
        );
        break;
      default:
        setHospitals(hospitalData);
        break;
    }
  }
    
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div id="hospitals" className="bg-light p-4">
        <div className="header d-flex justify-content-between align-items-center">
          <h3>My Hospitals</h3>
          <button className="d-flex justify-content-between align-items-center">
            <i className="ri-search-line me-2"></i>
            <span>Find hospitals<span> near me</span></span>
          </button>
        </div>
        <div className="categories d-flex mt-4">
          <div 
            onClick={() => filterByCategory('all')} 
            className={`category d-flex justify-content-between align-items-center me-3 ${category === "all" && "active"}`}
          >
            <i className="ri-add-line me-2"></i>
            <span>All Hospitals</span>
            <div className="count text-center ms-2">{hospitalData.length}</div>
          </div>
          <div 
            onClick={() => filterByCategory('recent')} 
            className={`category d-flex justify-content-between align-items-center me-3 ${category === "recent" && "active"}`}
          >
            <i className="ri-time-line me-2"></i>
            <span>Recently Visited</span>
            <div className="count text-center ms-2">{recentlyVisited}</div>
          </div>
          <div 
            onClick={() => filterByCategory('favorites')} 
            className={`category d-flex justify-content-between align-items-center ${category === "favorites" && "active"}`}
          >
            <i className="ri-heart-line me-2"></i>
            <span>Favorites</span>
            <div className="count text-center ms-2">{favorites}</div>
          </div>
        </div>
        <div className="sub-header d-flex justify-content-between align-items-center mt-5 mb-3">
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
              <i className="ri-filter-3-line me-2"></i>
              <span>Sort</span>
            </div>
          </div>
        </div>
        <Table columns={columns} data={hospitals} />
      </div>
    </>
  )
}

export default Hospitals