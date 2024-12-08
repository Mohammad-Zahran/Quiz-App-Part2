import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>

      <p className="no-account">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
