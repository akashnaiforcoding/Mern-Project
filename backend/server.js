import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV ;

connectDB(); // connection to db

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(`API is running...`);
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound); 
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
