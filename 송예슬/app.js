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
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load single customers
function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            
            const customer = JSON.parse(this.responseText); // string. customer I.D나 name을 받을 수 없으므로 JSON으로 parse.
        
            const output = `
            <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>`;

            // want to put it into browser
            document.getElementById('customer').innerHTML = output;

        }
    }

    xhr.send();
}

// Load customers 
function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            
            const customers = JSON.parse(this.responseText); // string. customer I.D나 name을 받을 수 없으므로 JSON으로 parse.
            
            let output = '';

            customers.forEach(function(customer){
            output += `
            <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>`;                
            });
            

            // want to put it into browser
            document.getElementById('customers').innerHTML = output;

        }
    }

    xhr.send();
}