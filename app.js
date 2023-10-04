let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // Retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 127.9;

    return valueInYen.toFixed(2);
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.8;

    return valueInPound;
}

module.exports = { 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};