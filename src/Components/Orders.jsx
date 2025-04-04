import { FaSync, FaCalendarAlt, FaBox, FaCheckCircle, FaTimesCircle, FaUndoAlt, FaEdit,FaGlobe,FaUser,FaBell,FaMoon } from "react-icons/fa";
import { useState,useEffect } from "react";

const orders = [
  {
    id: "#123456",
    product: "Oculus Quest 2 VR Headset 64 GB",
    price: "$600",
    salePrice: "$559",
    sku: "123456FR",
    category: "Electronics",
    payment: "Fully paid",
    status: "Completed",
    rating: 4.5,
  },
  {
    id: "#154844",
    product: "Levis Standard Issue Backpack Black",
    price: "$100",
    salePrice: "$100",
    sku: "598741FR",
    category: "Fashion",
    payment: "Partially paid",
    status: "Confirmed",
    rating: 5,
  },
  {
    id: "#202587",
    product: "Xiaomi WiFi Repeater Pro",
    price: "$200",
    salePrice: "$180",
    sku: "485912TY",
    category: "Electronics",
    payment: "Unpaid",
    status: "Cancelled",
    rating: 4,
  },
];

const Orders= () => {
    const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Use 24-hour format
      });

      setCurrentDate(`${formattedDate} ${formattedTime} PM`);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="orders-container">
      <div className="dashboard-container right-container" >
            <header className="dashboard-header">
              <input type="text" placeholder="Search..." className="search-bar"  />
              <div className="user-icons">
              <FaGlobe className="icon" title="Language" />
                <FaBell className="icon" title="Notifications" />
                <FaMoon className="icon" title="Dark Mode" />
                <FaUser className="icon" title="User Profile" />
              </div>
            </header>
            </div>
      <div className="orders-header right-container">
        <h2>Orders</h2>
        <div className="data-refresh">
        <span>
            Data Refresh <FaSync className="sync" title="Sync"/> <span className="date">{currentDate}</span>
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="filters right-container">
        <div className="sales-period">
          <span>Sales period:</span>
          <button className="date-picker">
            <FaCalendarAlt /> 01/01/2025 - 02/04/2025
          </button>
        </div>
        <div className="dropdown">
        <select className="filter-dropdown">
          <option>All Products</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>
        <select className="filter-dropdown">
          <option>Default sorting</option>
          <option>Newest First</option>
          <option>Price: High to Low</option>
        </select>
        </div>
      </div>

      {/* Order Stats */}
      <div className="order-stats right-container">
        <div className="stat-card">
          <span className="icon"><FaCheckCircle /></span>
          <p>Orders Completed</p>
          <h3>2,345</h3>
        </div>
        <div className="stat-card">
          <span className="icon"><FaBox /></span>
          <p>Orders Confirmed</p>
          <h3>323</h3>
        </div>
        <div className="stat-card red">
          <span className="icon"><FaTimesCircle /></span>
          <p>Orders Canceled</p>
          <h3>17</h3>
        </div>
        <div className="stat-card grey">
          <span className="icon"><FaUndoAlt /></span>
          <p>Orders Refunded</p>
          <h3>2</h3>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table right-container">
        <table>
          <thead>
            <tr>
              <th># Order</th>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Payment</th>
              <th>Order Status</th>
              <th>Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td className="product-info">
                  <img src="xiamoi.png" alt={order.product} className="product-img" />
                  <div className="words">
                    <p>{order.product}</p>
                    <span>Regular price: {order.price}</span>
                    <br />
                    <strong>Sale price: {order.salePrice}</strong>
                  </div>
                </td>
                <td>{order.sku}</td>
                <td>{order.category}</td>
                <td>{order.payment}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                <td className="rating">
                  {"★".repeat(Math.floor(order.rating))}
                  {order.rating % 1 !== 0 ? "☆" : ""}
                </td>
                <td><FaEdit className="edit-icon" title="Edit Order" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
