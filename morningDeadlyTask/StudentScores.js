
const getScores = (values) => {
    return values.filter((value) => value > 70);
}

const increaseScores = (values) => {
    return values.map((value) => value + 5);
}

const getNumberSquared = (values) => {
    return values.map((value) => value * value);
}


module.exports = { getScores, increaseScores, getNumberSquared };