// Given an object with a cycle, remove the cycle or circular reference from it.

function removeCycle(item1) {
  let curNext = item1;
  let map = new Map();
  while (curNext) {
    if (!map.has(curNext.next)) {
      map.set(curNext, curNext.next);
      curNext = curNext.next;
    } else {
      curNext.next = null;
      return item1;
    }
  }
}

//Input part
const myList = function (val) {
  this.val = val;
  this.next = null;
};

const item1 = new myList(10);
const item2 = new myList(20);
const item3 = new myList(30);
const item4 = new myList(40);

item1.next = item2;
item2.next = item3;
item3.next = item4;
item4.next = item2;

console.log(removeCycle(item1));
console.log(JSON.stringify(item1));
