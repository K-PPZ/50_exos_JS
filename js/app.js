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
let result_exo14 = [];
for (let i = 0; i <= 10; i++) {
    if (i <= 1) {
        result_exo14.push(i);
    } else {
        result_exo14.push(result_exo14[i-2] + result_exo14[i-1]);
    }
}
console.log("Exo14: \n" + result_exo14);

// Exo15 : Create a function that will find the nth Fibonacci number using recursion.
function Exo_15 (num) {
    let result_exo15 = [];
    for (let i = 0; i <= 10; i++) {
        if (i <= 1) {
            result_exo15.push(i);
        } else {
            result_exo15.push(result_exo15[i-2] + result_exo15[i-1]);
        }
    }
    return result_exo15[num];
}
console.log("Exo15: \n" + Exo_15(10));

// Exo16 : Create a function that will return a Boolean specifying if a number is prime.
function Exo_16 (num) {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }
    return flag;
}
console.log("Exo16: \n" + Exo_16(11));

// Exo17 : Calculate the sum of digits of a positive integer number.
let result_exo17 = 0;
let num_exo17 = 12;
let tmp_exo17 = num_exo17.toString();
for (let i = 0; i < tmp_exo17.length; i++) {
    result_exo17 += parseInt(tmp_exo17[i]);
}
console.log("Exo17: \n" + result_exo17);

// Exo18 : Print the first 100 prime numbers.
function Exo_18 (num) {
    // let flag = true;
    // let prime_exo18 = "";

    //     for (let i = 2; i < num; i++) {
    //         if (num % i === 0) {
    //             flag = false;
    //             num ++;
    //             i = 2;
    //         } else if (flag && num < 100) {
    //             prime_exo18 += num + " ";
    //             num ++;
    //             i = 2;
    //         }
    //     }

    // return prime_exo18;
}
console.log("Exo18: \n" + Exo_18(3));

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
function Exo_30 (num1, num2) {
    let result_exo30 = "";
    result_exo30 = parseInt(num1) + parseInt(num2);
    return result_exo30.toString();
}
console.log("Exo30: \n" + Exo_30("10", "15"));

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
function Exo_32 (str) {
    let tmp_exo32 = "";
    let result_exo32 = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            tmp_exo32 = tmp_exo32[0].toUpperCase() + tmp_exo32.slice(1);
            result_exo32 += tmp_exo32 + " ";
            tmp_exo32 = "";
        } else if (i == str.length-1) {
            tmp_exo32 += str[i];
            tmp_exo32 = tmp_exo32[0].toUpperCase() + tmp_exo32.slice(1);
            result_exo32 += tmp_exo32;
        } else {
            tmp_exo32 += str[i];
        }
    }
    return result_exo32;
}
console.log("Exo32: \n" + Exo_32("bonjour hello"));

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
function Exo_35 (str) {
    let t_exo35 = [[], []];
    let num_exo35 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ";") {
            num_exo35 += 1;
        } else {
            t_exo35[num_exo35].push(str[i]);
        }
    }
    return t_exo35;
}
console.log("Exo35: \n" + Exo_35("bonjour;hello"));

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
let str_exo39 = "ABC";
let traductor_exo39;
let result_exo39 = "";
for (let i = 0; i < str_exo39.length; i++) {
    if (str_exo39[i].charCodeAt()+3 == 91) {
        traductor_exo39 = 62;
        result_exo39 += String.fromCodePoint(traductor_exo39+3);
    } else if (str_exo39[i].charCodeAt()+3 == 92) {
        traductor_exo39 = 63;
        result_exo39 += String.fromCodePoint(traductor_exo39+3);
    } else if (str_exo39[i].charCodeAt()+3 == 93) {
        traductor_exo39 = 64;
        result_exo39 += String.fromCodePoint(traductor_exo39+3);
    } else {
        traductor_exo39 = str_exo39[i].charCodeAt()+3;
        result_exo39 += String.fromCodePoint(traductor_exo39);
    }
}
console.log("Exo39: \n" + result_exo39);

// Exo40 : Implement the bubble sort algorithm for an array of numbers.
let t_exo40 = [8, 1, 74, 3, 12];
for (let i = t_exo40.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (t_exo40[j + 1] < t_exo40[j]) {
          let temp = t_exo40[j + 1];
          t_exo40[j + 1] = t_exo40[j];
          t_exo40[j] = temp;
        }
    }
}
console.log("Exo40: \n" + t_exo40);

// Exo41 : Create a function to calculate the distance between two points defined by their x, y coordinates.
function Exo_41 (x, y) {
    if (x > y) {
        return x - y;
    } else {
        return y - x;
    }
}
console.log("Exo41: \n" + Exo_41(0, 100));

// Exo42 : Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting.


// Exo43 : Create a function that will receive a bi-dimensional array as argument and anumber and will extract as a unidimensional array the column specified by the number.
function Exo_43 (t, num) {
    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t[i].length; j++) {
            if (j == num) {
                t[i][j] = "";
            }
        }
    }
    return t;
}
console.log("Exo43: \n" + Exo_43([[1, 2, 3], [4, 5, 6]], 2));

// Exo44 : Create a function that will convert a string containing a binary number into a number.


// Exo45 : Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels).


// Exo46 : Find the maximum number in a jagged array of numbers or array of numbers.
function Exo_46 (t) {
    let best_exo46 = t[0];
    for (let i = 1; i < t.length; i++) {
        if (t[i] > best_exo46) {
            best_exo46 = t[i];
        }
    }
    return best_exo46;
}
console.log("Exo46: \n" + Exo_46([1, 8, 3, 9, 4]));

// Exo47 : Deep copy a jagged array with numbers or other arrays in a new array.
let result_exo47 = [];
let t_exo47 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < t_exo47.length; i++) {
    for (let y = 0; y < t_exo47[i].length; y++) {
        result_exo47.push(t_exo47[i][y]);
    }
}
console.log("Exo47: \n" + result_exo47);

// Exo48 : Create a function to return the longest word in a string.
function Exo_48 (str) {
    let words_exo48 = [];
    let tmp_exo48 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " " || i == str.length-1) {
            tmp_exo48 += str[i];
            words_exo48.push(tmp_exo48);
            tmp_exo48 = "";
        } else {
            tmp_exo48 += str[i];
        }
    }

    let best_exo48 = words_exo48[0];
    for (let i = 1; i < words_exo48.length; i++) {
        if (words_exo48[i].length > best_exo48.length) {
            best_exo48 = words_exo48[i];
        }
    }
    return best_exo48;
}
console.log("Exo48: \n" + Exo_48("bbbb hello a ff"));

// Exo49 : Shuffle an array of strings.
let t_exo49 = ["hello", "bonjour", "good"];
let result_exo49 = [];
for (let i = 0; result_exo49.length < t_exo49.length; i++) {
    let random_exo49 = t_exo49[Math.floor(Math.random() * (t_exo49.length - 0)) + 0];
    if (!result_exo49.includes(random_exo49)) {
        result_exo49.push(random_exo49);   
    } else {
        random_exo49 = t_exo49[Math.floor(Math.random() * (t_exo49.length - 0)) + 0];
    }
}
console.log("Exo49: \n" + result_exo49);

// Exo50 : Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function Exo_50 (n) {
    let t_exo50 = [];
    for (let i = 0; t_exo50.length < n; i++) {
        let num_exo50 = Math.floor(Math.random() * (n - 0)) + 0;
        if (!t_exo50.includes(num_exo50)) {
            t_exo50.push(num_exo50);
        }
    }
    return t_exo50;
}
console.log("Exo50: \n" + Exo_50(5));

// Exo51 : Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.


// Exo52 : Calculate Fibonacci(500) with high precision (all digits).
function Exo_52 (num) {
    let result_exo52 = [];
    for (let i = 0; i <= num; i++) {
        if (i <= 1) {
            result_exo52.push(i);
        } else {
            result_exo52.push(result_exo52[i-2] + result_exo52[i-1]);
        }
    }
    return result_exo52;
}
console.log("Exo52: \n" + Exo_52(500));

// Exo53 : Calculate 70! with high precision (all digits).