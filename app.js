
import express from 'express';
import dotenv from 'dotenv';
import searchRoutes from './routes/searchRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


app.use('/search', searchRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
