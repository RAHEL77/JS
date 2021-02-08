function fortuneTeller(job, location, partnerName, numOfChildren) {
    return `You wiil be a ${job} in ${location} and married to ${partnerName} with ${numOfChildren} children`
}

let fortune = fortuneTeller(' programmer ', ' Jerusalem ', ' Shirly ', 4);

console.log(fortune);