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

    //  var post = {id:4,title:"Jaascript"};
    //  var comments = [
    //      {postId:4,content:"Angular4"},
    //      {postId:2,content:"Vue.js"},
    //      {postId:3,content:"Node.js"},
    //      {postId:4,content:"React.js"}
    //  ];

    //  function commentsForPost(post,comments){
    //     return comments.filter((comment) => {
    //         return comment.postId == post.id;
    //     });
    //  }
    //  console.log(commentsForPost(post,comments));




// 数组方法(find)

    /**场景1
     * 
     * 假定有一个对象数组(A)，找到符合条件的对象
     */

    // var users = [
    //     {name:"Jill",id:1},
    //     {name:"Alex",id:2},
    //     {name:"Bill",id:3},
    //     {name:"Alex",id:4}
    // ];

    // // es5
    // var user;
    // for(var i=0; i<users.length; i++){
    //     if(users[i].name === "Alex"){
    //         user = users[i];
    //         break;
    //     }
    // }
    // console.log(user);

    // //es6 find
    // //好处是找到第一个后就不会继续执行后面的对象，节省效率
    // user = users.find((u) => {
    //     return u.name === "Alex";
    // });
    // console.log(user);


    /**场景2
     * 
     * 假定有一个对象数组(A)，根据指定对象的条件找到数组中符合条件的对象
     */

    //  var posts = [
    //      {id:1,title:"Node.js"},
    //      {id:2,title:"React.js"}
    //  ];

    //  var comment = {postId:1,content:"Hello World!"};

    //  function postForComment(posts,comment){
    //     return posts.find((post) => {
    //         return post.id === comment.postId;
    //     });
    //  }
    //  console.log(postForComment(posts,comment));





//数组方法(every  some)

    /**场景1
     * 
     * 计算对象数组中每个电脑的操作系统是否可用，
     * 大于16位操作系统表示可用，否则不可用
     */

    /**说明：
     * every:有假即假
     * some:有真即真
     */
    
    // var computers = [
    //     {name:"Apple",ram:16},
    //     {name:"IBM",ram:4},
    //     {name:"Acer",ram:32},
    // ];

    // //es5
    // var everyComputerCanRunProgram = true;
    // var someComputerCanRunProgram = false;

    // for(var i=0; i<computers.length; i++){
    //     var computer = computers[i];
    //     if(computer.ram < 16){
    //         everyComputerCanRunProgram = false;
    //     }else{
    //         someComputerCanRunProgram = true;
    //     }
    // }
    // console.log(everyComputerCanRunProgram);
    // console.log(someComputerCanRunProgram);
    

    // //es6
    // var every = computers.every((computer) => {
    //     return computer.ram > 16;
    // });
    // console.log(every);

    // var some = computers.some((computer) => {
    //     return computer.ram > 16;
    // });
    // console.log(some);


    /**场景2
     * 
     * 假定有一个注册页面，判断所有input内容的长度是否大于0
     */

    function Field(value){
        this.value = value;
    }

    Field.prototype.validate = function(){
        return this.value.length > 0;
    }


    var username = new Field("Arthur");
    var telephone = new Field("18899955666");
    var password = new Field("123456")
    // console.log(username.validate());
    // console.log(telephone.validate());
    // console.log(password.validate());

    console.log(username.validate() && telephone.validate() && password.validate());

    var fields = [username,telephone,password];
    var formIsValid = fields.every((field) => {
        return field.validate();
    });
    console.log(formIsValid);

    if(formIsValid){
        //注册成功！
    }else{
        //给用户错误提醒
    }









