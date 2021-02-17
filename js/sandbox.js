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
// for loops
for (let i = 0; i < 5; i++) {
    console.log('in loop: ', i);
}
console.log('loop finished');

const names1 = ['shaun', 'mario', 'luigi'];

for (i = 0; i < names1.length; i++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
// while loops
const names2 = ['shaun', 'mario', 'luigi'];
let j = 0;
// while (j < 5) {
//     console.log('in loop: ', j);
//     j++;
// }
while (j < names2.length) {
    console.log(names2[j]);
    j++;
}
// do while loop
let k = 4;
do {
    console.log('val of k is: ', k);
    k++;
} while(k < 5);
// if statements
const age3 = 20;

if (age3 > 20) {
    console.log('you are over 20 years old');
}

const ninjas2 = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas2.length > 3) {
    console.log("that's a lot of ninjas");
}
// else if statements
const password = 'passfdddddf';

if(password.length >= 12) {
    console.log('That password is might strong.');
} else if (password.length >= 8) {
    console.log('That password is long enough!');
} else {
    console.log('Password is not long enough!');
}
// logical operators - OR || and AND &&
const password2 = 'p@df';

if(password2.length >= 12 && password2.includes('@')) {
    console.log('That password is might strong.');
} else if (password2.length >= 8 || password2.includes('@') && password2.length > 5) {
    console.log('That password is strong enough!');
} else {
    console.log('Password is not strong enough!');
}
// logical NOT (!)
let user = false;
if (!user) {
    console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);
// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log('your score: ', scores[i]);
    if (scores[i] === 100) {
        console.log('Congrats, you got the top score!');
        break;
    }
}
// switch statement
const grade = 'D';

switch(grade) {
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'E':
        console.log('you got an E');
        break;
    default:
        console.log('not a valid grade');
}
// variables & block scope
let age4 = 30;

if (true) {
    let age4 = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ', age4, name);
    if (true) {
        let age4 = 50;
        console.log('inside 2nd code block: ', age4);
    }
}
console.log('outside code block: ', age4, name);