import React, { useState, useEffect } from "react";
import "./PropertiesList.css";
import axios from "axios";
import axiosInstance from "../../assets/axiosConfig";

const PropertiesList = ({ properties = [] }) => {
  const [localProperties, setLocalProperties] = useState([]);

  // Initialize local state from props
  useEffect(() => {
    setLocalProperties(properties);
  }, [properties]);

  const updatePropertyStatus = (id, newStatus) => {
    setLocalProperties((prev) =>
      prev.map((prop) =>
        prop.id === id || prop._id === id ? { ...prop, status: newStatus } : prop
      )
    );
  };

  // const handleAccept = async (id) => {
  //   try {
  //     const res = await axios.patch(`http://localhost:5000/api/admin/properties/${id}/status`, {
  //       status: "approved",
  //     });
  //     if (res.data.success) {
  //       alert("Property approved!");
  //       updatePropertyStatus(id, "approved");
  //     } else {
  //       alert("Failed to approve property");
  //     }
  //   } catch (err) {
  //     console.error("Error approving property:", err);
  //     alert("Failed to approve property.");
  //   }
  // };

  // const handleCancel = async (id) => {
  //   try {
  //     const res = await axios.patch(`http://localhost:5000/api/admin/properties/${id}/status`, {
  //       status: "Rejected",
  //     });
  //     if (res.data.success) {
  //       alert("Property rejected!");
  //       updatePropertyStatus(id, "Rejected");
  //     } else {
  //       alert("Failed to reject property");
  //     }
  //   } catch (err) {
  //     console.error("Error rejecting property:", err);
  //     alert("Failed to reject property.");
  //   }
  // };

  const handleAccept = async (id) => {
  try {
    const res = await axiosInstance.patch(`/admin/properties/${id}/status`, {
      status: "approved",
    });
    if (res.data.success) {
      alert("Property approved!");
      updatePropertyStatus(id, "approved");
    } else {
      alert("Failed to approve property");
    }
  } catch (err) {
    console.error("Error approving property:", err);
    alert("Failed to approve property.");
  }
};

const handleCancel = async (id) => {
  try {
    const res = await axiosInstance.patch(`/admin/properties/${id}/status`, {
      status: "rejected",
    });
    if (res.data.success) {
      alert("Property rejected!");
      updatePropertyStatus(id, "Rejected");
    } else {
      alert("Failed to reject property");
    }
  } catch (err) {
    console.error("Error rejecting property:", err);
    alert("Failed to reject property.");
  }
};


  return (
    <div className="properties-list">
      <h3>Properties Listing Board</h3>
      <div className="property-cards">
        {localProperties.map((prop) => (
          <div className="property-card" key={prop.id || prop._id}>
            <video controls width="100%" height="150">
              <source src={prop.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="details">
              <p>Status: {prop.status || "Pending"}</p>
              <h4>{prop.propertyName}</h4>
              <p>₹{prop.propertyPrice?.toLocaleString()}</p>
              <p>Type: {prop.saleType}</p>
              <div className="actions">
                <button className="accept" onClick={() => handleAccept(prop.id || prop._id)}>
                  Accept
                </button>
                <button className="cancel" onClick={() => handleCancel(prop.id || prop._id)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
