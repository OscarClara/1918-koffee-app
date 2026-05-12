const calcularTotal = require('./calculadora');
test('Debe calcular el total de café correctamente', () => {
  expect(calcularTotal(30000, 2)).toBe(55000);
});