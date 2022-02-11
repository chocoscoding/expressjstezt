import bodyParser from "body-parser";
import express from "express";
import {router as AR} from './routes/route';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json())

app.use('/', AR)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
