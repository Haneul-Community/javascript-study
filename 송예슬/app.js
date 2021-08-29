// Global Scope
var a = 1;
let b = 2;
const c = 3;

// // FUNCTION TEST : function 안에 있는 변수는 거기서만 유효. 
//  function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

// test();

// IF : var만 global 변수에 영향을 줌. 
// if(true){
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If scope: ', a,b,c);
// }

// FOR : var만 global 변수에 영향을 줌. 
// for (var a=0; a<10; a++){
//     console.log(`Loop : ${a}`);
// }

console.log('Global Scope: ', a,b,c);