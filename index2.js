var sayHello = nome => `...... index 2 ......` +
                         `(${nome})`;


var getNextValue = n => ({ anterior: n - 1, proximo: n + 1 });

console.log(sayHello);
console.log(sayHello('Célere Sistemas'));
console.log( getNextValue(10) );
