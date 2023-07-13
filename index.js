const vendor = require('./test.js')
const _= require('lodash');
console.table(vendor.a);
console.table('data is :::::::: ' + _.last(vendor.data));
vendor.user();