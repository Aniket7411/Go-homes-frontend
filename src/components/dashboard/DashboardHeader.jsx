import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({ stats, loading }) => {
  if (loading) {
    return <p>Loading stats...</p>;
  }

  return (
    <div className="dashboard-header">
      <div className="stat-card">
        <h4>Total Properties</h4>
        <p>{stats?.totalProperties || 0}</p>
      </div>
      <div className="stat-card">
        <h4>Total Boosted Properties</h4>
        <p>{stats?.boostedProperties || 0}</p>
      </div>
      <div className="stat-card">
        <h4>Total Revenue</h4>
        <p>₹{(stats?.totalRevenue || 0).toLocaleString()}</p>
      </div>
      <div className="stat-card">
        <h4>Total Users</h4>
        <p>{stats?.totalUsers || 0}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
  