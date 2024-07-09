import express, { response } from 'express';
import {port} from './config.js';
import { MONGO_URI } from './config.js';
import  booksrouter  from './routes/bookroutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/books',booksrouter);

mongoose.connect(MONGO_URI).then(()=>{
  console.log("database connected");
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);

});
}).catch((err)=>{
  console.log(err);
})

app.get('/', (req, res) => {
  return res.status(209).send('lorem ipsum dolor sit amet')
});

