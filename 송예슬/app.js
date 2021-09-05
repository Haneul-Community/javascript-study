// SECTION 7 : Asynchronous JavaScript, Ajax & Fetch API

// 59 : XHR OBject Methods & Working =====================
// document.getElementById('button').addEventListener('click', loadData);

// function loadData(){
//     // Creatate an XHR Object
//     const xhr = new XMLHttpRequest();

//     // OPEN :
//     xhr.open('GET', 'data.txt', true); // type of Request, file, for asynchronous .
//     // get은 읽고 싶은 rile or URL 를 요청.

//     // where is our state?
//     // console.log('READYSTATE', xhr.readyState); // 1
    
//     // Optional - Used for spinners/loaders : data를 loading or fetching하고 있는걸 display하고 싶을 때 -> state 3.
//     xhr.onprogress = function(){
//         console.log('READYSTATE', xhr.readyState);
//     }

//     // already at stage 4.
//     xhr.onload = function(){
//         // 우리가 가져온 data로 부터 하고싶은 것을 할 수 있음.
//         // status = 200인지 체크해야함. '.' HTP에서 200 뜻이 OK. 
//         console.log('READYSTATE', xhr.readyState); // state check
//         if(this.status === 200) {
//         // this : XHR object를 의미, status 속성을 가짐. 
//             // console.log(this.responseText);
//             // 받은 파일 웹에 표시하기 (html에)
//             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//         }
//     }    

//     // 무언가를 하기 전에, state 4에 있는걸 확인해야함. 
//     // xhr.onreadystatechange = function() { // 우리가 있는 state를 알 수 있음. (onready~)
//     //    console.log('READYSTATE', xhr.readyState);
//     //     if(this.status == 200 && this.readyState === 4){
//     //         console.log(this.responseText);
//     //     }
//     // }

//         // error가 있을 때 실행됨.
//     xhr.onerror = function(){
//         console.log('Request Error...');
//     }

//     xhr.send();

//     // readyState Values
//     //0 : request not initialized
//     //1: server connection established
//     //2: request received
//     //3: processing request
//     //4: request finished and response is ready.

//     // HTTP Statses
//      // 200 : OK
//      // 403 : Forbidden
//      // 404 : Not Found

// }

// 7-60. Working with Ajax & JSON ============================
// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load single customers
// function loadCustomer(e){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);
            
//             const customer = JSON.parse(this.responseText); // string. customer I.D나 name을 받을 수 없으므로 JSON으로 parse.
        
//             const output = `
//             <ul>
//                 <li>ID : ${customer.id}</li>
//                 <li>Name : ${customer.name}</li>
//                 <li>Company : ${customer.company}</li>
//                 <li>Phone : ${customer.phone}</li>
//             </ul>`;

//             // want to put it into browser
//             document.getElementById('customer').innerHTML = output;

//         }
//     }

//     xhr.send();
// }

// // Load customers 
// function loadCustomers(e){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customers.json', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);
            
//             const customers = JSON.parse(this.responseText); // string. customer I.D나 name을 받을 수 없으므로 JSON으로 parse.
            
//             let output = '';

//             customers.forEach(function(customer){
//             output += `
//             <ul>
//                 <li>ID : ${customer.id}</li>
//                 <li>Name : ${customer.name}</li>
//                 <li>Company : ${customer.company}</li>
//                 <li>Phone : ${customer.phone}</li>
//             </ul>`;                
//             });
            

//             // want to put it into browser
//             document.getElementById('customers').innerHTML = output;

//         }
//     }

//     xhr.send();
// }

// 7-61. Data From Ajax (External API)

// Get from API -------------------------------------------------------
// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e){
//    const number = document.querySelector('input[type = "number"]').value;
   
//    console.log(number);

//     // create object
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
//     xhr.onload = function() {
//         if(this.status === 200) { // this means xhr object
//             const response = JSON.parse(this.responseText); // JSON string을 object로 바꾸고 싶음. ('.' )
//             // putting it inside of dorm ----------------------------------------

//             let output = '';

//             if (response.type === 'success'){
//                 response.value.forEach(function(joke){ // +value -> '.'resposne is object. has type & value.
//                     output += `<li>${joke.joke}</li>`;
//                 }) 
//             } else {
//                 output += '<li>Something went wrong</li>';
//             }

//             document.querySelector('.jokes').innerHTML = output;
//         }
//     }


//     xhr.send();
//     // to prevent default behavior 
//     e.preventDefault();

// }

// 62 : REST APIs & HTTP request ====================================

// API: messenger 
// rest : use HTTP request to format that message

// HTTP Request

// GET: data를 회수함. from specified resource
// POST : submit data
// Put : Update specified resource
// DELETE: delete.value

// HEAD : get이랑 비슷하지만, not return body
// OPTIONS : supported HTTP methods를 return.
// PATCH : Update partial resources. put이랑 비슷하지만 main에 focus슷

// API Endpoints ----------------------
// GET : https://someurl.com/api/users  -> Get all users
//       http://someurl.com/api/users/1 -> Get single user
// POST : http://someurl.com/api/users  -> Add user
// PUT : http://someurl.com/api/users/1 -> Update user
// DELETE : http://someurl.com/api/users/1 -> Delete user

// 63. Callback Functions ============================== 함수안에서 함수를 부르는.

// const posts = [
//     {title : 'Post One', body: 'This is post one'}, 
//     {title : 'Post Two', body: 'This is post two'}, 
// ];

// // synchronous -------------------------- 동시발생
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);    // 2 seconds
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })생
//         document.body.innerHTML = output;
//     },1000); // 1seconds
// }

// // create post & get post after that. 
// createPost({title: "Post Three", body : 'This is post three'});

// getPosts();
// ==> 만들어지는 동안 get해버려서 2개만 post. 

// asynchronous -------------------- 한개씩 발생

// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();  // 추가된 부분. call getPosts를 여기에.
//     }, 2000);    // 2 seconds
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000); // 1seconds
// }

// createPost({title: "Post Three", body : 'This is post three'}, getPosts);

// 7-64,65 Custom HTTP Library ==========================================

// const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
//     function(err, posts) {
// if(err){
//     console.log(err);
// } else {
//     console.log(posts);
// }

//     });

// // Get Single post 
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
//     function(err, posts) {
// if(err){
//     console.log(err);
// } else {
//     console.log(posts);
// }

//     });

// // Creat Data
// const data = {
//     title : 'Custom Post',
//     body : 'This is a custom post'
// };

// //Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// // Update Post : 왜 계속 에러나는지 모르겠음. 
// http.put('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(post);
//             }
//     });

// // Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', 
//     function(err, response) {
//         if(err){
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });  

// 7-66, ES6 Promises ==================================================
// const posts = [
//     {title : 'Post One', body : 'This is post one'},
//     {title: 'Post Two', body : 'This is post two'}
// ];

// function createPost(post){
//     return new Promise(function(resolve, reject){ // resolve : 실행하거나 완료됬을 때 call하고 싶을 때, reject : throw하고싶은 error을 call하고 싶을 때. 
//         setTimeout(function(){
//             posts.push(post);

//             const error = true;

//             if(!error){
//                 resolve();
//             } else {
//                 reject('Error : Something went wrong');
//             }
//             resolve();  // callback 
//         }, 2000);
//     });
// }

// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title : 'Post Three', body : 'This is post three'})
// .then(getPosts)
// .catch(function(err){   // catch부분이 없으면 uncaught in promise. 
//    console.log(err); 
// });

// 7-67, Fetch API
// document.getElementById('button1').addEventListener('click', getText);

// document.getElementById('button2').addEventListener('click', getJson);

// document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
// function getText(){
//     fetch('test.txt')
//         .then(function(res){
//             return res.text();
//         })
//         .then(function(data) {
//             console.log(data);
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// }

// // Get local json data
// function getJson(){
//     fetch('poth.json')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function(post) {
//                 output += `<li>${post.title}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// }

// // Get from external API
// function getExternal(){
//     fetch('https://api.github.com/users')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function(user) {
//                 output += `<li>${user.login}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// }

// 7-69 Arrow Functions ==========================================

// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line function does not need braces 
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//     return 'Hello';
// }

// Return object
// const sayHello = () => ({msg : 'Hello'}); // => body. 

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple arams need parenthesis_()
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
    // return name.length;
// });

// Shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

// Fetch API using allow function --------------------------------
// document.getElementById('button1').addEventListener('click', getText);

// document.getElementById('button2').addEventListener('click', getJson);

// document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
// function getText(){
//     fetch('test.txt')
//         .then(res => res.text())
//         .then(data => {
//             console.log(data);
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(err => console.log(err));
// }

// // Get local json data
// function getJson(){
//     fetch('poth.json')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             let output = '';
//             data.forEach(function(post) {
//                 output += `<li>${post.title}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(err => console.log(err));
// }

// // Get from external API
// function getExternal(){
//     fetch('https://api.github.com/users')
//         .then(res =>res.json())
//         .then(data => {
//             console.log(data);
//             let output = '';
//             data.forEach(function(user) {
//                 output += `<li>${user.login}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(err => console.log(err));
// }

// 7-70. Custom HTTP Library ==============================================
// const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// // User Data
// const data = {
//     name : 'John Doe',
//     username : 'johndoe',
//     email : 'jdoe@gmail.com'
// }

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// // Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

//  // Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// 7-71. Async & Await ===========================================
// async function myfunc(){     // asyn을 추가함으로써 promise 를 return하게끔.
//     const promise = new Promise( (resolve, reject) => {
//         setTimeout( () => resolve('Hello'), 1000);
//     });

//     const error = true;

//     if(!error){
//         const res = await promise; // Wait until promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myfunc()
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

// Using FETCH - base case to use this async await.

// async function getUsers(){
//     // await response of the fetch call
//     const response = await fetch
//     ('https://jsonplaceholder.typicode.com/users');

//     // Only proceed once its resolved
//     const data = await response.json();
//     // only proceed once second promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users));

// 7-72. Custom HTTP Library (Fetch with ...)
const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// User Data
const data = {
    name : 'John Doe',
    username : 'johndoe',
    email : 'jdoe@gmail.com'
}

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// // Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

//  // Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
 .then(data => console.log(data))
 .catch(err => console.log(err));
