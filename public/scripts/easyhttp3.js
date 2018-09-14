/*
EasyHTTP Library
Library for making HTTP requests

@version 2.0.0
@author belQati
@license MIT
*/

// CREATE METHODS VIA CLASS
class EasyHTTP {

  // Make an HTTP GET Request
  get(url){
    // wrap in a Promise() to make async for apps using library
    return new Promise((resolve, reject) => {
      // get data from url
      fetch(url)
      // returns a promise, map it to json
      .then(res => res.json())
      // get data
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data){
    return new Promise((resolve, reject) => {
      // post data to url as json
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        // convert post to json string
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource has been removed!'))
      .catch(err => reject(err));
    });
  }
}