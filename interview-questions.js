'use strict'
var linkedList = require('./exercise');

linkedList.insert(0, 5);
linkedList.insert(1, 10);
linkedList.insert(2, 20);
linkedList.insert(3, 25);
linkedList.insert(4, 30);

/* Write an algorithm to find the middle element of a linked list */
let findMid = (list) => {
	let idx = Math.floor(linkedList.length / 2)
	return linkedList.get(idx)
}
console.log('findMid: ', findMid(linkedList))

/* Write an algorithm to find the third element from the end of a linked list */

/* Write an algorithm to reverse a linked list */

/* Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has its next value pointing to an earlier node in the list) */

