/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Logger Utility using winston
***********************************************************/

var Winston = require('winston');
exports.error = new(Winston.Logger)({
  transports: [
    new(Winston.transports.Console)({
      colorize: true,
      handleExceptions: true
    }),
    new(Winston.transports.File)({
      filename: 'logs/error.log',
      handleExceptions: true
    })
  ]
}).error;

exports.info = new(Winston.Logger)({
  transports: [
    new(Winston.transports.Console)({
      colorize: true
    }),
    new(Winston.transports.File)({
      filename: 'logs/info.log'
    })
  ]
}).info;

exports.warn = new(Winston.Logger)({
  transports: [
    new(Winston.transports.Console)({
      colorize: true
    }),
    new(Winston.transports.File)({
      filename: 'logs/warn.log'
    })
  ]
}).warn;

exports.debug = new(Winston.Logger)({
  transports: [
    new(Winston.transports.Console)({
      colorize: true
    }),
    new(Winston.transports.File)({
      filename: 'logs/debug.log'
    })
  ]
}).debug;


/**
 * For Production
 */

// Override the built-in console methods with winston hooks
// switch((process.env.NODE_ENV || '').toLowerCase()){
//     case 'production':
//         production = true;
//         logger.add(winston.transports.File, {
//             filename: __dirname + '/application.log',
//             handleExceptions: true,
//             exitOnError: false,
//             level: 'warn'
//         });
//         break;
//     case 'test':
//         // Don't set up the logger overrides
//         return;
//     default:
//         logger.add(winston.transports.Console, {
//             colorize: true,
//             timestamp: true,
//             level: 'info'
//         });
//         break;
// }
