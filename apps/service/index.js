const express = require('express');
const cors = require('cors');

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();
collectDefaultMetrics({ register });

const requestCounter = new client.Counter({
  name: 'node_service_requests_counter',
  help: 'The total requests of the server',
  registers: [register]
});

const errorCounter = new client.Counter({
  name: 'node_service_errors_counter',
  help: 'The total errors of the server',
  registers: [register]
});

const timeoutHistogram = new client.Histogram({
  name: 'node_service_timeout_seconds',
  help: 'The timeout histogram',
  registers: [register],
  buckets: [1.75, 2, 2.25]
});

const port = 3002;
const app = express();

app.use(cors());

app.get('/api/timeout', (_, res) => {
  requestCounter.inc();
  const timeout = Math.floor(Math.random() * 1000) + 1500; 
  const end = timeoutHistogram.startTimer();
  setTimeout(() => {
    end();
    res.status(200).send({ timeout });
  }, timeout);
});

app.get('/api/error', (_, res) => {
  requestCounter.inc();
  errorCounter.inc();
  res.status(500).send({ error: 'Error in request' });
});

app.get('/api/date', (_, res) => {
  requestCounter.inc();
  const date = new Date();
  res.status(200).send({ date });
});

app.get('/metrics', async (_, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

console.log(`Server listening on port: ${port}`);
app.listen(port);