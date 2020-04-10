const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const message = process.env.MESSAGE || "I'm am not from the .env file!"
  res.status(200).json({ api: "up", message })
});

router.get('/test', (req, res) => {
  res.send('Test route ...')
});

router.use('/api', require('./api.v0.js'));

module.exports = router;