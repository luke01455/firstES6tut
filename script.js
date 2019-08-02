// Lecture: let and const

// ES5

/*
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);

// ES6

const name6 = 'Jane Smith'
let age6 = 23;
age6 = 24;

name6 = 'Jane Miller'
console.log(name6);
console.log(age6);
*/

// ES5
/*
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName)
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth +
    ' is now officially allowed to drive a car.');
};

// ES6

driversLicence5(true);
//console.log(yearOfBirth);
    let firstName;
    const yearOfBirth = 1990;

function driversLicence6(passedTest) {
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth +
    ' is now officially allowed to drive a car.');
};
*/

/*
driversLicence6(true);


let i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);
*/


/////////////////
// Lecture: Blocks and IIFE's

//ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a, b)
console.log(c);

// ES5
(function() {
    var c = 3;
})();

console.log(c);
*/

// Lecture : Strings:

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
   return  2016 - year;
}

//ES5

console.log('this is ' + firstName + ' ' + lastName + ' he was born in ' + yearOfBirth + ' and now today he is ' + calcAge(yearOfBirth) + ' years old');

// ES6
console.log(`This is 
${firstName} ${lastName} he was born in 
${yearOfBirth} and now today he is 
${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

// Lecture: Arrow Functions 

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016-el}.`)
console.log(ages6);

ages6 = years.map((el, index) => {
const now = new Date().getFullYear();
const age = now - el;
return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

// Lecture: Arrow function 2

// ES5 
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();
*/

// ES6

/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}
box6.clickMe();
*/

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}
box66.clickMe();
*/

/*
function Person(name) {
    this.name = name;
}
*/
// ES5
/*
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el)
    {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el =>
        `${this.name} is friends with ${el}`
    );

    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
*/

////////////////////////////////////////////////
// Lecture: Destructuring

// ES5

//var john  = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6

/*
const John = [name, age] = ['John', 26];
console.log(name);
console.log(age);
console.log(John);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};


const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
console.log(obj);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
console.log(obj);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


git commit -m "destructuring, aka splitting an array into idividual variables"
*/

///////////////////////////////
/// Lecture: Array ES6

// const boxes = document.querySelectorAll('.box');

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

// ES6
/*
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
// ES5 
/*
for (var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
       //break;
    }
    boxesArr5[i].textContent = 'I changed to blue!';

}
*/

// ES6
/*
for (const el of boxesArr6) {
    if (el.className.includes('blue')) {
        continue;
    }
    el.textContent = 'I changed to blue!';
}
*/


// ES5 
/*
var ages = [12, 17, 8, 21, 14, 11];


var full = ages.map(function(el) {
    return el >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);




// ES6

console.log(ages.findIndex(el => el >= 18));
console.log(ages.find(el => el >= 18));
*/

//////////////////////////////////////
// Lecture: Spread Operator

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6 

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anne'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];

console.log(bigFamily);

//nodelist (querySelectorAll)

const h = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');

const allTexts = [h, ...boxes2];

Array.from(allTexts).forEach( el => el.style.color = 'white');

*/

///////////////////////////////
// Lecture: Rest parameters

// ES5
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(el) {
        console.log((2016 - el) >= 18);
    });
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach((el) => {
        console.log((2016 - el >= 18));
    });
}

isFullAge6(1990, 1999, 1965, 2016, 1977);
*/

/*
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(el) {
        console.log((2016 - el) >= limit);
    });
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach((el) => {
        console.log((2016 - el >= limit));
    });
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1977);
*/




















