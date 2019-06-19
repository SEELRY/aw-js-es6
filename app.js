/**
 * generator生成器
 * 可以返回多次的函数
 * 
 */


    // function* numbers(){
    //     yield;
    // }
    // const gen = numbers();

    // console.log(gen.next());
    // console.log(gen.next());


    //斐波那契数列
    //[0,1,1,2,3,5,8...]

    // // 方法1
    // function fib(max){
    //     var a = 0, b = 1 , arr = [0,1];
    //     while(arr.length < max){
    //         [a,b] = [b,a+b];
    //         arr.push(b);
    //     }
    //     return arr;
    // }
    // console.log(fib(5));

    // // 方法2
    // function* fib(max){
    //     var a = 0, b = 1, n=0;
    //     while (n < max) {
    //         yield a;
    //         [a,b] = [b,a+b];
    //         n++;
    //     }
    //     return;
    // }
    // // let f = fib(5);
    
    // // console.log(f.next());
    // // console.log(f.next());
    // // console.log(f.next());
    // // console.log(f.next());
    // // console.log(f.next());
    // // console.log(f.next());

    // for(var x of fib(10)){
    //     console.log(x);
    // }




    


//generator生成器的原理

    // //迭代器还原生成器的结构
    // function nameIterator(names){
    //     let nextIndex = 0;
    //     return{
    //         next:function(){
    //             return nextIndex < names.length ? 
    //             {value:names[nextIndex++],done:false} :
    //             {value:undefined, done:true}
    //         }
    //     }
    // }
    // const nameArray = ["Henry","Bucky","Emily"];

    // const names = nameIterator(nameArray);
    // console.log(names.next());
    // console.log(names.next());
    // console.log(names.next());
    // console.log(names.next());


    // //generator生成器
    // function* sayNames(){
    //     yield 'Henry';
    //     yield 'Bucky';
    //     yield 'Emily';
    // }

    // const name = sayNames();
    // console.log(name.next());


    //id自增（es 生成器）
    function* createIds(){
        let index = 1;

        while(true){
            yield index++;
        }
    }
    const gen = createIds();

    // console.log(gen.next().value);

    for(var i=0; i<10; i++){
        console.log(gen.next().value);
    }

