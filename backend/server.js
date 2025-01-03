import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './src/config/db.js';
import productRoute from './src/routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.use('/api/products', productRoute)

app.listen(port, () => {
    ConnectDB();
    console.log(`Server at http://localhost:${port}`);
});