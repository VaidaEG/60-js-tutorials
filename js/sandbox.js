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
//function declaration
function greet() {
    console.log('hello there');
}
// function expression
const speak = function() {
    console.log('good day');
};
greet();
speak();
// arguments & parameters
const speak2 = function(name = 'Luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
}
speak2();
speak2('Shaun');
speak2('Mario', 'morning');
// returning values
const speak3 = function(name = 'Luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};
const calcArea  = function(radius) {
    return 3.14 * radius**2;
};
let a = calcArea(5);
console.log(a);
// regular functions
const calcArea2 = function (radius) {
    return 3.14 * radius**2;
}
// arrow functions
const calcArea3 = (radius) => {
    return 3.14 * radius**2;
};
// if we have only one parameter
const calcArea4 = radius => {
    return 3.14 * radius**2;
};
// if we don't have any parameters
const calcArea5 = () => {
    return 3.14 * radius**2;
};
// shorter way
const calcArea6 = radius => 3.14 * radius**2;

const area = calcArea2(5);
console.log('area is: ', area);
const area2 = calcArea3(6);
console.log('area is: ', area2);
const area3 = calcArea4(8);
console.log('area is: ', area3);
const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
const bill2 = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30], 0.21));
console.log(bill2([10,15,30], 0.21));
const name2 = 'Shaun';
// functions
const greet2 = () => 'hello';
let resultOne = greet2();
console.log(resultOne);
// methods
let resultTwo = name2.toUpperCase();
console.log(resultTwo);
// callbacks & foreach
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value) {
    // do something
    console.log(value);
});
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}
people.forEach(logPerson);
// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people2 = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Shun-li'];
let html2 = ``;

people2.forEach(person => {
    // creat html template
    html2 += `<li style="color: purple;">${person}</li>`;
})
console.log(html2);
ul.innerHTML = html2;
// object literals
let user2 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};
console.log(user2);
console.log(user2.name);
user2.age = 35;
console.log(user2.age);
console.log(user2['name']);
console.log(user2['email']);
user2['name'] = 'chun-li';
console.log(user2['name']);
const key = 'location';
console.log(user2[key]);
console.log(typeof user2);
user2.login();
user2.logout();
user2.logBlogs();
const name10 = 'mario';
name10.toUpperCase();

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];
// console.log(blogs);

// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area4 = 7.7;
console.log(Math.round(area4));
console.log(Math.floor(area4));
console.log(Math.ceil(area4));
console.log(Math.trunc(area4));
// random numbers
const random2 = Math.random();
console.log(random2);
console.log(Math.round(random2 * 100));
// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
// reference values
const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
// DOM - Document Object Model
const para = document.querySelector('p');
console.log(para);
const para2 = document.querySelector('.error');
console.log(para2);
const para3 = document.querySelector('div.error');
console.log(para3);
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});
console.log(paras);
console.log(paras[0]);
const errors = document.querySelectorAll('.error');
console.log(errors);
// get an element by ID
const title2 = document.getElementById('page-title');
console.log(title2);
// get element by their class name
const errors2 = document.getElementsByClassName('error');
console.log(errors2);
console.log(errors2[0]);
// get elements by their tag name
const paras2 = document.getElementsByTagName('p');
console.log(paras2);
console.log(paras2[1]);
const para4 = document.querySelector('p');
console.log(para4.innerText);
para4.innerText = 'Ninjas are awesame!';
para4.innerText += ' Realy!';
const paras3 = document.querySelectorAll('p');
paras3.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});
const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>This is a new h2</h2>';
const people3 = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';
const mssg = document.querySelector('div');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('style', 'color: green;');
const title3 = document.querySelector('h1');
title3.setAttribute('style', 'margin: 50px');
console.log(title3.style);
console.log(title3.style.margin);
title3.style.color = 'orange';
title3.style.textTransform = 'uppercase';
title3.style.fontSize = '50px';
title3.style.margin = '';
const content2 = document.querySelector('p');
console.log(content2.classList);
content2.classList.add('error');
content2.classList.remove('error');
content2.classList.add('success');
const paras4 = document.querySelectorAll('p');
paras4.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
    if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});
const title4 = document.querySelector('.title');
title4.classList.toggle('test');
title4.classList.toggle('test');
