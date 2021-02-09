let element = 0;

Vote();


function Vote() {
    for (let index = 0; index < 50; index++) {
        element = index + 1;
        console.log(`Voter number ${element} is currently voting`);
    }
}