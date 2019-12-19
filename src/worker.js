'use strict';


const ary = [];
for (let index = 0; index < 1000000; index++) {
  ary.push(index)
}

const result = ary.reduce((acc, item) => acc += item, 0);

self.onmessage = function onMessage(e) {
  self.postMessage({
    result,
  });
};