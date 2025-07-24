const fs = require('fs');
const path = require('path');

// Change this to the folder you want to check
const folderPath = path.join(__dirname);

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading the folder:', err);
    return;
  }

  console.log('Files in the folder:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});
