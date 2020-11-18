const express = require('express');
const cors = require('cors');

const port = 3002;
const app = express();

app.use(cors());

app.get('/timeout', (_, res) => {
  const timeout = Math.floor(Math.random() * 1000) + 1500; 
  setTimeout(() => {
    res.status(200).send({ timeout });
  }, timeout);
});

app.get('/error', (_, res) => {
  res.status(500).send({ error: 'Error in request' });
});

app.get('/date', (_, res) => {
  const date = new Date();
  res.status(200).send({ date });
});

console.log(`Server listening on port: ${port}`);
app.listen(port);