// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array : Array[a] = b. a번째에 b 추가
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// //MUTATING ARRAYS
//     // Add on to end
//     numbers.push(250);
//     // Add on to front
//     numbers.unshift(120);
//     // Take off from end
//     numbers.pop();
//     // Take off from front
//     numbers.shift();
//     //Splice values : (a,b)까지 내용 없앰
//     numbers.splice(1,3); //[43,44,36,5]
//     // Reverse
//     numbers.reverse();

// Concatenate array : 해당 Array에 인자 Array를 더함.
//val = numbers.concat(numbers2);

// Sorting arrays
// val = fruit.sort();
// val = numbers.sort(); // Q? -> ASCII 문자 순서대로 정렬됨. 

// // Use the "compare function" : 오름차순 (작->큰)
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Reverse sort : 내림차순 (큰->작)
//  val = numbers.sort(function(x,y){
//     return y-x;
// });

// Find : 인수에 해당되는 제일 첫번째 함수 return 
function over50(num){
    return num > 50;
}

val = numbers.find(over50);

console.log(fruit);
console.log(numbers);
console.log(val);