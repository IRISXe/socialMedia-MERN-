import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import './login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to a server for authentication.
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="new-user">
        <p>New User? <Link to="/register">Sign up here</Link></p>
        <p><Link to="/ResetPassword">Forgot Password?</Link></p> {/* Add the "Forgot Password" link */}
      </div>
    </div>
  );
};

export default Login;
