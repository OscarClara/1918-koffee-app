const calcularTotal = require('./calculadora');

test('Debe calcular correctamente el total de café', () => {
  expect(calcularTotal(25000, 2)).toBe(50000);
});