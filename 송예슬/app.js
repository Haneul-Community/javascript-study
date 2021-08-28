// // Form 
// if (something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value & type
// if (id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value & type
// if (id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// //Test if undefined : id가 undefined 일때 조건문 안에 넣어야 error 발생 x
// if (typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID')
// }


// GREATER Or LESS THAN
//  if (id >= 100){
//      console.log(`The ID is ${id}`);
//  } else {
//      console.log('No ID')
//  }

// IF ELSE

const color = 'red';

// if (color === 'red'){
//     console.log('Color is red');
// } else if (color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// Logical operations 

const name = 'Song';
const age = '20';

// And : &&
if (age >0 && age <12) {
    console.log(`${name} is a child`);
} else if (age >=13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// Or : ||

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// WITHOUT BRACES : {}없이 들여쓰기로도 가능. 