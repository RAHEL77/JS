let color = "blue";
checkColor(color);

function checkColor(color) {
    switch (color) {
        case 'yellow' || 'pink' || 'orange':
            console.log("light color");
            break;
        case 'blue' || 'purple' || 'brown':
            console.log("dark color");
            break;
        default:
            console.log("Unknown Color");
            break;
    }
}