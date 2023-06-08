// Exo1 : Print numbers from 1 to 10.
let result_exo1 = "";
for (let i = 1; i <= 10; i++) {
    result_exo1 += i + " ";
}
console.log("Exo1: \n" + result_exo1);

// Exo2 : Print the odd numbers less than 100.
let result_exo2 = "";
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        result_exo2 += i + " ";
    }
}
console.log("Exo2: \n" + result_exo2);

// Exo3 : Print the multiplication table with 7.
let result_exo3 = "";
for (let i = 0; i <= 10; i++) {
    result_exo3 += i + "*" + 7 + "=" + i*7 + " ";
}
console.log("Exo3: \n" + result_exo3);

// Exo4 : Print all the multiplication tables with numbers from 1 to 10.
let result_exo4 = "";
let num = 1;
for (let i = 0; i <= 10; i++) {
    result_exo4 += i + "*" + num + "=" + i*num + " ";
    if (num < 10 && i == 10) {
        i = 0;
        num++;
        result_exo4 += "\n\n";
    }
}
console.log("Exo4: \n" + result_exo4);

// Exo5 : Calculate the sum of numbers from 1 to 10.
let result_exo5 = 0;
for (let i = 1; i <= 10; i++) {
    result_exo5 += i;
}
console.log("Exo5: \n" + result_exo5);

// Exo6 : Calculate 10!
let result_exo6 = 1;
for (let i = 1; i <= 10; i++) {
    result_exo6 *= i;
}
console.log("Exo6: \n" + result_exo6);

// Exo7 : Calculate the sum of even numbers greater than 10 and less than 30.
let result_exo7 = 0;
for (let i = 10; i <= 30; i++) {
    result_exo7 += i;
}
console.log("Exo7: \n" + result_exo7);

// Exo8 : Create a function that will convert from Celsius to Fahrenheit.
function Exo_8 (celsius) {
    return (celsius * 9/5) + 32 + "°F";
}
console.log("Exo8: \n" + Exo_8(30));

// Exo9 : Create a function that will convert from Fahrenheit to Celsius.
function Exo_9 (fahrenheit) {
    return (fahrenheit - 32) * 5/9 + "°C";
}
console.log("Exo9: \n" + Exo_9(86));

// Exo10 : Calculate the sum of numbers in an array of numbers.
let result_exo10 = 0;
let t_exo10 = [1, 3, 5];
for (let i = 0; i < t_exo10.length; i++) {
    result_exo10 += t_exo10[i];
}
console.log("Exo10: \n" + result_exo10);

// Exo11 : Calculate the average of the numbers in an array of numbers.
let result_exo11 = 0;
let t_exo11 = [1, 3, 5];
for (let i = 0; i < t_exo11.length; i++) {
    result_exo11 += t_exo11[i];
}
console.log("Exo11: \n" + result_exo11/t_exo11.length);

// Exo12 : Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers.
let result_exo12 = [];
function Exo_12 (t_exo12) {
    for (let i = 0; i < t_exo12.length; i++) {
        if (t_exo12[i] > 0) {
            result_exo12.push(t_exo12[i]);
        }
    }
    return result_exo12;
}
console.log("Exo12: \n" + Exo_12([1, -5, -8, 7, 6, -4]));

// Exo13 : Find the maximum number in an array of numbers.
let t_exo13 = [5, 7, 3, 9, 1];
let result_exo13 = t_exo13[0];
for (let i = 1; i < t_exo13.length; i++) {
    if (t_exo13[i] > result_exo13) {
        result_exo13 = t_exo13[i];
    }
}
console.log("Exo13: \n" + result_exo13);

// Exo14 : Print the first 10 Fibonacci numbers without recursion.


// Exo15 : Create a function that will find the nth Fibonacci number using recursion.


// Exo16 : Create a function that will return a Boolean specifying if a number is prime.
function Exo_16 (num) {
    // return num % (num-1) == 0 || num % (num-1) == 0;
}
console.log("Exo16: \n" + Exo_16(0));

// Exo17 : Calculate the sum of digits of a positive integer number.


// Exo18 : Print the first 100 prime numbers.


// Exo19 : Create a function that will return in an array the first “p” prime numbers greater than “n”.


// Exo20 : Rotate an array to the left 1 position.
let result_exo20 = [];
let t_exo20 = [5, 7, 3, 9, 1];
result_exo20.push(t_exo20[t_exo20.length-1]);
for (let i = 0; i < t_exo20.length-1; i++) {
    result_exo20.push(t_exo20[i]);
}
console.log("Exo20: \n" + result_exo20);

// Exo21 : Rotate an array to the right 1 position.
let result_exo21 = [];
let t_exo21 = [5, 7, 3, 9, 1];
for (let i = 1; i < t_exo21.length; i++) {
    result_exo21.push(t_exo21[i]);
    if (i == t_exo21.length-1) {
        result_exo21.push(t_exo21[0]);
    }
}
console.log("Exo21: \n" + result_exo21);

// Exo22 : Reverse an array.
let result_exo22 = [];
let t_exo22 = [5, 7, 3, 9, 1];
for (let i = t_exo22.length-1; i >= 0; i--) {
    result_exo22.push(t_exo22[i]);
}
console.log("Exo22: \n" + result_exo22);

// Exo23 : Reverse a string.
let result_exo23 = "";
let str_exo23 = "12345";
for (let i = str_exo23.length-1; i >= 0; i--) {
    result_exo23 += str_exo23[i];
}
console.log("Exo23: \n" + result_exo23);

// Exo24 : Create a function that will merge two arrays and return the result as a new array.
function Exo_24 (first_tab, second_tab) {
    let t_exo24 = [];
    t_exo24.push(first_tab, second_tab);
    return t_exo24;
}
console.log("Exo24: \n" + Exo_24([1, 2, 3], [4, 5, 6]));

// Exo25 : Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both.
function Exo_25 (first_tab, second_tab) {
    let t_exo25 = [];
    for (let i = 0; i < first_tab.length; i++) {
        if (!second_tab.includes(first_tab[i])) {
            t_exo25.push(first_tab[i]);
        }
    }

    for (let i = 0; i < second_tab.length; i++) {
        if (!first_tab.includes(second_tab[i])) {
            t_exo25.push(second_tab[i]);
        }
    }
    return t_exo25;
}
console.log("Exo25: \n" + Exo_25([1, 2, 3, 4, 5], [1, 0, 4, 5, 6]));

// Exo26 : Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
function Exo_26 (first_tab, second_tab) {
    let t_exo26 = [];
    for (let i = 0; i < first_tab.length; i++) {
        if (!second_tab.includes(first_tab[i])) {
            t_exo26.push(first_tab[i]);
        }
    }
    return t_exo26;
}
console.log("Exo26: \n" + Exo_26([1, 2, 3, 4, 5], [1, 0, 4, 5, 6]));


// Exo27 : Create a function that will receive an array of numbers as argument and will return a new array with distinct elements.
function Exo_27 (tab) {
    let t_exo27 = [];
    for (let i = 0; i < tab.length; i++) {
        for (let y = i+1; y < tab.length; y++) {
            if (tab[i] == tab[y]) {
                t_exo27.push(tab[i]);
                break;
            }
        }
    }
    return t_exo27;
}
console.log("Exo27: \n" + Exo_27([1, 5, 9, 7, 4, 2, 7, 6, 2]));

// Exo28 : Calculate the sum of first 100 prime numbers and return them in an array.


// Exo29 : Print the distance between the first 100 prime numbers.


// Exo30 : Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


// Exo31 : Create a function that will return the number of words in a text.
function Exo_31 (str) {
    let result_exo31 = 0;
    for (let i = 0; i < str.length; i++) {
        result_exo31++;
    }
    return result_exo31;
}
console.log("Exo31: \n" + Exo_31("bonjour"));

// Exo32 : Create a function that will capitalize the first letter of each word in a text.


// Exo33 : Calculate the sum of numbers received in a comma delimited string.
let result_exo33 = 0;
let str_exo33 = "152";
for (let i = 0; i < str_exo33.length; i++) {
    result_exo33 += parseInt(str_exo33[i]);
}
console.log("Exo33: \n" + result_exo33);

// Exo34 : Create a function that returns an array with words inside a text.
function Exo_34 (str) {
    return str.split("");
}
console.log("Exo34: \n" + Exo_34("bonjour"));

// Exo35 : Create a function to convert a CSV text to a “bi-dimensional” array.
// function Exo_35 (params) {
    
// }

// Exo36 : Create a function that converts a string to an array of characters.
function Exo_36 (t) {
    for (let i = 0; i < t.length; i++) {
        t[i] = t[i].split("");
    }
    return t;
}
console.log("Exo36: \n" + Exo_36(["bonjour", "hello"]));

// Exo37 : Create a function that will convert a string in an array containing the ASCII codes of each character.
function Exo_37 (str) {
    let result_exo37 = str.split("");
    for (let i = 0; i < str.length; i++) {
        result_exo37[i] = result_exo37[i].charCodeAt();
    }
    return result_exo37;
}
console.log("Exo37: \n" + Exo_37("bonjour"));

// Exo38 : Create a function that will convert an array containing ASCII codes in a string.
function Exo_38 (t) {
    let result_exo38 = "";
    for (let i = 0; i < t.length; i++) {
        result_exo38 += String.fromCodePoint(t[i]);
    }
    return result_exo38;
}
console.log("Exo38: \n" + Exo_38(["98", "111", "110", "106", "111", "117", "114"]));

// Exo39 : Implement the Caesar cypher.


// Exo40 : Implement the bubble sort algorithm for an array of numbers.
let t_exo40 = [8, 1, 74, 3, 12];
let tmp_exo40 = t_exo40[0];
for (let i = 1; i < t_exo40.length; i++) {
    if (tmp_exo40 > t_exo40[i]) {
        console.log(tmp_exo40);
        t_exo40[i] = tmp_exo40;
        tmp_exo40 = t_exo40[i];
        console.log(tmp_exo40);
        t_exo40[i] = tmp_exo40;
    }
}
console.log("Exo40: \n" + t_exo40);