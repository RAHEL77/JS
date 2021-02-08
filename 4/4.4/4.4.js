let num = prompt("what's your number?");
bomBom(num);
//bomBom(100);

function bomBom(newNum) {
    for (i = 1; i <= newNum; i++) {
        str = i.toString();
        if ((i % 7 === 0) && str.includes(7)) {
            console.log('BOOMBOOM');
        } else
        if (i % 7 === 0)
            console.log('BOOM');
        else
            console.log(i);

    }
}