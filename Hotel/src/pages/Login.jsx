import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import "./Login.css";

const Login = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        navigate("/"); // Navigate to home if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login Success:", response.data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        window.dispatchEvent(new Event("storage")); // Manually trigger the storage event to update state in Navbar
        navigate("/"); // Redirect to home
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Failed:", error.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-page">
      <HomePage />
      <div className="overlay">
        <div className="login-form" ref={formRef}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <div className="form-links">
            <a href="/forgot-password">Forgot Password?</a>
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
