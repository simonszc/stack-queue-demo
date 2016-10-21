'use strict';

function Queue() {
  this.next = null;
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  if(!this.next) this.next = 0;
  this.length++;
}

Queue.prototype.dequeue = function() {
  let result = this[this.next];
  delete this[this.next];
  this.next++;
  return result;
}


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
