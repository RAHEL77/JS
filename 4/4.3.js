let John = [89, 120, 103];
let Mike = [116, 94, 123];
let Marry = [97, 134, 105]; 

let avgJohn = average(John);
let avgMike = average(Mike);
let avgMarry = average(Marry);
let winner; 

function average(score) {    
    let total = 0;    
    for (let i = 0; i < score.length; i++) { 
        total = total + score[i];    
    }    
    let avg = Math.floor(total / score.length);    
    return avg;
} 

if (avgJohn > avgMike && avgJohn > avgMarry) {    
    winner = "John";
} else if (avgMike > avgJohn && avgMike > avgMarry) {    
    winner = "Mike";
} else if (avgMarry > avgJohn && avgMarry > avgMike) {    
    winner = "Marry";
} else {    
    winner = "teko!";
} 
console.log("John's average score : " + avgJohn);
console.log("Mike's average score : " + avgMike);
console.log("Marry's average score : " + avgMarry); 
console.log("The winners of this years : " + winner);