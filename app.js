/**
 * 函数参数默认值
 * 优化代码
 * 
 * 
 */

// function makeAjaxRequest(url,method){
//     if(!method){
//         method = "GET";
//     }
//     return method;
// }


// function makeAjaxRequest(url,method = "GET"){
//     return method;
// }

// console.log(makeAjaxRequest("google.com"));
// console.log(makeAjaxRequest("google.com","POST"));





// function User(id){
//     this.id = id;
// }
// // console.log(new User(1));

// function randomId(){
//     return Math.round(Math.random() * 9);
// }
// // console.log(new User(randomId()));

// function createAdminUser(user){
//     user.admin = true;
//     return user;
// }

// console.log(createAdminUser(new User(randomId())));





function User(id) {
    this.id = id;
}
// console.log(new User(1));

function randomId() {
    return Math.round(Math.random() * 9);
}
// console.log(new User(randomId()));

function createAdminUser(user = new User(randomId())) {
    user.admin = true;
    return user;
}

const user = new User(1);   

console.log(createAdminUser(user))  //传递参数默认值则显示参数默认值
console.log(createAdminUser());     //不传参数默认值则不显示
