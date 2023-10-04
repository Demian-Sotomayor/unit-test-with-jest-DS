test("Un euro debería ser 1.2 dolares", function() {
    const { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("Un Dolar debería ser 447.65 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    expect(fromDollarToYen(3.5)).toBe(447.65);
});

test("447.65 Yen debería ser 358.12 libras", function() {
    const { fromYenToPound } = require('./app.js');

    expect(fromYenToPound(447.65)).toBe(358.12);
});