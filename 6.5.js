//1
const array1 = new Array(100);
console.log(array1.fill(77));

//2
Array.from(Array(100).keys());

//3
const me = {
    name: 'rachel',
    lastname: 'baruh',
};

Object.keys(me);
// ['name', 'lastname']

Object.values(me);
// ['rachel', 'baruh']

Object.entries(me);
// [ ['name', 'rachel'], ['lastname', 'baruh'] ]

//4
Object.assign({}, ['a', 'b', 'c']);

//5
let newarray = []
Array.isArray(newarray);

//6
//effect to old array
let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.slice();

console.log({ newArray });