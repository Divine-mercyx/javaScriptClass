const reverse = (item) => {
    let numbers = "";
    numbers += item;
    let reversedNumber = "";
    for (char of numbers) {
        reversedNumber = char + reversedNumber;
    }
    return reversedNumber;
}


const isPalindrome = (item) => {
    let reversedNumber = reverse(item);
    if (reversedNumber == item) {
        return true;
    }
    return false;
}


console.log(isPalindrome(123));

