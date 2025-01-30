
const getAreaOfPentagon = (n) => {
    let area = (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(n, 2);
    return area.toFixed(2);
}

console.log(getAreaOfPentagon(6));
