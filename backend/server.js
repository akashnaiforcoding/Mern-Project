import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 5000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send(`Environemnt: ${env}`);
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => {
        return p._id === parseInt(req.params.id)})
    res.json(product);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})