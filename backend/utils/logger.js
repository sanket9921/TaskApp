const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  level: 'info', // this captures warn, info, and error
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: path.join(__dirname, '../logs/app.log'), // all logs info and above
    }),

    new winston.transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
      level: 'error',
    }),

    new winston.transports.File({
      filename: path.join(__dirname, '../logs/warn.log'),
      level: 'warn',
    }),
  ],
});

module.exports = logger;
