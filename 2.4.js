function dateOfToday() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday")

    let today = new Date();
    let day = today.getDate();
    let year = today.getFullYear();
    let month = monthNames[today.getMonth()];
    dayName = weekday[today.getDay()];

    return `Today is ${dayName} the ${day} of  ${month} , ${year}`
}

let todayIs = dateOfToday();

console.log(todayIs);