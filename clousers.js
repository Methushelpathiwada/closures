//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// output:- 1,2,3,4 'in alert'

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// output:- 1,0

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
//   output:- 3

// Write a code to calculate area of a rectangle using inner function. 
// In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function outer(length){
//     function inner(breadth){
//         console.log(length*breadth);
//     }
//     inner(7)
// }
// outer(10)

// output:- 70

// Take a variable in outer function and create an inner function to increase the counter every time it is called

// let of=function outer(){
//     let increase=0
//     function inner(){
//     return increase++;}
// }
// let result=outer();
// console.log(result());
// console.log(result());
// console.log(result());

// "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();
// output:- 12("in popup window")

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// output:-12("showing in alert box")

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);
// output:-outerArg = 123
//         innerArg = 456
//         outerVar = a
//         innerVar = b
//         globalVar = xyz