const { findValues, findPrimeFactors } = require('./HCF');

test('test to get the prime factors of an array', () => {
    let myNumbers = [6, 9, 15, 18];
    let actual = findValues(myNumbers)
    let expected = [3];
    expect(actual).toEqual(expected);
});

test('test to get prime factor of a number', () => {
    let number = 4;
    let actual = findPrimeFactors(number);
    let expected = [2, 2]
    expect(actual).toEqual(expected)
})

test('test to get prime factor with zero input', () => {
    let number = 0;
    let actual = findPrimeFactors(number);
    let expected = [];
    expect(actual).toEqual(expected);
})