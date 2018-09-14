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

// GET single post
http.get('https://jsonplaceholder.typicode.com/posts/12', function(err, posts){
  // handle response
  if(err){
    console.log(err, 'Oops, something went wrong!');
  } else {
    console.log(posts);
  }
});

// data for creating POST
let data = {
  title: 'Posting a Post',
  body: 'This is the post body.'
}

// Create a POST with data
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update an existing post with data
http.put('https://jsonplaceholder.typicode.com/posts/12', data, function(err, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});

// DELETE Post
http.delete('https://jsonplaceholder.typicode.com/posts/10', function(err, response){
  // handle response
  if(err){
    console.log(err, 'Oops, something went wrong!');
  } else {
    console.log(response);
  }
});