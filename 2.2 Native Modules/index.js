const fs = require('fs');

// fs.writeFile('message.txt', 'Assalamualaikum from node JS', (err) => {
//   if (err) throw err;
//   console.log('File Has been Saved');
// });

fs.readFile('./message.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
