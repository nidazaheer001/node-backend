import express from 'express';
import { connectDB } from './config/db.js';
import { userRoute } from './routes/Users.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// User routes
app.use('/api/v1', userRoute);

// Listen on all network interfaces for Docker
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
