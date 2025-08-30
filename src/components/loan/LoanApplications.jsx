import React, { useState, useEffect } from "react";
import "./LoanApplications.css";
import axiosInstance from "../../assets/axiosConfig";

const LoanApplications = () => {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await axiosInstance.get("/admin/loan");
        if (res.data.success) {
          const formattedData = res.data.data.map((loan, idx) => ({
            id: `#${idx + 1}`,
            name: loan.user.fullName || "N/A",
            phoneNumber: loan.user.phoneNumber || "N/A",
            avatar: loan.user.profilePicture || "/avatars/default.png",
            date: new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            }),
            occupation: loan.occupationType || "N/A",
            income: `₹${parseInt(loan.income).toLocaleString()}`,
            pan: loan.panNumber,
          }));

          setLoanData(formattedData);
        }
      } catch (err) {
        console.error("Failed to fetch loan applications", err);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="loan-applications">
      <div className="loan-header">
        <h2>Loan Applications</h2>
      </div>

      <table className="loan-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Date</th>
            <th>Occupation Type</th>
            <th>Monthly Income</th>
            <th>PAN Number</th>
         
        
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index}>
              <td>{loan.id}</td>
              <td>
                <img src={loan.avatar} alt="avatar" className="avatar" />
                {loan.name}
              </td>
              <td>{loan.phoneNumber}</td>
              <td>{loan.date}</td>
              <td>{loan.occupation}</td>
              <td>{loan.income}</td>
              <td>{loan.pan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplications;
