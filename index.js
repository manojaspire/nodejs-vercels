const express = require('express');
const app = express();

// Generate mock data
function generateMockData(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: Math.floor(Math.random() * 50) + 18,  // Age between 18 and 67
    email: `user${i + 1}@example.com`
  }));
}

const mockData = generateMockData(200);

// GET endpoint to return 200 data items
app.get('/users', (req, res) => {
  res.status(200).json(mockData);
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
