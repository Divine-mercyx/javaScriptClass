const fahrenheitToCelcius = (value) => {
    return ((5 / 9) * (value - 32))
}

const celciusToFahrenheit = (value) => {
    return ((9 / 5) * value + 32)
}

function displayHeader() {
    console.log("celcius\t\tfahrenheit | celcius\t\tfahrenheit");
    let newString = `${fahrenheitToCelcius(104.0)}              ${celciusToFahrenheit(fahrenheitToCelcius(104.0))}        | ${fahrenheitToCelcius(120.0).toFixed(1)}               ${celciusToFahrenheit(fahrenheitToCelcius(120.0)).toFixed(1)}`;
    console.log(newString);
    newString = `${fahrenheitToCelcius(102.2)}              ${celciusToFahrenheit(fahrenheitToCelcius(102.2))}      | ${fahrenheitToCelcius(110.0).toFixed(1)}               ${celciusToFahrenheit(fahrenheitToCelcius(110.0)).toFixed(1)}`;
    console.log(newString);
    
}

displayHeader();
