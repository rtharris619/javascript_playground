const person = {
  name: {
    first: 'Bob',
    last: 'Smith',
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.');
  },
  greeting: function () {
    console.log('Hi! I\'m ' + this.name.first + '.');
  }
};

console.log(person.name.last);
person.bio();
person.greeting();
