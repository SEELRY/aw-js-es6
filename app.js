/**
 * 箭头函数
 * 1.缩减代码
 * 2.改变this指向
 */


//  //es5
//  const double = function(number){
//     return number * 2;
//  }
//  console.log(double(20));

// // es6
// const double = (number) => {
//     return number * 2;
// }
// console.log(double(20));

// const double = (number) => number * 2;  //去掉return
// console.log(double(20));


// //map一个数组，让数组中的值以double形式展示
// const numbers = [1,2,3];
// var newNumbers = numbers.map((number) => {
//     return number * 2;
// });
// console.log(newNumbers);





//改变this指向

    // es5
    const team = {
        members:["Henry","Elyse"],
        teamName:"es5",
        teamSummary:function(){
            let _this = this;
            return this.members.map(function(member){
                return `${member}隶属于${_this.teamName}小组`;
            });
        }
    }
    console.log(team.teamSummary());


    // es5_2
    const team1 = {
        members: ["Henry", "Elyse"],
        teamName: "es5_2",
        teamSummary: function () {
            return this.members.map(function (member) {
                return `${member}隶属于${this.teamName}小组`;
            }.bind(this));
        }
    }
    console.log(team1.teamSummary());



    // es6
    //使用箭头函数则不会出现undefined，会指向最接近的一个上级对象
    const team3 = {
        members: ["Henry", "Elyse"],
        teamName: "6",
        teamSummary: function () {
            return this.members.map((member) => {
                return `${member}隶属于${this.teamName}小组`;
            });
        }
    }
    console.log(team3.teamSummary());