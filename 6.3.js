let oldarray = ["boo", "Moooo", "Do", "Jooooooo"];
lengthOfWorld();

function lengthOfWorld() {
    let element;
    let newarray = [];
    for (let index = 0; index < 4; index++) {
        element = oldarray[index].length;
        newarray[index] = element
    }
    console.log(newarray);

}