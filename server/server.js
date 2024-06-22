import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';


const app = express();

dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);


const CONNECTION_URL = 'mongodb+srv://manish:manish@cluster0.4jgbxze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => {
    console.log('MongoDB connected successfully!');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error.message);
  });


app.get('/', (req, res) => {
    res.send('Welcome to the Chat API');
});