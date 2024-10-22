// src/components/LoginApi.jsx
import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // For navigation after login
import useAuthStore from "../store/Store"; // Zustand store
import { loginUser } from "../components/authService"; // Import the API service

const LoginApi = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  // Mutation for logging in
  const mutation = useMutation({
    mutationFn: ({ userName, password }) => loginUser(userName, password),
    onSuccess: (data) => {
      const accessToken = data.accessToken;
      setToken(accessToken); // Store token in Zustand store
      navigate("/dashboard"); // Redirect to dashboard
    },
    onError: (error) => {
      console.error("Login failed:", error.message); // Log error message
    },
  });

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({ userName, password });
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
          disabled={mutation.isLoading}
          fullWidth
          style={{marginTop:"20px"}}
        >
          {mutation.isLoading ? "Logging in..." : "Log In"}
        </Button>

        {mutation.isError && (
          <Typography variant="h6" color="error.main" style={{ marginTop: "20px" }}>
            {mutation.error?.message || "Login failed. Please try again."}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginApi;
