
function Stoplight(color) {
    this.color = color; //I didn't do this either
    return this; //I didn't do this
};

Stoplight.prototype.change = function () {
    if (this.yellow()) { // if the color is yellow 
        this.color = 'red';
    } else if (this.red()) { // if the color is red
        this.color = 'green';
    } else if (this.green()) { //i f the color is green
        this.color = 'yellow';
    }
    /* This is how i had it on my own */

    // if (this.color === red) {
    //     return this.color === green;
    // }
    // if (this.color === green) {
    //     return this.color === yellow;
    // }
    // if (this.color === yellow) {
    //     return this.color === red;
    // }
};

Stoplight.prototype.red = function () {
    return (this.color === 'red');
    /* I was using this before, but that'll never be the case... */
    
    // if (red === true) { 
    //     return true;
    // } else {
    //     return false;
    // }
};

Stoplight.prototype.yellow = function () {
    return (this.color === 'yellow');
    // if (yellow === true) {
    //     return true;
    // } else {
    //     return false;
    // }
};

Stoplight.prototype.green = function () {
    return (this.color === 'green');
    // if (green === true) {
    //     return true;
    // } else {
    //     return false;
    // }
};

let stoplight = new Stoplight('red');
stoplight.change();
console.log(stoplight.yellow()); //false
console.log(stoplight.green()); // true
stoplight.change();
console.log(stoplight.yellow()); //true
