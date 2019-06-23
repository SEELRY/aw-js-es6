/**
 * 数据结构：set
 * 集合：可以存储任何数据类型，并且是唯一的（不重复的值）
 * 
 */

const set1 = new Set();

//向set1中添加数据
set1.add(100);
set1.add("A String");
set1.add({name:"Henry"});
set1.add(true);
set1.add(100); //无作用，不可以重复添加

console.log(set1);

//向set2中添加数据
const set2 = new Set([1,true,'string']);
console.log(set2);

// 计算set1中的数据个数
console.log(set1.size);

//检查set中是否拥有对应的值
console.log(set1.has(100));
console.log(set1.has(50*2));  //可以用计算的形式
console.log(set1.has({name:"Henry"})); //false
console.log({name:"Henry"} === {name:"Henry"}); //匹配的不是内容，是地址

//删除set中的内容
set1.delete(100);
console.log(set1);

//for..of 遍历set
for(let item of set1){
    console.log(item);
}

//forEach遍历
set1.forEach((value) => {
    console.log(value);
});

//将set转化为array
const setArray = Array.from(set1);
console.log(setArray);