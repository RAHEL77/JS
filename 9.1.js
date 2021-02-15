// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

function isString(str, callback) {
    if (typeof(str) === 'string')
        callback(str)
    else
        console.log("not string");
}

function callback(str) {
    console.log(str);
}

isString("hello", callback);

//2
// Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.


const firstUpperCase = function(str, callBack) {
    return callBack(str.charAt(0).toUpperCase() + str.slice(1));
}

function callback(str) {
    return str;
}

console.log(firstUpperCase('how aRe yoU', callback));