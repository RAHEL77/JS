let numSiblings = prompt("How many siblings do you have?");

if (numSiblings > 1) {
    console.log("you have more than 1 siblings")
} else if (numSiblings == 1) {
    console.log("you have 1 sibling")
} else {
    console.log("you have 0 sibling")
}

//else if (Number(numSiblings) === 1) {
//incase of === it checks also at the type of the variable, so we have to convert to typeof to number when we use ===