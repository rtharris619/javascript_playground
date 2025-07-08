// ARRAYS
// ---------------------------------------------------------------------------------------------------------------------------
var Arrays = require('./data-structures/arrays');
//console.log(Arrays.stringifyArray());
// Arrays.driver();

// STRINGS
// ---------------------------------------------------------------------------------------------------------------------------
var Strings = require('./data-types/strings');
// console.log(Strings.getContainedWords(/{{/gi, /}}/gi));
// Strings.driver();

/* NUMBERS
--------------------------------------------------------------------------------------------------------------------------- */
var Numbers = require('./data-types/numbers');
// Numbers.driver();

/* DATES
--------------------------------------------------------------------------------------------------------------------------- */
var Dates = require('./data-types/dates');
// Dates.testDateFormatting();

/* BSTs
--------------------------------------------------------------------------------------------------------------------------- */
let BST = require('./data-structures/binary-search-tree');

// CODEINGAME
// ---------------------------------------------------------------------------------------------------------------------------
var Codingame = require('./challenges/codingame/codingame-easy');

// CODEWARS
// ---------------------------------------------------------------------------------------------------------------------------
var Codewars = require('./challenges/codewars/codewar-easy');

/* FUNCTIONAL CODING
--------------------------------------------------------------------------------------------------------------------------- */
var Functional = require('./functional/functional');

/* OBSERVABLES
--------------------------------------------------------------------------------------------------------------------------- */
let Observables = require('./observables/rxjs_playground');

/* ENCRYPTION
--------------------------------------------------------------------------------------------------------------------------- */
let Encryption = require('./encryption/encryption')

Encryption.driver();
