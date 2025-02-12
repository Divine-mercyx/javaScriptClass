const { getScores, increaseScores, getNumberSquared } = require('./StudentScores');

test("test to get student scores greater than 70", () => {
    expect(getScores([87, 34, 99, 77, 34, 5])).toEqual([ 87, 99, 77 ]);
});

test("test to increase student scores by 5", () => {
    const numbers = [87, 34, 99, 77, 34, 5];
    const actual = increaseScores(numbers);
    const expected = [92, 39, 104, 82, 39, 10];
    expect(actual).toEqual(expected);
});

test("test to get square of student scores", () => {
    const numbers = [87, 34, 99, 77, 34, 5];
    const actual = getNumberSquared(numbers);
    const expected = [7569, 1156, 9801, 5929, 1156, 25];
    expect(actual).toEqual(expected);
});

