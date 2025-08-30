// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt, FaUsers, FaChartBar, FaBuilding, FaFileInvoiceDollar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";

// // Components for each tab
// import DashboardHeader from "./dashboard/DashboardHeader";
// import RevenueChart from "./dashboard/RevenueChart";
// import PropertiesList from "./dashboard/PropertiesList";
// import RecentTransactions from "./dashboard/RecentTransactions";
// import UserManagement from "./user/userManagement";
// import PropertyManagement from "./property/propertyManagement";
// import LoanApplications from "./loan/LoanApplications";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/admin/dashboard-stats", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const result = await res.json();
//         if (result.success) {
//           setStats(result.data);
//         }
//       } catch (err) {
//         console.error("Failed to fetch dashboard stats:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="logo">Go Homes</h2>
//         <ul className="menu">
//           <li
//             className={activeTab === "dashboard" ? "active" : ""}
//             onClick={() => setActiveTab("dashboard")}
//           >
//             <FaChartBar className="icon" /> Dashboard
//           </li>
//           <li
//             className={activeTab === "users" ? "active" : ""}
//             onClick={() => setActiveTab("users")}
//           >
//             <FaUsers className="icon" /> User Management
//           </li>
//           <li
//             className={activeTab === "property" ? "active" : ""}
//             onClick={() => setActiveTab("property")}
//           >
//             <FaBuilding className="icon" /> Property Management
//           </li>
//           <li
//             className={activeTab === "loans" ? "active" : ""}
//             onClick={() => setActiveTab("loans")}
//           >
//             <FaFileInvoiceDollar className="icon" /> Loan Applications
//           </li>
//           <li className="logout" onClick={handleLogout}>
//             <FaSignOutAlt className="icon" /> Logout
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {activeTab === "dashboard" && (
//           <>
//             <DashboardHeader stats={stats} loading={loading} />
//             <RevenueChart revenue={stats?.chartData}/>
//             <PropertiesList properties={stats?.properties}/>
//             <RecentTransactions lastTransactions={stats?.lastTransactions} />
//           </>
//         )}

//         {activeTab === "users" && <UserManagement />}

//         {activeTab === "property" && <PropertyManagement />}
//         {activeTab === "loans" && <LoanApplications />}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;





// Components
import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaUsers, FaChartBar, FaBuilding, FaFileInvoiceDollar, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

// Components for each tab
import DashboardHeader from "./dashboard/DashboardHeader";
import RevenueChart from "./dashboard/RevenueChart";
import PropertiesList from "./dashboard/PropertiesList";
import RecentTransactions from "./dashboard/RecentTransactions";
import UserManagement from "./user/userManagement";
import PropertyManagement from "./property/propertyManagement";
import LoanApplications from "./loan/LoanApplications";
import axiosInstance from "../assets/axiosConfig";
import TermsAndConditions from "./dashboard/termsandconditions";
import PrivacyPolicy from "./dashboard/privacypolicy";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/admin/dashboard-stats", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       const result = await res.json();
  //       if (result.success) {
  //         setStats(result.data);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch dashboard stats:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosInstance.get("/admin/dashboard-stats");
        if (res.data.success) {
          setStats(res.data.data);
        } else {
          console.error("Failed to fetch stats");
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);


  // Close sidebar on tab change (optional)
  useEffect(() => {
    setSidebarOpen(false);
  }, [activeTab]);

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">Go Homes</h2>
        <ul className="menu">
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            <FaChartBar className="icon" /> Dashboard
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            <FaUsers className="icon" /> User Management
          </li>
          <li
            className={activeTab === "property" ? "active" : ""}
            onClick={() => setActiveTab("property")}
          >
            <FaBuilding className="icon" /> Property Management
          </li>
          <li
            className={activeTab === "loans" ? "active" : ""}
            onClick={() => setActiveTab("loans")}
          >
            <FaFileInvoiceDollar className="icon" /> Loan Applications
          </li>



          <Link to="/privacy_policy">
            <li
              className={activeTab === "privacypolicy" ? "active" : ""}
            >
              <FaFileInvoiceDollar className="icon" /> Privacy and Policy
            </li>
          </Link>
          <Link to="/terms_conditions">
            <li
              className={activeTab === "termsandconditions" ? "active" : ""}
            >
              <FaFileInvoiceDollar className="icon" /> Terms and Conditions
            </li>
          </Link>


          <li className="logout" onClick={handleLogout}>
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Go Homes Admin Panel</h1>
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FaBars />
          </button>
        </header>

        {activeTab === "dashboard" && (
          <>
            <DashboardHeader stats={stats} loading={loading} />
            <RevenueChart revenue={stats?.chartData} />
            <PropertiesList properties={stats?.properties} />
            <RecentTransactions lastTransactions={stats?.lastTransactions} />
          </>
        )}

        {activeTab === "users" && <UserManagement />}

        {activeTab === "property" && <PropertyManagement />}
        {activeTab === "loans" && <LoanApplications />}
        {activeTab === "privacypolicy" && <PrivacyPolicy />}
        {activeTab === "termsandconditions" && <TermsAndConditions />}



      </main>
    </div>
  );
};

export default AdminDashboard;


