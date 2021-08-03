
function greet(fn) {
    console.log(fn());
}

function sayHello() {
    return function() {
        return "I am functional";
    }
}

function higherOrderFunction1() {
    let numbers = [1, 2, 3];
    numbers = numbers.map(number => number * 2);
    console.log(numbers);
}

function higherOrderFunction2() {
    setTimeout(() => console.log('higherOrderFunction2'), 1000);
}

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

function compositionExample() {
    let input = "   JavaScript   ";
    let result = wrapInDiv(toLowerCase(trim(input)));
    console.log(result);
}

function testFunctionalCode() {
    // let message = sayHello();
    // greet(message);
    // higherOrderFunction2();
    compositionExample();
}

module.exports.testFunctionalCode = testFunctionalCode;
