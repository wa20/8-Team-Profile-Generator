const fs = require('fs');


if (fs.existsSync('team.html')) {
  fs.unlinkSync('team.html');
  console.log('team.html file reset!');
}