const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.download('', err => {
    console.log('ADinu - LOG: err', err);
  });
  console.log('ADinu - LOG: process.env.FILE_URI', process.env.PROJECTOR_FILE_URI);
  res.send({ message: 'App works' });
});

module.exports = router;
