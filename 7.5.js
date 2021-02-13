const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const changeArray = (array) => {
    let obj = {}
    let lowerArray = array.join("").toLowerCase();
    let noSpaceArray = lowerArray.replace(/\s/g, '');
    let splitArray = noSpaceArray.split("")
    splitArray.sort()
    do {
        let lastIndex = splitArray.lastIndexOf(splitArray[0]) // how many appearances the char have
        let char = splitArray[0] // the range of the char
        obj[char] = lastIndex + 1 // adding number of app to obj
        splitArray.splice(0, lastIndex + 1) //removing from arr
    } while (splitArray.length > 0); // no more letters? go home
    return obj;
}
const newArray = changeArray(array);
console.log(newArray);