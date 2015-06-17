var environmentName = process.env.NODE_ENV || 'development',
    config = require('./' + environmentName),
    services = require('./hydstraWebservices.json'),
    packageInfo = require('../package.json');

config.environmentName = environmentName;
config.version = packageInfo.version;
config.services = services;
module.exports = config;