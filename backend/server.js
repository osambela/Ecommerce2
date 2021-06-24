import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './Routers/productRouter.js';
import userRouter from './Routers/userRouter.js';
import orderRouter from './Routers/OrderRouter.js';
import uploadRouter from './Routers/uploadRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecomapp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.catch(err => {
  console.log(Error, err.message);
})
.then(() => console.log("Database conectada"))

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('api/config/paypal', (req, res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID ||  'sb')
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req,res)=>{
    res.send('Server is ready')
});

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message});
})
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})