let score = prompt("what's the Score?");
let answer = numOfScore(score);
console.log(answer);

function numOfScore(score) {
    let catagory;

    if (score > 0 && score < 65) {
        catagory = 'F'
        return catagory;
    } else if (score >= 65 && score < 70) {
        catagory = 'D'
        return catagory;
    } else if (score >= 70 && score < 80) {
        catagory = 'C'
        return catagory;
    } else if (score >= 80 && score < 90) {
        catagory = 'B'
        return catagory;
    } else if (score >= 90 && score <= 100) {
        catagory = 'A'
        return catagory;
    } else if (score < 1) {
        console.log("There is no score")
    }

}