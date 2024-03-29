
const express = require('express');
const app = express();
const cors = require('cors');
import { renderToString } from 'react-dom/server';
//
import {Csr} from './pages/App';
const routes = require('./routes/index');
import Common from './lib/Common';
import testRouter from './routes/test'; 
import commonRouter from './routes/common';
//
require('dotenv').config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//
const errorObj = {ret: "NG", messase: "Error"};
app.use('/api/*', function(req: any, res: any, next: any){
  const body = req.body;
  const valid = Common.validApiKey(body);
  if(!valid) {
    errorObj.messase="Error, Common.validApiKey=false"
    console.log("Error, Common.validApiKey=false");
    res.json(errorObj);
  } else {
    next();
  }
});
// route
app.use('/', routes);
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
//
app.post('/api/post1', (req: any, res: any) => {
  try {
console.log(req.body);
    res.send({ name: "ok, /api/test1" });
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/api/test1', (req: any, res: any) => {
  try {
console.log("url=", process.env.API_URL);
    res.send({ name: "ok, /api/test1" });
  } catch (error) {
    res.sendStatus(500);
  }
});
//
app.get('/*', (req: any, res: any) => {
  try {
    res.send(renderToString(Csr()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

export default app;