

/**
 * Class
 * 万物皆对象
 * 
 */

    // // es5
    // function Car(options){
    //     this.title = options.title;
    // }

    // Car.prototype.drive = function(){
    //     return this.title + " Vroom";
    // }

    // const car = new Car({title:"BMW"});
    // console.log(car.title);
    // console.log(car.drive());


    // //继承
    // function Toyota(options){
    //     Car.call(this,options);
    //     this.color = options.color;
    // }

    // Toyota.prototype = Object.create(Car.prototype);
    // Toyota.prototype.constructor = Toyota;

    // const toyota = new Toyota({color:"red",title:"Focus"});
    // console.log(toyota);
    // console.log(toyota.title);
    // console.log(toyota.drive());


    // es6
    class Car{
        constructor(options){
            this.title = options.title;
        }
        drive(){
            return this.title + ' Vroom';
        }
    }
    const car = new Car({title:"BMW"});
    console.log(car);
    console.log(car.drive());

    class Toyota extends Car{
        constructor(options){
            super(options);
            this.color = options.color;
        }
    }
    const toyota = new Toyota({color:"red",title:"Focus"});
    console.log(toyota);
    console.log(toyota.drive());

















