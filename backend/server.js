import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"
import router from './routes/feedbackRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/feedback', router);
app.get('/', (req, res) => {
  res.json({ message: "Hello boy" });
});

mongoose.connect(process.env.MONGO_URI, { dbName: "Feedback" })
  .then(() => {
    console.log("MongoDb Connected...!");
  })
  .catch((error) => {
    console.log(error.message);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at the ${port}`);
});
