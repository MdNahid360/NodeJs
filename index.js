
const path = require('path');
const filename = "F:/WEB DEVELOPMENT/React(2022)/Mern Practice/Practice/Simple_node/test.js";


const file = path.basename(filename);
const dir = path.dirname(filename);
const ext = path.extname(filename);
// const frmt = path.format(filename);
// const absolute = path.isAbsolut(filename);
// const join = path.join(filename);
// const normalize = path.normalize(filename);
// const parse = path.parse(filename);
// const posix = path.posix(filename);
// const relative = path.relative(filename);
// const resolve = path.relative(filename);
// const sep = path.sep(filename);
// const win = path.win32(filename);


console.log(`path information ::: `, file);