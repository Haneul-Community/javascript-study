// FUNCTION DECLARATIONS ---------------------------------

function greet (firstName = 'Song', lastName = 'YeSeul'){
//    console.log('Hello'); // 함수만 호출하면 입력됨
    return 'Hello' + firstName + ' ' + lastName;
}
// return하는 함수는 console.log으로 감싸줘야함.
// default로 매개변수 지정 가능. 

 console.log(greet())

// FUNCTION EXPRESSIONS -----------------------------------

const square = function (x=3) {
    return x*x;
};

console.log(square());

// IMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs ------
// 정의하는 순간 실행되는 함수. 

(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('Hello ' + name);
})('Suel');

// PROPERTY METHODS ------------------------------------------
// object안에 function이 있을 때 : method

// define inside object
const todo = {
    add : function(){
        console.log('Add todo...');
    },
    edit : function(id){
        console.log(`Edit todo ${id}` );
    }
}

// define outside.
todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();