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

// 7-64. Custom HTTP Library

const http = new easyHTTP;

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

// Creat Data
const data = {
    title : 'Custom Post',
    body : 'This is a custom post'
};

//Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

// Update Post : 왜 계속 에러나는지 모르겠음. 
http.put('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
            if(err){
                console.log(err);
            } else {
                console.log(post);
            }
    });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
    function(err, response) {
        if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});  
