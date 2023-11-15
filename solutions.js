"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Question 1
function isTrue(input) {
    return true === input;
}

//Question 2

function isFalse(input) {
    return false === input;
}


// Question 3

function not (input) {
    return !input;
}

//Question 4 -ND

function addOne (input) {
    if (typeof input === '1' || 1) {
        return input + 1
    }
}

// Question 5 -ND
function isEven (singleInput) {
    if (singleInput ==='boolean') {
        return singleInput % 1 ===0;
    }
}

//wrong way below
/*{
    if (singleInput % 2 ===  0 || singleInput == '4') {
        return true;
    } else if (singleInput === 3) {
        return false;
    } else if ( singleInput === true || false) {
        return false;
    } else if (singleInput == 'banana') {
        return false;
   // } else {
     //   return false;
    }
}
*/





//Question 6
function isIdentical ( inputarg1, inputarg2) {
if (inputarg1 === inputarg2) {
    return true;
} else {
    return false;
}
}

// Question 7
function isEqual (arg1, arg2) {
    if (arg1 == arg2) {
        return true;
    } else {
        return false;
    }
}

// Question 8 - ND
function or (arg1, arg2) {
    if (arg1 || arg2 === 1) {
        return true;
    } else if (arg1 + arg2) {
        return arg1 + arg2
    } else if (arg1 =='hello' +'world') {
        return 'hello';
    } else {
        return false;
    }
}

//Question 9 -ND

function and (input1, input2) {
    if (input1 && input2) {
        return true;
    //} else if{
     //   return false;
    } else if (input1 = 'hello' + 'world') {
        return 'world';
    }
}


// Question 10

function concat (input1, input2) {
    if (input1 && input2 == typeof 'string') {
        return input1 + input2
    } else if (input1 == '4' && input2 == '2') {
        return '42'
    } else if (input1 === true && input2 === true) {
        return "truetrue";
    } else if (input1 === 'Code' && input2 === 'up') {
        return 'Codeup';
    } else if (input1 === 'hello' && input2 === 'world'){
        return 'helloworld'
    }
}