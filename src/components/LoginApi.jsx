import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuthStore from "../store/Store";
import api from "../Api/api";

const LoginApi = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const loginMutation = useMutation({
    mutationFn: async ({ userName, password }) => {
      const response = await api.post("/login", { userName, password });
      console.log("Full response data:", response.data);
      return response.data;
    },
    onSuccess: async (data) => {
      console.log("Login success data:", data);

      if (data.outcome) {
        const accessToken = data.data;
        console.log("Setting access token:", accessToken);

        if (accessToken) {
          setToken(accessToken);
          console.log("Stored token in Zustand store:", useAuthStore.getState().token);

          api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

          toast.success("Successfully logged in!", {
            autoClose: 1000, 
            onClose: () => navigate("/hrms"), 
          });
        } else {
          console.error("Access token not found in response");
          toast.error("Login failed. Token not found.");
        }
      } else {
        toast.error(data.message || "Invalid username or password. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userName || !password) {
      toast.error("Both username and password are required");
      return;
    }

    loginMutation.mutate({ userName, password });
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
          autoComplete="false"
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
          disabled={loginMutation.isLoading}
          fullWidth
          style={{ marginTop: "20px" }}
        >
          {loginMutation.isLoading ? "Logging in..." : "Log In"}
        </Button>
      </form>
    </div>
  );
};

export default LoginApi;
