/**
 * 封装fetch
 * 更快，更简单的请求数据
 * 
 * 
 */

class EasyHttp{
    //get封装
    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    //post封装
    post(url,data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    //put 更新数据
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method:"PUT",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //delete 删除数据
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{'Content-type':'application/json'}
            })
                .then(res => res.json())
                .then(data => resolve("数据删除成功！"))
                .catch(err => reject(err))
        })
    }

}