const firstName = 'Song';
const lastName = 'YeSuel';
const age = 22;
const str = 'Hello there my name is YeSuel'
const tags = 'web design. web development, programming'

let val;

//Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Song ';
val += 'HannSuel';

val = 'Hell, my name is' + firstName + 'and I am' + age;

//Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);
// = concatenation

// change case
val = firstName.toUpperCase(); // make Capital letter all
val = firstName.toLowerCase();  // make small letter all

val = firstName[2]; // n

// indexOf() _ 해당문자에 대한 index
val = firstName.indexOf('n'); // 해당 문자 중 젤 앞에꺼
val = lastName.lastIndexOf('e');    // 해당 문자중 젤 뒤에꺼
// 해당 문자가 없으면 음수값 return

// charAt()
val = firstName.charAt('2');    // 해당 번째에 대한 문자 출력
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,2);
// (a,b) a부터 b이내의 문자 출력. 

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3); // 뒤부터 가능(substring과 차이점)

// split()
val = str.split(' ');
// 인자를 기준으로 나눠서, 배열로 바꿔줌. 각 요소를 볼 수 있음.
val = tags.split(',');

// replace()
val = str.replace('YeSuel', 'Kim');
// (a,b) a를 b로 바꿔줌.

// includes()
val = str.includes('Hello'); 
// 해당 문자가 포함되어있는지 확인가능.
// true = 포함, false = 비포함.


console.log(val);