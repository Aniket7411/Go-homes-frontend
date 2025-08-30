import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserManagement.css";
import axiosInstance from "../../assets/axiosConfig";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/admin/users");
  //       if (res.data.success) {
  //         setUsers(res.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch users", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/admin/users");
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  fetchUsers();
}, []);


  return (
    <div className="user-management">
      <h3>User Management</h3>
      <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Joined</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th colSpan="3">Property Posted</th>
              <th>Boosted Property</th>
              <th>Contacts Bought</th>
              {/* <th>KYC Verified</th> */}
              {/* <th>User Registration</th> */}
              <th>Total Spending</th>
              {/* <th>Actions</th> */}
            </tr>
            {/* <tr className="sub-header">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Sell</th>
              <th>Rent/PG</th>
              <th>Auction</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr> */}
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user._id.slice(-6).toUpperCase()}</td>
                <td>
                  <div className="user-info">
                    <img src={user.profilePicture || "/static/image.png"} alt="profile" />
                    <span>{user.fullName || "N/A"}</span>
                  </div>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>+{user.phoneNumber}</td>
                <td>{user.email || "N/A"}</td>

                {/* Replacing dummy with actual data */}
                <td>{user.posted?.sell || 0}</td>
                <td>{user.posted?.rent || 0}</td>
                <td>{user.posted?.auction || 0}</td>
                <td>{user.boosted || 0}</td>
                <td>0</td> {/* Contacts Bought - to implement */}
                {/* <td className="red">Unverified</td>  */}
                {/* <td className="red">Pending</td>    */}
                <td>₹0</td> {/* Total Spending - placeholder */}

                {/* <td>
                  <select className="actions-dropdown">
                    <option>View Profile</option>
                    <option>Approve Registration</option>
                    <option>Reject Registration</option>
                    <option>Deactivate Account</option>
                  </select>
                </td> */}
              </tr>
            ))}
          </tbody>

        </table>
        {/* <div className="pagination">Page 1</div> */}
      </div>
    </div>
  );
};

export default UserManagement;
