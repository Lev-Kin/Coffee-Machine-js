function sum(numbers) {
    let sum = 0;
    for (let i = 0; numbers[i] !== 0; i++) {
        sum += numbers[i];
    }
    return sum;
}