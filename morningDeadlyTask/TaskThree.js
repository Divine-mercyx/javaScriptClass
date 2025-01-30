const reverse = (item) => {
    let numbers = "";
    numbers += item;
    let reversedNumber = "";
    for (char of numbers) {
        reversedNumber = char + reversedNumber;
    }
    return reversedNumber;
}

console.log(reverse(1234));
