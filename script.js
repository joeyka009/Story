// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// const name6 = 'Jane Smith';
// let age6 = 23;


// {
//   const a = 1;
//   let b = 2;
//   console.log(a + b);
// }

// let firstName = 'John';
// let lastName = 'Smith';
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));

// //Arrow functions

const years = [1990, 1965, 1982, 1937];


//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

//ES 6

const ages6 = years.map(el => 2016 - el);
console.log(ages6);

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    })
  }
}

box5.clickMe();

const box6 = {
  color: 'blue',
  position: 2,
  clickMe: function() {
    document.querySelector('.blue').addEventListener('click', () => {
      let strr = `this is box number ${this.position} and it is ${this.color}`;
      alert(strr);
    })
  }
}

box6.clickMe();

function Person(name) {
  this.name = name;
}

// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(function (el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));
//   console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

Person.prototype.myFriends6 = function(friends) {
  let arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);

const [name, year] = ['John', 26];
console.log(name);
console.log(year);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

const {firstName, lastName} = obj;

console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(2001);
console.log(age);
console.log(retirement);

const boxes = document.querySelectorAll('.box');


const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue!';
}

const ages = [12, 17, 8, 21, 14, 11];

console.log(ages.findIndex(cur => cur >= 18));

function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges( 18, 30, 12, 21);
console.log(sum1);

var ages5 = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages5);
console.log(sum2);

const sum3 = addFourAges(...ages5);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const box = document.querySelectorAll('.box');
const all = [h, ...box];
Array.from(all).forEach(cur => cur.style.color = 'purple');

function isFullAge5() {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
  });
}

// isFullAge5(1990, 1999, 1965, 2016, 1987);

function isFullAge6(...years) {
  // console.log(years);
  years.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
  })
}

isFullAge6(1990, 1999, 1965);

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'american' : nationality;
//   this.firstName = firstName;
//   this.yearofBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }


function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.yearofBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

let john = new SmithPerson('John', 1990);
let emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'Es5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);
// question.delete(4);
console.log(question);

if(question.has(4)) {
  // question.delete(4);
  // console.log('Answer 4 is here')
}

// question.clear();
// console.log(question);

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

//ES 6
// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearofBirth;
//     console.log(age);
//   }
// }

// const john6 = new Person6('John', 1990, 'teacher');


var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)
johnAthlete5.wonMedal();

//ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearofBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor (name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();


class Parks {
  constructor (trees, parkArea, age, name) {
    this.trees = trees;
    this.parkArea = parkArea;
    this.age = age;
    this.name = name;
  }

  treeDensity() {
    let density = this.trees / this.parkArea;
    return density;
  }  
}



const evergreen = new Parks(1900, 200, 7, 'Evergreen Park');
const oak = new Parks(2100, 300, 5, 'Oak Park');
const elm = new Parks(700, 150, 9, 'Elm Park');

let park = [evergreen, oak, elm]
let pAge = 0;
park.forEach((cur, i) => {
  pAge = pAge + (park[i].age);
})
console.log(`Our 3 parks have an average age of ${pAge / park.length} years`);

 park.forEach((cur, i) => console.log(`${cur.name} is ${cur.age} years old, it has a tree density of ${cur.treeDensity()} and has an average age of ${park[i].age / park.length} years`))

 class Streets {
   constructor (name, year, length = 'normal', size) {
   this.name = name;
   this.year = year;
   this.length = length;
 }

 streetSize() {
   this.length < 25 ? this.size = 'Small' : this.length >= 25 && this.length < 30 ? this.size = 'Normal' : this.size = 'Huge'

  //  console.log(`${this.size}`)
 }
}

const yale = new Streets('Yale', 1972, 18);
const harvard = new Streets('Harvard', 1980, 29);
const hanbury = new Streets('Hanbury', 1968, 45);
const houston = new Streets('Houston', 2013, 23);

let roads = [yale, harvard, hanbury, houston];
roads.forEach(function(cur) {console.log(`${cur.name}, was built in ${cur.year}, and it is a ${cur.streetSize()} street`)})