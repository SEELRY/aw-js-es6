//遍历数组

    // var colors = ["red","blue","green"];

    // //ES5遍历数组的方法
    // for(var i=0; i<colors.length; i++){
    //     console.log(colors[i]);
    // }

    // //ES6 forEach
    // colors.forEach(function(color){
    //     console.log(color);
    // });

    // colors.forEach((color) => {
    //     console.log(color);
    // })




    // //练习：遍历数组中的值，并计算总和
    // var numbers = [1,2,3,4,5];
    // var sum = 0;
    // numbers.forEach((number) => {
    //     sum += number;
    // })
    // console.log(sum);


    // var numbers = [1,2,3,4,5];
    // var sum = 0;
    // function adder(number){
    //     sum += number;
    // }
    // numbers.forEach(adder);  //没有调用函数，只是将函数放进去
    // console.log(sum);






//数组方法

    /**场景1
     * 
     * 假定有一个数值数组（A），将A数组中的值以双倍的形式放到B数组
     */

    //  var numbers = [1,2,3];
    //  var doubleNumbers = [];

    //  //ES5
    //  for(var i=0; i<numbers.length; i++){
    //     //  doubleNumbers += numbers[i]*2;  //错误示范，变成了string
    //     doubleNumbers.push(numbers[i]*2);
    //  }
    //  //  console.log(doubleNumbers);
    //  for(var j=0; j<numbers.length; j++){
    //      console.log(doubleNumbers[j]);
    //  }

    
    // //es6 map
    // var doubled = numbers.map((number) => {
    //     return number * 2;
    // });
    // // console.log(doubled);

    // doubled.forEach((number) => {
    //     console.log(number);
    // });


    /**场景2
     *
     * 假定有一个对象数组（A）,将A数组中对象某个属性的值存储到B数组中
     */

     var cars = [
         {model:"Buick",price:"cheap"},
         {model:"BMW",price:"expensive"}
     ];

     var prices = cars.map((car) => {
         return car.price;
     });
     console.log(prices);
