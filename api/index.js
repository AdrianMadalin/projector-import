const path = require('path');
const express = require('express');
const app = express();
const sqlService = require('./src/shared/mysql');
const cron = require('./src/shared/cron');
const fileRoute = require('./src/routes/base.route');

// CONNECT TO THE DATABASE
sqlService.connectToDatabase();

// START CRON JOB
cron.job.start();

app.use(fileRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});
