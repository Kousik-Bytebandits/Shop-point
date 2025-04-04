
import { FaTachometerAlt, FaBox, FaShoppingCart, FaChartBar, FaStar, FaUsers, FaExchangeAlt, FaFileAlt, FaCog } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../App.css";
import {Link} from 'react-router-dom';

const LeftPanel = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="left-panel">
      {window.innerWidth < 760 && (
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      )}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Shop Point</h2>
        <ul>
          <li className="sidebar-item">
         <Link to='/'> <FaTachometerAlt /> <span>Dashboard</span></Link>  
          </li>
          <li className="sidebar-item">
          <Link to='/productgrid'><FaBox /> <span>Products</span></Link>  
          </li>
          <li className="sidebar-item">
         <Link to='orders'> <FaShoppingCart /> <span>Orders</span></Link>  
          </li>
          <li className="sidebar-item">
            <FaChartBar /> <span>Statistics</span>
          </li>
          <li className="sidebar-item">
            <FaStar /> <span>Reviews</span>
          </li>
          <li className="sidebar-item">
            <FaUsers /> <span>Customers</span>
          </li>
          <li className="sidebar-item">
            <FaExchangeAlt /> <span>Transactions</span>
          </li>
          <li className="sidebar-item">
            <FaFileAlt /> <span>Pages</span>
          </li>
          <li className="sidebar-item">
            <FaCog /> <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
