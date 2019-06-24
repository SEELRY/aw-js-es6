/**
 * 构造函数：Promise
 * 钩子函数
 * 
 */

// let promise = new Promise();
// console.log(promise);   //报错，not a function




// let promise = new Promise((resolve,reject) => {
//     resolve();
//     // reject();
// });
// // console.log(promise);

// promise
// .then(() => {console.log("成功，没有任何问题")})
// .then(() => {console.log("可以，无限调用多个then方法")})
// .catch(() => {console.log("出现错误！")});




/**
 * fetch方法
 */

// console.log(window);
// console.log(fetch);

// http://jsonplaceholder.typicode.com/
let url = "http://jsonplaceholder.typicode.com/posts";

// console.log(fetch(url));
fetch(url)
    // .then(data => {console.log(data)});
    .then(response => response.json())  //解析成json
    .then(data => console.log(data))
    .catch(err => console.log(err));


