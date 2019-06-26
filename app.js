const http = new EasyHttp;

// //请求数据
// http.get("http://jsonplaceholder.typicode.com/users")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))


//传输数据
const dataValue = {
name:"Henry",
username:"Arthur",
email:"wang@xunnn.com"
};

// //post
// http.post("http://jsonplaceholder.typicode.com/users",dataValue)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// //update user
// http.put("http://jsonplaceholder.typicode.com/users/2", dataValue)
//     .then(dataValue => console.log(dataValue))
//     .catch(err => console.log(err));

//delete user
http.delete("http://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .catch(err => console.log(err));