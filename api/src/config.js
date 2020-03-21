const Config = {
  appNetworking: {
    port: parseInt(process.env.PORT, 10),
    host: process.env.HOST
  },
  db: {
    database: 'Todo - SQL',
    host: 'todo - host',
    password: 'todo - pwd',
    username: 'todo - user'
  },
  publicDirectories: {
    database: 'SQL'
  },
  enableHttpRequestLogging: true
};

module.exports = Config;
