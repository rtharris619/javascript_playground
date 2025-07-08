const { from, take } = require("rxjs");

// Converts an array to an Observable
const testFrom = () => {
  const source = from([1, 2, 3, 4, 5]);
  source.subscribe(console.log);
}

// Convert an infinite iterable (from a generator) to an Observable
const testFromGenerator = () => {
  function* generateDoubles(seed) {
    let i = seed;

    while (true) {
      yield i;
      i = 2 * i;
    }
  }

  const iterator = generateDoubles(3);
  const result = from(iterator).pipe(take(10));

  result.subscribe(x => console.log(x));
}

const driver = () => {
  testFromGenerator();
}

module.exports.driver = driver;
