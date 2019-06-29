
function vowelsAndConsonants(s) {
    [...s].map(c => c.match(/[aeiou]/i) ? console.log(c) : c).forEach(c => c && console.log(c));
  }

  console.log(vowelsAndConsonants('lskdjfkljsd'))


  //2 exercise

let re = new RegExp(/^([aeiou])(\w+)\1$/gm);

//3 exercise

function reverseString(s) {
    try {
        //s = [...s].reverse().join('');
        s = s.split('').reverse().join('');

    } catch (e) {
        console.log(e.message)
    } finally {
        console.log(s);
    }
    }

//4 exercise

function isPositive(a) {
    if (a > 0) { return "YES" };
    throw Error(a ? "Negative Error" : "Zero Error");
}

//5
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    const PI = Math.PI;
    const r = parseFloat(readLine());

    console.log(PI * (r ** 2));
    console.log(2 * PI * r);
    // Print the perimeter of the circle:

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
//6
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function () {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

//7

function getGrade(score) {
    let grade;
    // Write your code here
    return String.fromCharCode(70 - (Math.floor(score / 5))); 


    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

//'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // start my writting
    if (s.match(/^[aeiou]/)) {
        letter = "A";
    } else if (s.match(/^[bcdfg]/)) {
        letter = "B";
    } else if (s.match(/^[hjklm]/)) {
        letter = "C";
    } else {
        letter = "D";
    }
    // end my writting
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}