const calcularTotal = require('./calculadora');
test('Debe calcular el total de café correctamente', () => {
  expect(calcularTotal(25000, 2)).toBe(50000);
});