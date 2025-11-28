import express from 'express';
import { connectDB } from './config/db.js';
import { userRoute } from './routes/Users.js';

const app = express();
const PORT = 4000;

connectDB();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api/v1', userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
