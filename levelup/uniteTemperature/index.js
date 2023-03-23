/*
Pour convertir en degrés Celsius une température donnée en degrés Fahrenheit, 
il suffit de soustraire 32 et de diviser par 1,8 (9 / 5 = 1,8) le nombre ainsi obtenu.
Pour 50 °F, on obtient: 50 - 32 = 18, puis 18 / 1,8 = 10; donc 50 °F = 10 °C.

Ecrivez un programme qui permet de transformer une température en degré Celsius en Fahrenheit.

Ecrivez un autre programme qui permet de transformer une température en Fahrenheit en degré Celsius.
*/

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8
}

let input = prompt("Entrez une température")
input = parseFloat(input)
let type = prompt("Entrez F pour convertir en fahrenheit et C pour convertir en celsius")

if (type == "F" || type == "f") {
    console.log(convertCelsiusToFahrenheit(input))
} else if (type == "C" || type == "c") {
    console.log(convertFahrenheitToCelsius(input))
} else if (type == "C" || type == "c") {
} else {
    throw new Error
}