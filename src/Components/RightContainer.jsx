import {  FaBell, FaMoon, FaUser, FaGlobe,FaShoppingCart,FaGem,FaInfoCircle, FaMoneyBill, FaSync,FaMoneyBillWave, FaCreditCard, FaPiggyBank  } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import "../App.css";
const data = [
  { month: "Jan", revenue: 3500, expense: 7000 },
  { month: "Feb", revenue: 3000, expense: 2500 },
  { month: "Mar", revenue: 2000, expense: 10000 },
  { month: "Apr", revenue: 5000, expense: 4500 },
  { month: "May", revenue: 8500, expense: 5200 },
  { month: "Jun", revenue: 3000, expense: 7000 },
  { month: "Jul", revenue: 1500, expense: 6000 },
  { month: "Aug", revenue: 4000, expense: 5000 },
  { month: "Sep", revenue: 9000, expense: 7200 },
  { month: "Oct", revenue: 6000, expense: 4800 },
  { month: "Nov", revenue: 8200, expense: 3000 },
  { month: "Dec", revenue: 4000, expense: 5000 },
];
const report = [
  {
    id: 1,
    title: "Revenue",
    amount: "$176,120",
    icon: <FaMoneyBillWave className="icon yellow" />,
    percentage: "▲ +45%",
    colorClass: "green-text",
  },
  {
    id: 2,
    title: "Expense",
    amount: "$310,452",
    icon: <FaCreditCard className="icon blue" />,
    percentage: "▼ -12%",
    colorClass: "red-text",
  },
  {
    id: 3,
    title: "Profit",
    amount: "$342,558",
    icon: <FaPiggyBank className="icon green" />,
    percentage: "▲ +14%",
    colorClass: "green-text",
  },
];
const RightContainer = () => {
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
      
      <main className="dashboard-content">
      <section className=" sales-analytics">
          <h2>Sales Analytics</h2>
          <span>
            Data Refresh <FaSync className="sync" title="Sync"/> <span className="date">{currentDate}</span>
          </span>
        </section>

        <section className="analytics">
          
        <div className="shop-card">
        <div className="left-retail">
          <img src="./logo-bb.png" alt="logo"/>
        </div>
        <div className="right-retail">
      <div className="shop-card-header">
      <div className="left-logo">
          <img src="./logo-bb.png" alt="logo"/>
        </div>
        <div className="shop-title">
          <h2>ShopPoint - Retail</h2>
          <p>Aliquam erat volutpat. Duis molestie ultricies tempus.</p>
        </div>
      </div>

      <div className="shop-card-info">
        <h3>Average Rate 2023 <span><FaInfoCircle className="info-icon" /></span></h3>
        </div>

        <div className="shop-card-grid">
  <div className="shop-card-item income">
    <FaGem className="icon" />
    <div className="shop-card-text">
      <h3>$<CountUp end={15412} duration={5} separator="," /></h3>
      <strong><p>Income</p></strong><br></br>
      <span className="growth">▲ +45.21%</span>
    </div>
  </div>

  <div className="shop-card-item expense">
    <FaMoneyBill className="icon" />
    <div className="shop-card-text">
      <h3>$<CountUp end={53487} duration={5} separator="," /></h3>
     <strong><p>Expense</p></strong> <br></br>
      <span className="decline">▼ -12%</span>
    </div>
  </div>

  <div className="shop-card-item orders">
    <FaShoppingCart className="icon" />
    <div className="shop-card-text">
      <h3>$<CountUp end={5412} duration={5} separator="," /></h3>
      <strong><p>New Orders</p></strong><br></br>
      <span className="growth">▲ +14.36%</span>
    </div>
    </div>
  </div>
</div>
</div>
          <div className="balance">
          <img src='./aaa.png'  alt='Balance '/>
          </div>
          
        </section>
       <section className="stat-rep">
        <div className="statistics">
          <h2>Sales Statistics 2022</h2>
          <div className="chart-container">
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" stroke="#ddd" />
          <YAxis stroke="#ddd" tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip contentStyle={{ backgroundColor: "#1c1c3b", border: "none", color: "#fff" }} />
          <Legend iconType="circle" wrapperStyle={{ color: "#ddd" }} />
          <Bar dataKey="revenue" fill="#c2dfff" barSize={12} radius={[5, 5, 0, 0]} />
          <Bar dataKey="expense" fill="#8b8d99" barSize={12} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </div>

        <div className="report">
        <div className="header">
        <h2>Total Report</h2>
        <span className="info-icon">ℹ️</span>
      </div>
      <p className="date-range">All Periods per 01/01/2022 - 08/28/2023</p>

      <div className="cards">
        {report.map((item) => (
          <div key={item.id} className="card">
            <div className="card-left">
              {item.icon}
              <span className="title">{item.title}</span>
            </div>
            <div className="card-right">
              <p className="amount">{item.amount}</p>
              <p className={`percentage ${item.colorClass}`}>{item.percentage}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="more-details">More Details</button>
    </div>
       
        </section>
      </main>
    </div>
  );
};

export default RightContainer;
