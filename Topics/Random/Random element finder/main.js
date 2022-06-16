function getRomanNumber(array) {
        let min = 1;
        let max = array.length;
        let i = Math.floor(Math.random() * (max - min)) + min;
        return array[i];
}
