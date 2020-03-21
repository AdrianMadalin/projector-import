const CronJob = require('cron').CronJob;
const path = require('path');
const { downloadFile } = require('./file.service');

const job = new CronJob(
  '0 8 * * * *',
  function() {
    const destination = path.join(__dirname, '../public/uploads/', 'projector-data.csv');
    downloadFile(process.env.PROJECTOR_FILE_URI, destination);
  },
  null,
  true,
  'Europe/Brussels'
);

module.exports = { job };
