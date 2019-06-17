//遍历数组 forEach

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






//数组方法 map

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

    //  var cars = [
    //      {model:"Buick",price:"cheap"},
    //      {model:"BMW",price:"expensive"}
    //  ];

    //  var prices = cars.map((car) => {
    //      return car.price;
    //  });
    //  console.log(prices);





//数组方法 filter

    /**场景1
     * 
     * 假定有一个对象数组（A）,获取数组中指定类型的对象放到B数组中
     */

    //  var products = [
    //      {name:"cucumber",type:"vegetable"},
    //      {name:"banana",type:"fruit"},
    //      {name:"celery",type:"vegetable"},
    //      {name:"orange",type:"fruit"}
    //  ];

    //  //es5
    //  var filteredProducts = [];
    //  for(var i=0; i<products.length; i++){
    //      if(products[i].type === "fruit"){
    //          filteredProducts.push(products[i]);
    //      }
    //  }
    //  console.log(filteredProducts);


    // //es6 filter
    // var filteredProducts = products.filter((product) => {
    //     return product.type === "fruit";
    // });
    // console.log(filteredProducts);



    /**场景2
     * 
     * 假定有一个对象数组（A）,过滤掉不满足以下条件的对象
     * 条件：蔬菜，数量大于0，价格小于10
     */

    //  var products = [
    //      {name:"cucumber",type:"vegetable",quantity:0,price:1},
    //      {name:"banana",type:"fruit",quantity:10,price:16},
    //      {name:"celery",type:"vegetable",quantity:30,price:8},
    //      {name:"orange",type:"fruit",quantity:3,price:6}
    //  ];

    //  products = products.filter((product) => {
    //      return product.type === "vegetable"
    //      && product.quantity > 0
    //      && product.price < 10;
    //  });

    //  console.log(products);


    /**场景3
     * 
     * 假定有两个数组（A,B），根据A中id值，过滤掉B数组不符合的数据
     */

     var post = {id:4,title:"Jaascript"};
     var comments = [
         {postId:4,content:"Angular4"},
         {postId:2,content:"Vue.js"},
         {postId:3,content:"Node.js"},
         {postId:4,content:"React.js"}
     ];

     function commentsForPost(post,comments){
        return comments.filter((comment) => {
            return comment.postId == post.id;
        });
     }
     console.log(commentsForPost(post,comments));

