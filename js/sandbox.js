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