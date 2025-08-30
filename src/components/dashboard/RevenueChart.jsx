import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const RevenueChart = ({ revenue = [] }) => {
  console.log("RevenueChart Data:", revenue);

  return (
    <div className="revenue-chart">
      <h3>Revenue Overview</h3>
      <LineChart width={800} height={400} data={revenue}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* Plot lines dynamically based on keys */}
        <Line type="monotone" dataKey="BASIC" stroke="#8884d8" name="Basic Boast" />
        <Line type="monotone" dataKey="STANDARD" stroke="#82ca9d" name="Standard Boast" />
        <Line type="monotone" dataKey="PREMIUM" stroke="#ff7300" name="Premium Boast" />
        <Line type="monotone" dataKey="1 PROPERTY" stroke="#00C49F" name="1 Property Plan" />
        <Line type="monotone" dataKey="3 PROPERTY" stroke="#FFBB28" name="3 Property Plan" />
        <Line type="monotone" dataKey="UNLIMITED PROPERTY" stroke="#FF8042" name="Unlimited Property Plan" />
      </LineChart>
    </div>
  );
};

export default RevenueChart;
