// const person = {
//   name: {
//     first: 'Bob',
//     last: 'Smith',
//   },
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio: function () {
//     console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.');
//   },
//   greeting: function () {
//     console.log('Hi! I\'m ' + this.name.first + '.');
//   }
// };

// console.log(person.name.last);
// person.bio();
// person.greeting();

var Arrays = require('./data-structures/arrays');

let fruits = ['Apple', 'Banana'];
Arrays.loopOverArray(fruits);

let languages = ['C#', 'Java', 'JavaScript', 'Python'];
languages = Arrays.insertIntoArray(languages, 1, 'Rust');
console.log(languages);

languages = Arrays.insertAtBeginning(languages, 'Clojure');
console.log(languages);

languages = Arrays.removeFromBeginning(languages);
console.log(languages);

console.log(Arrays.generateSequence(10));

console.log(Arrays.generateRange(0, 4, 1));