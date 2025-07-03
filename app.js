// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// Funciones de conversión de moneda
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs["USD"]; 
    let totalYen = euro * oneEuroIs["JPY"]; 
    return totalYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs["JPY"]; 
    let totalPound = euro * oneEuroIs["GBP"]; 
    return totalPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};