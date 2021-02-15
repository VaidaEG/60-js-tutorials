let email = 'mario@thenetninja.co.uk';
let index = email.indexOf('@');
let result1 = email.toUpperCase();
let result2 = email.toLowerCase();
let result3 = email.lastIndexOf('n');
let result4 = email.slice(0, 5);
let result5 = email.substr(4, 10);
let result6 = email.replace('m', 'w');
let result7 = email.replace('n', 'w');

console.log(index);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operators +, -, *, /, **, %
// order of operation - B I D M A S
let result8 = 10 / 2;
let result9= radius % 3;
let result10 = pi * radius**2;
let result11 = 5 * (10 - 3)**2;
let likes = 10;
likes++;
likes--;
likes += 10;
likes -= 10;
likes *= 2;
likes /= 2;

console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11);
console.log(likes);

// Nan - not a number
console.log(5 / 'hello');

let result12 = 'the blog has ' + likes + ' likes';
console.log(result12);

const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;
// concatenation way
let result13 = 'The blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes';
console.log(result13);
// template string way
let result14 = `The blog called ${title} by ${author} has ${likes2} likes`;
console.log(result14);
// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes2} likes</span>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1]);
console.log(ninjas.length);
let ages = [20, 25, 30, 35];
console.log(ages[2]);
let random = ['shaun', 'crystal', 30, 20];
console.log(random);
// array methods
let result15 = ninjas.join(', ');
let result16 = ninjas.indexOf('chun-li');
let result17 = ninjas.concat(['ken', 'crystal']);
let result18 = ninjas.push('ken'); // return the length of a new array
let result19 = ninjas.pop(); // return the last value of an array

console.log(result15);
console.log(result16);
console.log(result17);
console.log(result18);
console.log(result19);
// null
let age = null;
console.log(age, age + 3, `the age is ${age}`);
// booleans & comparisons
console.log(true, false, "true", "fale");
// methods can return booleans
let email2 = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
let result20 = email.includes('@');
let result21 = names.includes('luigi');
console.log(result20);
console.log(result21);
// comparison operators
let age2 = 25;
console.log(age2 == 25);
console.log(age2 == 30);
console.log(age2 != 30);
console.log(age2 > 20);
console.log(age2 < 20);
console.log(age2 <= 25);
console.log(age2 >= 25);
let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');
// loose comparison (different types can still be equal)
console.log(age2 == 25);
console.log(age2 == '25');
console.log(age2 != 25);
console.log(age2 != '25');
// strict comparison (different types cannot be equal)
console.log(age2 === 25);
console.log(age2 === '25');
console.log(age2 !== 25);
console.log(age2 !== '25');
// type conversion
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);
let result22 = Number('hello');
console.log(result22);
// positive numbers - truefy, 0 - falsy, negative numbers - truefy
let result23 = String(50);
console.log(result23, typeof result23);
let result24 = Boolean(100);
console.log(result24, typeof result24);
let result25 = Boolean('0');
console.log(result25, typeof result25);
let result26 = Boolean(0);
console.log(result26, typeof result26);
let result27 = Boolean('');
console.log(result27, typeof result27);