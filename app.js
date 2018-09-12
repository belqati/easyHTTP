// instantiate XHR via easyHTTP.js
const http = new easyHTTP;

// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
  // handle response
  if(err){
    console.log(err, 'Oops, something went wrong!');
  } else {
    console.log(posts);
  }
});