import React from "react";
import "./RecentTransactions.css";

const RecentTransactions = ({ lastTransactions = [] }) => {
  console.log("lastTransactions", lastTransactions);

  return (
    <div className="recent-transactions">
      <h3>Recent Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Plan</th>
            <th>Category</th>
            <th>Amount (₹)</th>
            {/* <th>Date</th> */}
            <th>Payment ID</th>
          </tr>
        </thead>
        <tbody>
          {lastTransactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.user?.name || "N/A"}</td>
              <td>{tx.planType}</td>
              <td>{tx.planCategory}</td>
              <td>{tx.amount}</td>
              {/* <td>{new Date(tx.date).toLocaleDateString()}</td> */}
              <td>{tx.razorpayPaymentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
