let val;

const today = new Date();

// Date 설정
let birthday = new Date('4-9-2000 12:30:00');
birthday = new Date ('April 9 2000');
birthday = new Date ('4/9/2000');

// Date 일부만 가져오기
val = today.getMonth(); // Month는 0부터 시작.
val = today.getDate();
val = today.getDay(); // 요일. 0=월?
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// 설정한 date 변경
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1989);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(10);

console.log(birthday);