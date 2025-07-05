// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

///////////////////pruebas funciones conversion de monedas////////////////////

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = Number(fromEuroToDollar(3.5).toFixed(3))

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = Number((3.5 * 1.07).toFixed(3))

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 146,2616822429907 yenes", function() {

    const { fromDollarToYen } = require('./app.js');

    const yenes = Number(fromDollarToYen(5.5).toFixed(3));

    const expected = Number(((5.5 / 1.07) * 156.5).toFixed(3))

    expect(yenes).toBe(expected); 
})


test("One yen should be 0,0055591054313099 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const pounds = Number(fromYenToPound (150).toFixed(3))

    const expected = Number(((150 / 156.5) * 0.87).toFixed(3))

    expect(pounds).toBe(expected); 
})
