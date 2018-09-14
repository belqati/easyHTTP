// instantiate easyhttpES6.js
const http = new EasyHTTP;

// GET users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));