 
import express from 'express';
const app = express();

// Endpoint to handle GET requests
app.get('/test', (req, res) => {
  // Simulate a response delay of 500 milliseconds
  setTimeout(() => {
    res.status(200).json({ message: 'Success' });
  }, 10000);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
