'use strict';

// console.log('start');
// const ary = [];
// for (let index = 0; index < 10000000; index++) {
//   ary.push(index)
// }

// const result = ary.reduce((acc, item) => acc += item, 0);
// console.log(result);
// console.log('finish');

console.log('start');

console.log('finish');
const worker = new Worker('worker.js');
worker.onmessage = function onMessage(e) {
  console.log('[MAIN]', e.data);
};
worker.postMessage('');