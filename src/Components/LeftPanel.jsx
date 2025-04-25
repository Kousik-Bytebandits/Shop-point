import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBox,
  FaChevronDown,
  FaChevronUp,
  FaShoppingCart,
  FaChartBar,
  FaStar,
  FaUsers,
  FaExchangeAlt,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

function LeftPanel() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 760);
  const [isProductOpen, setIsProductOpen] = useState(false);

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
          <li className="sidebar-item ">
            <Link to="/">
              <FaTachometerAlt /> <span>Dashboard</span>
            </Link>
          </li>

          {/* Products Collapsible Section */}
          <li
            className="sidebar-item"
            onClick={() => setIsProductOpen(!isProductOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="products-toggle">
              <div className="left" >
                <FaBox />
                <span>Products</span>
              </div>
             <div className="right"> {isProductOpen ? <FaChevronUp /> : <FaChevronDown />} </div>
            </div>
          </li>

          {isProductOpen && (
            <ul className="nested-links ml-6 mt-1 space-y-1">
              <li>
                <Link to="/productgrid" className="text-sm text-gray-700 hover:underline">
                  Product Grid
                </Link>
              </li>
              <li>
                <Link to="/producteditor" className=" text-sm text-gray-700 hover:underline">
                  Product Editor
                </Link>
              </li>
            </ul>
          )}

          <li className="sidebar-item ">
            <Link to="/orders">
              <FaShoppingCart /> <span>Orders</span>
            </Link>
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
}

export default LeftPanel;
