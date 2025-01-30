const reverse = (item) => {
    let numbers = "";
    numbers += item;
    let reversedNumber = "";
    for (char of numbers) {
        reversedNumber = char + reversedNumber;
    }
    return reversedNumber;
};


const isPrime = (value) => {
    if (value < 2) return false;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
};


const isPalindrome = (item) => {
    let reversedNumber = reverse(item);
    if (reversedNumber == item) {
        return true;
    }
    return false;
};


const getPalindromicPrime = (value) => {
    let count = 0;
    let newString = "";
    for (let i = 2; i < value - 1; i++) {
        if (isPrime(i) && isPalindrome(i)) {
            newString += i + " ";
            count++;
            if (count === 10) {
                newString += "\n";
                count = 0;
            }
        }
    }
    return newString;
}

console.log(getPalindromicPrime(1000));
