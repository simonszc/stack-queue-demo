'use strict';

function Queue() {
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
}

Queue.prototype.dequeue = function() {
  if(this.length === 0) return;
  var result = this[0];
  for(var key = 1; key < this.length; key++) {
    this[key - 1] = this[key];
  }
  delete this[this.length - 1];
  this.length--;
  return result;
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
