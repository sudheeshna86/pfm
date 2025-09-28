import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Authrouter from './routes/AuthRoutes.js';
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());//frontend nunchi em data pampina json loki marusthadhi (while giving and going from api )
app.use('/Auth',Authrouter)
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});


const PORT=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('API is running...');
})



connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log("DB connection failed:", err));

