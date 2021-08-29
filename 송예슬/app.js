// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert : 창에 메세지로 뜸
// alert('Hello world');

// Prompt : 메세지 창으로 입력을 받음. 
// const input = prompt();
// alert(input);

// Confirm : 메세지 창으로 확인/취소 응답을 받음
//  if(confirm('Are you sure')){
//     console.log('Yes');
// } else {
//     console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect : 해당 페이지로 이동
//window.location.href = 'http://google.com';
// Reload 
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);