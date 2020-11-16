const express = require('express');

const port = 3002;
const app = express();

app.get('/', (_, res) => {
  res.send('Hola mundo!!!');
});

console.log(`Threats service listening on port ${port}`);
app.listen(port);