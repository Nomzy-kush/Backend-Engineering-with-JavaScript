function countDown(number) {
    if (number === 0) {
        console.log("And finally the stopping point");
        return;
    }

    console.log(number);
    countDown(number - 1);
}

countDown(5);