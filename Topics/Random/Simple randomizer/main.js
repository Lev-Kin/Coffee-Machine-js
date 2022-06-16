function getRandom() {
    let min = 0;
    let max = 5;
    return Math.floor(Math.random() * (max - min)) + min;
}
