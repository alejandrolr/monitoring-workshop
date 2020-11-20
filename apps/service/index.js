const express = require('express');
const cors = require('cors');

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();
collectDefaultMetrics({ register });

const counter = new client.Counter({
  name: 'node_service_request_counter',
  help: 'The total requests of the server',
  registers: [register]
});

const port = 3002;
const app = express();

app.use(cors());

app.get('/api/timeout', (_, res) => {
  counter.inc(); 
  const timeout = Math.floor(Math.random() * 1000) + 1500; 
  setTimeout(() => {
    res.status(200).send({ timeout });
  }, timeout);
});

app.get('/api/error', (_, res) => {
  counter.inc(); 
  res.status(500).send({ error: 'Error in request' });
});

app.get('/api/date', (_, res) => {
  counter.inc(); 
  const date = new Date();
  res.status(200).send({ date });
});

app.get('/metrics', async (_, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

console.log(`Server listening on port: ${port}`);
app.listen(port);