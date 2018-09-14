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
easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  // specify content type in the http header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // convert data as JS object to JSON string
  this.http.send(JSON.stringify(data))
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  // specify content type in the http header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // convert data as JS object to JSON string
  this.http.send(JSON.stringify(data))
}


// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function(){

    if(self.http.status === 200){
      callback(null, 'Post deleted!');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}