import React, { useEffect, useState } from "react";
import "./PropertyManagement.css";
import axiosInstance from "../../assets/axiosConfig";

const PropertyManagement = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/admin/properties`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setProperties(data.data);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching properties:", err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axiosInstance.get("/admin/properties");
        if (res.data.success) {
          setProperties(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "2-digit" });
  };

  const handleStatusUpdate = async (propertyId, newStatus) => {
    try {
      const res = await axiosInstance.patch(`/admin/properties/${propertyId}/status`, {
        status: newStatus,
      });

      if (res.data.success) {
        setProperties((prevProps) =>
          prevProps.map((prop) =>
            prop._id === propertyId ? { ...prop, status: newStatus } : prop
          )
        );
        alert("Status updated successfully!");
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error occurred while updating status");
    }
  };

  const handleDeleteProperty = async (propertyId) => {
  const confirmDelete = window.confirm("Are you sure you want to permanently delete this property?");
  if (!confirmDelete) return;

  try {
    const res = await axiosInstance.delete(`/admin/property/${propertyId}`);
    console.log("res", res)
    if (res.data.success) {
      setProperties((prev) => prev.filter((p) => p._id !== propertyId));
      alert("Property deleted permanently.");
    } else {
      alert("Failed to delete property.");
    }
  } catch (err) {
    console.error("Error deleting property:", err);
    alert("Error occurred while deleting property.");
  }
};


  return (
    <div className="property-management">
      <h3>Property Management</h3>
      <div className="tabs">
        <button>All</button>
        <button>On Sell</button>
        <button>On Rent/PG</button>
        <button>On Auction</button>
      </div>

      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Property Video</th>
              <th>Property Title</th>
              <th>Property Type</th>
              <th>Listing Type</th>
              <th>BHK Type</th>
              <th>Date Listed</th>
              <th>Listed By</th>
              <th>Location</th>
              <th>Furnishing Status</th>
              <th>Listed Price</th>
              <th>Rent Amount</th>
              <th>Starting Bid Price</th>
              <th>Property Status</th>
              <th>Action</th>
              <th>Delete Property</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => {
              const {
                _id,
                video,
                propertyName,
                propertyType,
                saleType,
                bhkDetails,
                createdAt,
                ownerDetails,
                city,
                pincode,
                furnishingType,
                propertyPrice,
                status,
                auctionDetails,
              } = property;

              const listedBy = ownerDetails?.name || "N/A";
              const location = `${city || ""}${pincode ? ", " + pincode : ""}`;
              const startingBid = auctionDetails
                ? `₹${auctionDetails.startingBidAmount.toLocaleString()} \nEnds on ${new Date(
                  auctionDetails.auctionEndDateTime
                ).toLocaleDateString()}`
                : "-";

              return (
                <tr key={_id}>
                  <td>{_id.slice(-6).toUpperCase()}</td>
                  <td>
                    {video ? (
                      <video width="100" height="60" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{propertyName}</td>
                  <td>{propertyType}</td>
                  <td>{saleType}</td>
                  <td>{bhkDetails}</td>
                  <td>{formatDate(createdAt)}</td>
                  <td>{listedBy}</td>
                  <td>{location}</td>
                  <td>{furnishingType}</td>
                  <td>{`₹${propertyPrice?.toLocaleString()}`}</td>
                  <td>-</td>
                  <td>{startingBid}</td>
                  <td>
                    <span className={`status ${status.toLowerCase()}`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <select
                      value={status}
                      onChange={(e) => handleStatusUpdate(_id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteProperty(_id)}
                      style={{ marginTop: "5px", color: "red", background: "transparent", border: "none", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PropertyManagement;
