import JsonP from 'jsonp';
import axios from 'axios'
import { Modal } from 'antd';

export default class JsonPForAxios{
    static jsonP(options){
       return new Promise((resolve,reject)=>{
           JsonP(options.url,{
                param:'callback'
            },function(err,response) {
                    if (response.status ==='success') {
                        resolve(response)
                }else{
                        reject(response.message)
                }
            })
        })
    }

    static ajax(options){
        let baseApi = 'https://jsonplaceholder.typicode.com'
        
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL: baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''   
            }).then((res)=>{
                if(res.status === 200){
                    resolve(res)
                }else{
                    reject(res)
                    Modal.info({
                        title:"Error",
                        content:res.statusText +"please check internet connection"
                    })
                }
            })
        });

    }
}