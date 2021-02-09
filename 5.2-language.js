let oneLanguage = "english";
checkLanguage(oneLanguage);

function checkLanguage(oneLanguage) {
    switch (oneLanguage) {
        case 'mandarin':
            console.log("MOST number of native speakers!");
            break;
        case 'spanish':
            console.log("2nd place in number of native speakers");
            break;
        case 'english':
            console.log("3rd place");
            break;
        case 'hindi':
            console.log("Number 4");
            break;
        case 'arabic':
            console.log("arabic");
            break;
        default:
            console.log("Not in the top 5");
            break;
    }
}