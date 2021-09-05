/**
 * 
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 */

class EasyHTTP { // xhr object가 필요없으므로 constructor를 쓸필요 x
 // Make an HTTP GET Request
    get(url){
        return new Promise( (resolve, reject) => {
       fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
 }


 // Make an HTTP Post Request

    post(url, data){
         return new Promise( (resolve, reject) => {
        fetch(url, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
         });
    }


 // Make an HTTP PUT Request
    put(url, data){
         return new Promise( (resolve, reject) => {
     fetch(url, {
         method : 'PUT',
         headers : {
             'Content-type' : 'application/json'
         },
        body : JSON.stringify(data)
     })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
      });
  }

    // Make an HTTP DELETE Request
    delete(url){
         return new Promise( (resolve, reject) => {
     fetch(url, {
         method : 'DELETE',
         headers : {
             'Content-type' : 'application/json'
         }
       })
      .then(res => res.json())
      .then(data => resolve('Resource Deleted ...'))
      .catch(err => reject(err));
      });
  }

}