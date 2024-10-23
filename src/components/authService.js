
import axios from "axios";

const API_URL = "http://157.245.99.116:8080/sanrakhshana/api/login";

export const loginUser = async (userName, password) => {
  try {
    const response = await axios.post(API_URL, { userName, password });
    
    return response.data; 

  } catch (error) {
    
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
