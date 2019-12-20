'use strict';






self.onmessage = function onMessage(e) {
  const { data } = e.data;

  const result = data.reduce((acc, item) => acc += item, 0);
  
  self.postMessage({
    result,
  });
};