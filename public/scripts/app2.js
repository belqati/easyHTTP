// instantiate easyhttpES6.js
const http = new EasyHTTP;

// GET Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: 'Jane Janis',
  username: 'jj',
  email: 'jjanis@emory.edu'
}

// Create User
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update User
http.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/9')
  .then(data => console.log(data))
  .catch(err => console.log(err));

