'use strict';

console.log('start');

const data = [];
for (let index = 0; index < 1000000; index++) {
  data.push(index)
}

console.log('finish');
const worker = new Worker('worker.js');
worker.postMessage({data});

worker.onmessage = function onMessage(e) {
  const { result } = e.data;
  
  console.log('[MAIN]', result);
};