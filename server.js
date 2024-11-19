const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from specific origin
const corsOptions = {
  origin: 'http://192.168.3.216:3000', // Your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.post('/sanrakhshana/api/login', (req, res) => {
  const { userName, password } = req.body;
  // Here you would add your authentication logic
  // For demonstration, let's assume a successful login
  if (userName === 'test' && password === 'test') {
    res.json({ accessToken: 'your-access-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});
