// SECTION 5 : Object Oriented Javascript - ES5 & ES2015
// 44: Constructors & 'this' keyworld ============================

//Person constructor : 하나보단 여러개로 정의할 때
// function Person(name,dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const brad = new Person('Brad', 30);
// const john = new Person('John', 32);

// console.log(john.age);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());

// 5-45 Built in Constructors

// //String
// const name1 = 'Jeff';
// const name2 = new String('Jeff'); // 객체로. 

// //name2.foo = 'bar'; // 객체에 속성 추가 가능.
// // console.log(name2);

// console.log(typeof name2); // object

// // => 조건을 쓸때 ===는 안되지만, ==는 됨.
// if(name2 === 'Jeff'){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// // Number ----------------
// const num1 = 5;
// const num2 = new Number(5); // object. not number.

// // Boolean ---------------
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function -----------------
// const getSum1 = function(x,y){
//     return x + y ;
// }

// const getSum2 = new Function('x','y', 'return 1+1'); // 3rd : function body

// // 뭐가 달라서 설명한건지? 어쩌라는건지 모르겠음.

// //Object ---- : 딱히 다른거 x
// const john1 = {name : "John"};
// const john2 = new Object({name : "John"});
// console.log(john2);

// // Arrays ---- : 딱히 다른거 x
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+'); // 같은 결과가 나오려면 표현이 좀 다름.

// console.log(re2);

// 5-46 Prototypes =======================================

// Object.prototype
// Person.prototype

// Person constructor
// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// // Calculate age (어떤 사람이든 다 똑같이 들어가므로 prototype으로 뺄 것임)
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMaried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(john.calculateAge()); // constructor에 있는 것처럼 동작. 

// console.log(mary.getFullName()); 

// mary.getsMaried('Smith');

// console.log(mary.getFullName());
// // prototype function을 정의함으로써 constructor가 넘치지 않게. 

// console.log(mary.hasOwnProperty('firstName')); // true
// console.log(mary.hasOwnProperty('getFullName')); // false. cause prototype is not property. 

// 5-47, Prototypal Ingeritance =============================

//Person constructor
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`; 
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// //Customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
// // QQQQQQQQQQQQQQQ : 왜 처음 인자로 this를 받는지.

//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit Person prototype methos
// Customer.prototype = Object.create(Person.prototype);
// // Inherit하지 않으면 다른 constructer의 prototype 사용불가. 

// // Make customer.protoype return Customer()
// Customer.prototype.constructor = Customer;
// // for using customer constructor. QQQQQQQQQ. 이렇게 안쓰면 덧남?

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// // Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}
//     wel come to our company`; 
// }

// console.log(customer1);
// console.log(customer1.greeting());

// 5-48. Using Object.creat =============================================
// const personPrototypes = {
//     greeting : function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson')

// console.log(mary);

// const brad = Object.create(personPrototypes, {
//     firstName : {value:'Brad'},
//     lastName: {value: 'Traversy'},
//     age : {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());

// 5-49.ES6 Classes ================================

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
//     // class 안에 추가한 method -> prototype에 추가됨. 

//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getIUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }

//     static addNumbers(x,y){
//         return x+y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Thompson');

// console.log(mary);
// // console.log(mary.addNumbers(1,2)); // error -> ',' addNumbers != func. it's static method.
// console.log(Person.addNumbers(1,2)); // to use static method, use actual class name. 

// static method : object를 설명?선언?없이 쓸 수 있음. 

// 5-50. Sub Classes ==================================
// inheritance in 6 classes = subclasses

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting(){
//         return `Hello there ${this.firstName} ${this.lastName}`;  
//     }
// }

// // extend class . customer is subclass of Person.
// class Customer extends Person{
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName); // to call from PEerson. parent class constructor
        
//         this.phone = phone;
//         this.membership = membership;
//     }
    
//     static getMembershipCost(){
//         return 500;
//     }
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// console.log(john);
// console.log(john.greeting()); // extend했으므로 customer class에 greeting 함수가 없어도 사용 가능. 

// console.log(Customer.getMembershipCost(); // customer 자체의 함수 생성 가능
// // console.log(Person.getMembershipCost());// error : person -> customer (0) but customer -> person (X)
