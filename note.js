// methods.js

// Array Methods

// 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]

// 2. pop()
// Removes the last element from an array and returns that element.
let last = arr.pop(); // last is 4, arr is now [1, 2, 3]

// 3. shift()
// Removes the first element from an array and returns that element.
let first = arr.shift(); // first is 1, arr is now [2, 3]

// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(1); // arr is now [1, 2, 3]

// 5. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
let doubled = arr.map(x => x * 2); // doubled is [2, 4, 6]

// 6. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let evens = arr.filter(x => x % 2 === 0); // evens is [2]

// 7. reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = arr.reduce((total, current) => total + current, 0); // sum is 6

// 8. forEach()
// Executes a provided function once for each array element.
arr.forEach(x => console.log(x)); // logs 1, 2, 3

// 9. find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let found = arr.find(x => x > 2); // found is 3

// 10. includes()
// Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesTwo = arr.includes(2); // true

// 11. concat()
// Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2); // combined is [1, 2, 3, 4]

// 12. slice()
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let sliced = arr.slice(1, 3); // sliced is [2, 3]

// 13. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arr3 = [1, 2, 3, 4];
let removed = arr3.splice(1, 2); // removed is [2, 3], arr3 is now [1, 4]

// 14. sort()
// Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let unsorted = [3, 1, 4, 2];
let sorted = unsorted.sort(); // sorted is [1, 2, 3, 4]

// 15. reverse()
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let reversed = sorted.reverse(); // reversed is [4, 3, 2, 1]

// 16. join()
// Joins all elements of an array into a string and returns this string.
let joined = arr.join('-'); // joined is '1-2-3'

// 17. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
let arr4 = [1, 2, 3, 4];
let indexFound = arr4.findIndex(x => x === 3); // indexFound is 2

// 18. every()
// Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let allEven = arr4.every(x => x % 2 === 0); // allEven is false

// 19. some()
// Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let someEven = arr4.some(x => x % 2 === 0); // someEven is true

// 20. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nested = [1, [2, 3], [4, [5]]];
let flattened = nested.flat(2); // flattened is [1, 2, 3, 4, 5]

// Object Methods

// 1. Object.keys()
// Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj); // keys is ['a', 'b', 'c']

// 2. Object.values()
// Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
let values = Object.values(obj); // values is [1, 2, 3]

// 3. Object.entries()
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(obj); // entries is [['a', 1], ['b', 2], ['c', 3]]

// 4. Object.assign()
// Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = {a: 1};
const source = {b: 2, c: 3};
const result = Object.assign(target, source); // result is {a: 1, b: 2, c: 3}

// 5. Object.freeze()
// Freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
Object.freeze(obj);
obj.a = 2; // does nothing, obj is still {a: 1}

// 6. Object.seal()
// Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
const sealedObj = {a: 1};
Object.seal(sealedObj);
sealedObj.a = 2; // works, sealedObj is now {a: 2}
sealedObj.b = 3; // does nothing, sealedObj is still {a: 2}

// 7. Object.create()
// Creates a new object, using an existing object as the prototype of the newly created object.
const proto = {greet() { return 'Hello'; }};
const objCreated = Object.create(proto);
objCreated.name = 'John';
console.log(objCreated.greet()); // 'Hello'

// 8. Object.defineProperty()
// Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const objWithProp = {};
Object.defineProperty(objWithProp, 'name', {
  value: 'John',
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(objWithProp.name); // 'John'

// 9. Object.getOwnPropertyDescriptor()
// Returns a property descriptor for a named property on an object.
const desc = Object.getOwnPropertyDescriptor(objWithProp, 'name');
console.log(desc); // { value: 'John', writable: false, enumerable: true, configurable: true }

// 10. Object.is()
// Determines whether two values are the same value.
let isSame = Object.is(NaN, NaN); // isSame is true

// 11. Object.fromEntries()
// Transforms a list of key-value pairs into an object.
let arrEntries = [['a', 1], ['b', 2]];
let objFromEntries = Object.fromEntries(arrEntries); // { a: 1, b: 2 }

// 12. Object.hasOwnProperty()
// Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
let hasProp = obj.hasOwnProperty('a'); // true











// Standard function declaration
// This function is hoisted, meaning it can be called before its declaration in the code.
function functionName() {
  // Function body
}

// Function expression
// Here, a function is assigned to a variable. This function is not hoisted, so it cannot be called before its assignment.
functionName = function() {
  // Function body
};

// Arrow function expression
// An arrow function is a shorter syntax for a function expression. It does not have its own 'this' context,
// meaning it inherits 'this' from the surrounding code. This function is also not hoisted.
functionName = () => {
  // Function body
};