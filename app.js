// var let const

// var a = "Test1";
// let b = "Test2";

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }
// testVar(); //50  50

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }
// testLet(); //50  30



// {
//     let b = 100;
// }
// console.log(b);  //b is not defined


//使用场景

// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i); //10

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i); // i is not defined



// const 常量

// const x = 10;
// x = 100; //Assignment to constant variable.

const colors = ["red","blue","green"];
colors.push("yellow");
console.log(colors);
