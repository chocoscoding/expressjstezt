// import bodyParser from "body-parser";
import express from "express";
import path from "path";
import cors from 'cors';
import {router as AR} from './routes/route';

const app = express();
const port = process.env.PORT || 3304;

app.use(cors())
app.use(express.json())

app.use('/api', AR)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '../clientbuild/build')));
const frontendArr = ['/', '/about']
app.get(frontendArr, (req,res)=>{
  res.sendFile(path.join(__dirname, '../clientbuild/build', 'index.html'))
})

app.get('*', (req,res)=>{
  res.send('not found')
})