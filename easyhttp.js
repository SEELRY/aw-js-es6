/**
 * 封装fetch
 * 更快，更简单的请求数据
 * 
 * @version 2.0.0
 * 
 */

class EasyHttp{
    //get封装
    async get(url){
            const response = await fetch(url);
            const resData = await response.json();
            return resData;
    }
    

    //post封装
    async post(url, data) {
        const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    //put 更新数据
    async put(url,data){
        const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    }

    //delete 删除数据
    async delete(url) {
        const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const resData = await "数据删除成功！"
            return resData;
    }

}