/**
 * Connections
 */

module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },
  mongodbServer: {
    adapter: 'sails-mongo',
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    user: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE
  }
};
