function percentageOfWorld1(population) {
    percentage = population / 7900 * 100;
    return percentage;

}

let percentageOfcountry1 = percentageOfWorld1(1441);
let percentageOfcountry2 = percentageOfWorld1(600);
let percentageOfcountry3 = percentageOfWorld1(70);

console.log(percentageOfcountry1.toFixed(2), percentageOfcountry2.toFixed(2), percentageOfcountry3.toFixed(2));

const percentageOfWorld2 = function(population) {
    percentage = population / 7900 * 100;
    return percentage;
}
percentageOfcountry1 = percentageOfWorld2(1441);
percentageOfcountry2 = percentageOfWorld2(600);
percentageOfcountry3 = percentageOfWorld2(70);
console.log(percentageOfcountry1.toFixed(2), percentageOfcountry2.toFixed(2), percentageOfcountry3.toFixed(2));