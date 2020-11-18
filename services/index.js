const express = require('express');

const port = 3002;
const app = express();

app.get('/timeout', (_, res) => {
  console.log('Pasa');
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