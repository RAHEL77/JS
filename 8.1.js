// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

let obj1 = {
    name: 'string1',
}
let obj2 = {
    name: 'string2',
}
let obj3 = {
    name: 'string3',
}
let myMap = new Map();
myMap.set('obj1', 1);
myMap.set('obj2', 2);
myMap.set('obj3', 3);
for (const i of myMap)
    console.log(i);