const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const defaultRoute = require('./routes');
const actionsRouter = require('./routes/actionsRouter');
const projectsRouter = require('./routes/projectsRouter');

const server = express();

// middleware
server.use(logger);
server.use(helmet());
server.use(morgan('short'));
server.use(express.json());

server.use('/', defaultRoute);
server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

// console logger ...
function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl} at ${new Date()}`);
  next();
}

module.exports = server;