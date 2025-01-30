
function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        let remainder = n % 10;
        sum += remainder;
        n = n / 10;
    }
    return Math.floor(sum);
}

console.log(sumDigits(421));
