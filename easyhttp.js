function easyHTTP(){
  // instantiate XHR
  this.http = new XMLHttpRequest();
}

// CREATE PROTOTYPE METHODS
// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
  // async get request
  this.http.open('GET', url, true);
  // create this var for out-of-scope function
  let self = this;
  this.http.onload = function(){
    // this.http is out of scope in function, use self variable
    if(self.http.status === 200){
      // use callback for async response
      // include error handling via null for app.js
      // console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      // error handling library side
      callback('Error: ' + self.http.status);
    }
  }
  // send the GET request
  this.http.send();
}

// Make an HTTP POST Request


// Make an HTTP PUT Request


// Make an HTTP DELETE Request
