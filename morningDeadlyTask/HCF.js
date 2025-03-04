function findValues(values) {
    let minVal = Math.min(...values);
    let hcf;
    for (let i = 0; i <= minVal; i++) {
        if (values.every(value => value % i === 0)) {
            hcf = i;
        }
    }
    let primeFactors = findPrimeFactors(hcf);
    return primeFactors;
}

function findPrimeFactors(value) {
    let factors = [];
    let divisor = 2;

    while (value > 1) {
        while (value % divisor === 0) {
            factors.push(divisor);
            value /= divisor;
        }
        divisor++;
    }
    return factors;
}

//const numbers = [6, 9, 15];
//console.log(findValues(numbers));

module.exports = { findValues, findPrimeFactors };
