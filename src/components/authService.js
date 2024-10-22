// src/authService.js
import axios from "axios";

const API_URL = "http://157.245.99.116:8080/sanrakhshana/api/login";

// Function to login a user
export const loginUser = async (userName, password) => {
  try {
    const response = await axios.post(API_URL, { userName, password });
    
    return response.data; // Return the response data, which should include the token

  } catch (error) {
    // Throw a custom error message based on the response
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
