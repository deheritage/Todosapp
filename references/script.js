// // function multiplyFunction (a, b) {
// //     return a * b;
// // }
// // const x = multiplyFunction(4, 3);
// // console.log(x);


// // const multi = (a, b) => {
// // return a * b;
// // }
// // const y = multi(4, 3);
// // console.log(y);


// // function addFunction (a, b) {
// //     return a + b;
// // }
// // const z = addFunction (4, 3);
// // console.log(z);


// // const add = (a, b) => {
// //  return a + b;
// // }
// // const a = add(4, 3);

// // console.log(a);


// // function subtractFunction (a, b) {
// //     return a - b;
// // }
// // const b = subtractFunction (4, 3);

// // console.log(b);


// // const subtract = (a, b) => {
// //     return a - b;
// // }

// // const c = subtract (4, 3);

// // console.log(c);


// // function divisionFunction (a, b) {
// //     return a / b;

// // }
// // const d = divisionFunction (4, 3);

// // console.log(d);


// // const division = (a, b) => {
// // return a / b;
// // }
// // const e = division (4, 3);

// // console.log(e);



// // const materials = [
// //     'Hydrogen',
// //     'Helium',
// //     'Lithium',
// //     'Beryllium'
// // ];

// // console.log(materials.map(material => material.length));


// // function myFunction (num) {
// //     return num * 10;

// // }
// // const numbers = [65, 44, 12, 4];
// // const newArr = numbers.map(myFunction);

// // console.log(newArr);


// // const multii = (num) => {
// //     return num *10;

// // }
// // const number = [65,44,12,4];
// // const newArrr = number.map(multii);
// // console.log(newArrr);


// let g = [1, 2, 3];
// let h = g;
// h = [];
// console.log(g);

// // let array1 = ['a', 'b', 'c', 'd'];
// // let array2 = array1;
// // array1 = [];
// // console.log(array1);
// // console.log(array2);


// // create an empty calculator array
// const calculator = [];
// console.log("calculator 1", calculator);


// // create a function to add item to calculator
// const addCal = (cal) => {
// return calculator.push(cal);
// }


// // add an item to calculator
// addCal('banana');
// console.log("calculator 2", calculator);
// addCal('Mango');
// console.log("calculator 3", calculator);
// addCal('Orange');
// console.log("calculator 4", calculator);
// addCal('Kiwi');
// console.log("calculator 5", calculator); 

// // create a function to remove an item
// const remCal = (cal) => {
// return calculator.slice(cal);

// }

// // // remove an item from calculator
// const rvm1 = remCal(1);
// console.log("calculator 6", rvm1);

// // addCal('Guava');
// // console.log("calculator 7", calculator);





let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);