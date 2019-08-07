const express = require('express');
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-workshop', {useNewUrlParser: true});

const devicesRouter = require('./routes/devices');
const logRouter = require('./routes/log');
const corsMiddleware = require('./middlewares/cors');

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

app.use(corsMiddleware);
app.use(express.json());
app.use('/devices', devicesRouter);
app.use('/log', logRouter);

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});
