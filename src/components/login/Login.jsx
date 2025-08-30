import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials for demo
    if (email === "admin@gohomes.com" && password === "admin123") {
      login(); // Call the login function from context
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1>GoHomes Admin</h1>
        <p>Manage listings, transactions, and more</p>
      </div>
      
      <div className="login-right">
        <div className="login-box">
          <h2>Login to Dashboard</h2>
          {error && <p className="error-message">{error}</p>}
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <div className="login-links">
              <Link to="/privacy_policy" className="link-style">Privacy Policy</Link>
              <Link to="/terms_conditions" className="link-style">Terms & Conditions</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;