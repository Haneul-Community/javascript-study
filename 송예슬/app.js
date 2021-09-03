// SECTION 7 : Asynchronous JavaScript, Ajax & Fetch API

// 59 : XHR OBject Methods & Working =====================
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Creatate an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN :
    xhr.open('GET', 'data.txt', true); // type of Request, file, for asynchronous .
    // get은 읽고 싶은 rile or URL 를 요청.

    // already at stage 4.
    xhr.onload = function(){
        // 우리가 가져온 data로 부터 하고싶은 것을 할 수 있음.
        // status = 200인지 체크해야함. '.' HTP에서 200 뜻이 OK. 
        if(this.status === 200) {
        // this : XHR object를 의미, status 속성을 가짐. 
            console.log(this.responseText);
        }
    }    

    xhr.onreadystatechange = function() {
        if(this.status == 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }

    xhr.send();

    // readyState Values
    //0 : request not initialized
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished and response is ready.

    // HTTP Statses
     // 200 : OK
     // 403 : Forbidden
     // 404 : Not Found

}
