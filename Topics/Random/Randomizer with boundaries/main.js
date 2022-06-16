function getRandom() {
    let min = 1;
    let max = 4;
    return Math.floor(Math.random() * (max - min)) + min;
}