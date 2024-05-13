import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'


dotenv.config();
const app = express();

mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});

app.use('/api/user', userRoutes)