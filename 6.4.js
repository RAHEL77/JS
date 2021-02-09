let population = [80, 90, 76, 112];
populationPercentence(population);

function populationPercentence(population) {
    let percentage = [];
    for (let index = 0; index < population.length; index++) {
        percentage[index] = population[index] / 7900 * 100;
        const element = population[index];
    }
    console.log(percentage);
}