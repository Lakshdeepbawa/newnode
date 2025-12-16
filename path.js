const path = require('path');
const a = path.basename('c\\temp\\myfile.html');
const b = path.dirname('c\\temp\\myfile.html');
const c = path.extname(__dirname);
const d = path.extname(__filename);
console.log(a,b,c,);
console.log(d)