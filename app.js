/**
 * 增强对象字面量
 * 解决的问题：缩减代码
 * 
 * 
 */

    // //创建对象
    // new Object();
    // {};

    // //创建数组
    // new Array();
    // [];



    // function createBookShop(inventory){
    //     return {
    //         inventory:inventory,
    //         //图书价格的总和
    //         inventoryValue:function(){
    //             return this.inventory.reduce((total,book) => {
    //                 return total + book.price;
    //             },0);
                
    //         },
    //         //根据标题返回价格
    //         priceForTitle:function(title){
    //             return this.inventory.find((book) => {
    //                 return book.title === title;
    //             })
    //             .price;
    //         }
            
    //     }
    // }
    // const inventory = [
    //     {title:"Vue",price:10},
    //     {title:"Angular",price:15},
    //     {title:"React",price:13}
    // ];
    // const bookShop = createBookShop(inventory);

    // console.log(bookShop.inventoryValue());
    // console.log(bookShop.priceForTitle("Angular"));




    // //增强字面量
    // function createBookShop(inventory) {
    //     return {
    //         inventory,
    //         //图书价格的总和
    //         inventoryValue() {
    //             return this.inventory.reduce((total, book) => {
    //                 return total + book.price;
    //             }, 0);

    //         },
    //         //根据标题返回价格
    //         priceForTitle(title) {
    //             return this.inventory.find((book) => {
    //                 return book.title === title;
    //             })
    //                 .price;
    //         }

    //     }
    // }
    // const inventory = [
    //     { title: "Vue", price: 10 },
    //     { title: "Angular", price: 15 },
    //     { title: "React", price: 13 }
    // ];
    // const bookShop = createBookShop(inventory);

    // console.log(bookShop.inventoryValue());
    // console.log(bookShop.priceForTitle("Angular"));




    //JQuery 普通写法
    function saveFile(url,data){
        $.ajax({
            method:"POST",
            url:url,
            data:data
        });
    }
    const url = "http://fileupload.com";
    const data = {color:"red"};

    saveFile(url,data);

    //JQuery 增强对象字面量
    function saveFile(url, data) {
        $.ajax({
            url,
            data,
            method: "POST"
        });
    }
    const url = "http://fileupload.com";
    const data = { color: "red" };

    saveFile(url, data);