//Create a function that
//receives 1 argument, an object and returns a new object with the properties and values swapped

let obj1 = {
    a: '2',
    b: '3',
    c: '4',
};
let newObj = {};
Object.entries(obj1).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    newObj[value] = key;
});
console.log(newObj);