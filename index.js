require('dotenv').config();
const cors = require('cors');
const server = require('./server');

server.use(cors());

const port = process.env.PORT || 5000;

server.listen(port, () => 
  console.log(`\nServer running ...\nlocalhost: ${port}`)
);
