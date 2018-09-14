/*
EasyHTTP Library
Library for making HTTP requests

@version 2.0.0
@author belQati
@license MIT
*/

// CREATE PROTOTYPE METHODS via classes
class EasyHTTP {
  // Make an HTTP GET Request
  get(url){
    // wrap in a Promise() to make async for apps using library
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
}