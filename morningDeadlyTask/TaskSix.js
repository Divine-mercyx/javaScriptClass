function feetToMeter(value) {
    return 0.305 * value;
}

function meterToFeet(value) {
    return value / 0.305;
}

function displayHeader() {
    console.log("Feet\t\tMeters | Meters\t\tFeet");
    let newString = `${meterToFeet(0.305).toFixed(1)}             ${feetToMeter(1).toFixed(3)}  | ${feetToMeter(66.574).toFixed(1)}           ${meterToFeet(20.0).toFixed(3)}`;
    console.log(newString);
    newString = `${meterToFeet(0.610).toFixed(1)}             ${feetToMeter(2).toFixed(3)}  | ${feetToMeter(81.967).toFixed(1)}           ${meterToFeet(26.0).toFixed(3)}`;
    console.log(newString);
}

displayHeader();
