const isPrime = (value) => {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

const getTwinPrime = (limit) => {
    for (let i = 2; i < limit; i++) {
        if (isPrime(i) && isPrime(i + 2)) {
            console.log(`(${i}, ${i + 2})`);
        }
    }
}



getTwinPrime(1000);
