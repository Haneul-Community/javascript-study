// 3-23 Document Object =============================================
// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// console.log(val);

// 3-24, Dom selectors for single element ====================================

//document.getElementById()
// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

//Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style = "color:red"> Task List </span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(even)').style.background = '#ccc'; // even 중 젤 첫번째꺼만 적용됨
// document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4'; // odd 중 젤 첫번째꺼만 됨.

// 3-25 : Dom Selectors for Multiple element ===========================

// document.getElementsMyClassName ------------------------

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//document.getElementsByTagName : 위와 같은 역할.. ----------------
//  let lis = document.getElementsByTagName('li');
//  console.log(lis);
//  console.log(lis[0]);
//  lis[0].style.color = 'red';
//  lis[3].textContent = 'Hello';

// Conver HTML Collection into array -------------------
// lis = Array.from(lis);

// lis.reverse();

// // 각각 요소에 대해.
// lis.forEach(function(li,index){
//     console.log(li.className);
//     li.textContent = `${index} : Hello` ;
// });

// console.log(lis);

// document.querySelectorAll ------------------
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// // 홀,짝에 해당되는 모두 변경 가능.
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li,index){
//     li.style.background = '#ccc';
// });

// for(let i=0; i<liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// 3-26. Traversing DOM ======================================

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// //Get child nodes 
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // nodeType number means
// // 1 : Element
// // 2 : Attribute 
// // 3 : Text node
// // 8 : Comment
// // 9 : Document itself
// // 10 : Doctype

// //Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// //Children of children
// list.children[3].children[0].ud = 'test-link';
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// //Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);

// 3-27, Creating Elements =================================

// Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// 3-28, Removing & Replacing Elements =========================

// REPLACE ELEMENT ---------------------------------------

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT ------------------------
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTR ----------------------------
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0]
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// link.removeAttribute('title');
// val = link;

// console.log(val);

// 3-29 Event Listeners & Event Object? ==========================

// doocument.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello world');

//     e.preventDefault();
// });

// 위와 같은 결과
// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     //console.log('Clicked');

//     let val;

//     val = e;

//     // Event tartget element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//    // e.target.innerText = 'Hello';

//    // Event type
//    val = e.type;

//    //Timestamp
//    val = e.timeStamp;

//    // Coords event relative to the window : 해당 위치.
//    val = e.clientY;
//    val = e.clientX;

//     console.log(val);
// }

// 3-30 Mouse Event ========================================

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

//Click
// clearBtn.addEventListener('click', runEvent);
// //Doubleclick
// clearBtn.addEventListener('dbclick', runEvent);
// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// //Mouseenter
// card.addEventListener('mouseenter', runEvent);
// //Mouseleave
// card.addEventListener('mouseleave', runEvent);
// // Mouseover : 주변?까지
// card.addEventListener('mouseover', runEvent);
// // Mouseout : 주변?까지
// card.addEventListener('mouseout', runEvent);
// Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE : : ${e.type}`);

// 마우스 커서에 따른 배경색 변경
//     heading.textContent = `MouseX: ${e.offsetX} MouseY : ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// 3-31 Keyboard & Input Events ================================
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown : 하나하나 칠때마다.
// taskInput.addEventListener('keydown', runEvent);
// Keyup : 끝까지 치고 나서. 
//taskInput.addEventListener('keyup', runEvent);
// Keypress : 키를 누를 때 마다
//taskInput.addEventListener('keypress', runEvent);
// Focus : 입력창에 마우스로 클릭하면.
// taskInput.addEventListener('focus', runEvent);
// Blur : 입력창에 마우스를 클릭햇다가, 다른곳을 클릭하면
// taskInput.addEventListener('blur', runEvent);
// Cut : 입력창에서 잘라내기
// taskInput.addEventListener('cut', runEvent);
// Paste : 입력창에 붙여놓기
// taskInput.addEventListener('paste', runEvent);
// Input : 입력창에 input을 받을 때.
// taskInput.addEventListener('input', runEvent);
// Change : 변경을 완료할때 마다.
// select.addEventListener('change', runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

   // console.log(e.target.value);

    // heading.innerTet = e.target.value;
    // Get input value
    //console.log(taskInput.value);

   //e.preventDefault();
// }

// 3-32 Event Bubbling & Delegation ================================

// EVENT BUBBLING : 직접적으로 해당되는걸 클릭하지 않았는데도 발생. 

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// EVNET DELGATION

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);
// function deleteItem(){
//     console.log('delete item');
// }
// 위의 경우에는 첫번째꺼만 됨. 

document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     if (e.target.parentElement.className === 'delete-item secondary-content'){
//         console.log('delete item');
//     }
// }
//  위의 경우에는 모두 다 됨. but className이 완전히 일치해야만 작동. 

function deleteItem(e){
         if (e.target.parentElement.classList.contains('delete-item')){
             console.log('delete item');
             e.target.parentElement.parentElement.remove(); // 실제로 UI에서 지워짐. 
         }
     }

// 이 경우는 저 말만 포함이 되기만 하면 작동. => to target 하기 가장 좋은 방법.

// 3-33 'Local & Session Storage ===========================================

// 저장한 것들을 JSON String Afie로 바꿔야함. 그리고 꺼내 쓸때는 Jason method를 거쳐야.
// store local storage on set item & store key name and a value

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '20');
// browser을 껏다 켜도 저장되있음

// set session storage item 
// sessionStorage.setItem('name','Beth');
// browser을 껏다키면 reset됨. <-> local. 

// remove from storage
//localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage all
// localStorage.clear();

// console.log(name, age);


// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;
//     localStorage.setItem('task', task);
//     alert('Task saved');

//     e.preventDefault();
// })

// 위 경우, 하나의 값만 저장함. 다른 값을 저장하면 replace됨. ->sol) array로 만든후 string으로 저장.

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
        // '.' str이 될 것이므로, JSON이나 우리가 쓸수있는 object로 바꿔야함.
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks)); // string으로 보내져야 하므로.
    alert('Task saved');

    e.preventDefault(); 
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});