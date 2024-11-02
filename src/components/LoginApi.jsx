import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/Store";

const LoginApi = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const API_URL = "http://192.168.3.131:1111/hrms/api/login";
      const credentials = { userName, password };
      

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Login failed');
      }

      const data = await response.json();
      console.log(data);
      
      const accessToken = data.accessToken;
      setToken(accessToken); // Store token in Zustand store
      navigate("/dashboard"); // Redirect to dashboard

    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          label="User ID"
          variant="standard"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          variant="standard"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<Login />}
          disabled={loading}
          fullWidth
          style={{ marginTop: "20px" }}
        >
          {loading ? "Logging in..." : "Log In"}
        </Button>

        {error && (
          <Typography variant="h6" color="error" style={{ marginTop: "20px" }}>
            {error}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginApi;
