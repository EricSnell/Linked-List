'use strict'
var LinkedList = require('./exercise');

var linkedList = new LinkedList();

linkedList.insert(0, 5);
linkedList.insert(1, 10);
linkedList.insert(2, 20);
linkedList.insert(3, 25);
linkedList.insert(4, 30);
linkedList.insert(5, 35);

/* Write an algorithm to find the middle element of a linked list */
let findMid = (list) => {
	let idx = Math.ceil(linkedList.length / 2) - 1
	return linkedList.get(idx)
}
console.log('findMid: ', findMid(linkedList))

/* Write an algorithm to find the third element from the end of a linked list */

let findThirdToLast = (list) => {
	let idx = linkedList.length - 3
	return linkedList.get(idx)
}

console.log('findThirdToLast: ', findThirdToLast(linkedList))

/* Write an algorithm to reverse a linked list */

let reverseList = (list) => {
	let newLinkedList = new LinkedList();
	for (let i = 0; i < linkedList.length; i++) {
		newLinkedList.insert(0, linkedList.get(i))
	}
	return newLinkedList;
}

console.log('reverseList: ', reverseList(linkedList))
console.log('next:', linkedList.head.next.next.next);

/* Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has its next value pointing to an earlier node in the list) */

// If last node.next isn't 'null'

var checkLoop = function() {
	let query = linkedList.head
	// linkedList.addLast();
	// linkedList._break();

	for (var i = 0; i < linkedList.length; i++) {
		query = query.next
	}
	if (query) {
		return (console.log('cycle detected'))
	}

	for (var i = 0; i < linkedList.length; i++) {
	let node = linkedList._find(i)
		for (var j = i; j < linkedList.length; j++) {
			let node2 = linkedList._find(j)
			// console.log(node, '___node')
			// console.log(node2.next, '_____node2.next')
			if (node2.next === node) {
				console.log('Loop');
				return true
			}
		}
	}

	console.log('No loop');
	return false
}

checkLoop();

