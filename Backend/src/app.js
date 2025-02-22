const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const app = express(); // instance of the new server create

app.use(cors());

app.use(express.json())

// test the server
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;