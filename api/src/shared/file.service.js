const https = require('https');
const fs = require('fs');

const downloadFile = (url, dest) => {
  const file = fs.createWriteStream(dest);
  https
    .get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        console.log('File has been downloaded');
        file.close();
      });
    })
    .on('error', err => {
      fs.unlink(dest);
    });
};

module.exports = { downloadFile };
