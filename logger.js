var winston = require('winston');

var create = function(options){
  options = options || {};
  return new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.Http)({
      host: options.host || 'localhost',
      port: options.port || 4114
    })
  ]
});
};

module.exports.create = create;