#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('server:server');
var http = require('http');
const {logger} = require("../src/helper/logger");

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
// console.log(server)
// io = require('socket.io')(3001);

// var timerId = null,
//     sockets = new Set();

//     io.on('connection', socket => {

//       sockets.add(socket);
//       console.log(`Socket ${socket.id} added`);
    
//       // if (!timerId) {
//       //   startTimer();
//       // }
    
//       socket.on('clientdata', data => {
//         console.log(data);
//       });
    
//       socket.on('disconnect', () => {
//         console.log(`Deleting socket: ${socket.id}`);
//         sockets.delete(socket);
//         console.log(`Remaining sockets: ${sockets.size}`);
//       });
    
//     });

    // function startTimer() {
    //   //Simulate stock data received by the server that needs 
    //   //to be pushed to clients
    //   timerId = setInterval(() => {
    //     if (!sockets.size) {
    //       clearInterval(timerId);
    //       timerId = null;
    //       console.log(`Timer stopped`);
    //     }
    //     let value = ((Math.random() * 50) + 1).toFixed(2);
    //     //See comment above about using a "room" to emit to an entire
    //     //group of sockets if appropriate for your scenario
    //     //This example tracks each socket and emits to each one
    //     for (const s of sockets) {
    //       console.log(`Emitting value: ${value}`);
    //       s.emit('data', { data: value });
    //     }
    
    //   }, 2000);
    // }


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // startTimer();
    
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
 
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  logger.info('Express server is running on localhost:5000')
  console.log("Express server is running on localhost:5000")
  console.log('Listening on ' + bind)
}
