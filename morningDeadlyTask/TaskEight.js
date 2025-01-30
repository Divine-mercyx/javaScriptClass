
function isValid(side1, side2, side3) {
    let sum = side1 + side3
    if (sum > side2) {
        return true
    }
    return false;
}


function getArea(side1, side2, side3) {
    if (isValid(side1, side2, side3)) {
        let semi = (side1 + side2 + side3) / 2;
        let area = Math.sqrt(semi * (semi - side1) * (semi = side2) * (semi - side3));
        return area;
    }
    return "invalid";
}

console.log(getArea(3, 3, 2));
