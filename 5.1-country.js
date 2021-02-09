let language = "English";
let population = 49000000;
let isIsland = false;
let country = "England";
let person = "Sarah"
let rightCountry = countryToLive(language, population, isIsland, country);
console.log(rightCountry);

function countryToLive(language, population, isIsland, country) {
    if ((language == "English") && (!isIsland) && (population <= 50000000))
        return `You should live in ${country}`
    else
        return `${person}, you should not live in ${country}`;
}