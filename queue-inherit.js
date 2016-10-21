'use strict';

function Queue() {
  Array.call(this);
};

Queue.prototype.enqueue = function() {
  Array.prototype.push.apply(this, arguments);
};

Queue.prototype.dequeue = function() {
  Array.prototype.shift.apply(this, arguments);
};

const charQueue = new Queue();

charQueue.enqueue('lulwat');
console.log(charQueue);
charQueue.enqueue('fizbuzz');
console.log(charQueue);
charQueue.enqueue('duder');
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.enqueue('lulwat');
console.log(charQueue);
charQueue.enqueue('fizbuzz');
console.log(charQueue);
charQueue.enqueue('duder');
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
