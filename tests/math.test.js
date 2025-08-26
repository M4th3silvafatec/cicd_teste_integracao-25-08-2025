const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
});


test('subtração 2 - 3 igual a 1', () => { 
    expect(math.subtract(2,3)).toBe(-1); 
});


test('mutiplicação 2 * 3 igual a 15', () => { 
    expect(math.multiply(2,3)).toBe(6); 
});


test('a divisão de  10/2 igual a 5', () => { 
    expect(math.divide(10, 2)).toBe(5); 
});