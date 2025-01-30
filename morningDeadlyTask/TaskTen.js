
const formatInteger = (n, len) => {
    let newString = "";
    let temp = "";
    temp += n;
    let count = 0;
    while (count < len - temp.length) {
        newString += "0";
        count++;
    }
    newString += n;
    return newString;
}

console.log(formatInteger(434, 6));
