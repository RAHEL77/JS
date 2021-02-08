function describeCountry(country, population, capital) {
    return `${country} has ${population} milion people and its capital city is ${capital}`
}

let country1 = describeCountry('Israel', 9, 'Jerusalem. ');
let country2 = describeCountry('Turkey', 90, 'Ankara. ');
let country3 = describeCountry('USA', 100, 'Whashington. ');
console.log(country1 + country3 + country3);