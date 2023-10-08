import React, { useState } from "react";
import './ResetPassword.css'; // Import your CSS file
//import { ResetPassword } from ".";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false); // State to track if the reset email has been sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // You would typically send a request to your server to handle the password reset process.
      // Replace this with your actual API endpoint and request method (e.g., using axios or fetch).

      // Simulating a password reset request (replace with actual code):
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        // Password reset successful
        setResetSent(true);
      } else {
        // Password reset failed
        alert("Password reset failed. Please check your email and try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      {resetSent ? (
        <p>Password reset instructions sent to your email.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">ForgotPassword</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
