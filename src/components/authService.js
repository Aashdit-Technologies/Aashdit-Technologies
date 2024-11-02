export async function loginUser(userName, password) {
  try {
      // Construct the API endpoint
      const API_URL = "http://157.245.99.116:8080/sanrakhshana/api/login";

      // Define the request payload
      const credentials = { userName, password };

      // Make the POST request with fetch
      const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Optional: Add any additional headers here, e.g., Authorization
              // 'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(credentials),
          credentials: 'include' // Ensures cookies are sent if needed
      });

      // Check if the response was successful
      if (!response.ok) {
          const errorMessage = await response.text(); // Get server response if available
          throw new Error(errorMessage || 'Login failed');
      }

      // Parse and return JSON data
      return await response.json();

  } catch (error) {
      // Log error to console and throw a descriptive error message
      console.error('Error in loginUser function:', error.message);
      throw new Error(error.message || "Login failed");
  }
}
