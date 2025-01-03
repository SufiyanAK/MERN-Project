import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.listen(port, () => {
    ConnectDB();
    console.log(`Server at http://localhost:${port}`);
});