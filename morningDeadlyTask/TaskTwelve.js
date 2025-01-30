const isPrime = (value) => {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
};


const reverse = (item) => {
    let numbers = "";
    numbers += item;
    let reversedNumber = "";
    for (char of numbers) {
        reversedNumber = char + reversedNumber;
    }
    return reversedNumber;
};


const emirps = (value) => {
    let emirpString = "";
    let count = 0;
    for (let i = 2; i < value -1; i++) {
        let newString = "";
        newString += i;
        if (isPrime(i) && isPrime(parseInt(reverse(i))) && (newString.length > 1)) {
            emirpString += newString + " ";
            count++;
            if (count == 10) {
                emirpString += "\n";
                count = 0;
            }
        }
    }
    console.log(emirpString);
};

emirps(1000);
