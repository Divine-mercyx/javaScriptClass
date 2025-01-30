
const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            return false;
        }
    }
    return true;
}

const findNumberOfPrimes = (value) => {
    let count = 0;
    for (let i = 2; i < value; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

console.log("count of prime number is: ", findNumberOfPrimes(10));
