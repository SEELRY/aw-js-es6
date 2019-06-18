/**
 * spread operator 展开运算符
 * 更快，更便捷的操作数组
 * 
 */


// function addNumbers(numbers){
//     return numbers.reduce((sum,number) => {
//         return sum + number;
//     },0)
// }

// const numbers = [1,2,3,4,5];
// console.log(addNumbers(numbers));




// function addNumbers(a,b,c,d,e) {
//     var numbers = [a,b,c,d,e];
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0)
// }

// console.log(addNumbers(1,2,3,4,5));



// //展开运算符
//     function addNumbers(...numbers) {
//         return numbers.reduce((sum, number) => {
//             return sum + number;
//         }, 0)
//     }

//     console.log(addNumbers(1, 2, 3, 4, 5));


// //可用来替代push方法
//     var defaultColors = ["red","greed"];
//     var favoriteColors = ["orange","yellow"];
    
//     // //concat
//     // defaultColors = defaultColors.concat(favoriteColors);
//     // console.log(defaultColors);

//     //
//     console.log([...defaultColors,...favoriteColors]);



// //练习
//     function validateShoppingList(...items){
//         if(items.indexOf("milk") < 0){
//             return ["milk",...items];
//         }
//         return items;
//     }
//     console.log(validateShoppingList("orange","bread","eggs"));