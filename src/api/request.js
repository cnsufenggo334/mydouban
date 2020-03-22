import axios from 'axios'
import qs from "qs";
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css';
axios.interceptors.request.use(function (config) {
        Indicator.open({
		text: '正在拼命加载中...',
		spinnerType: 'double-bounce'
	});
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
      Indicator.close();
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
});

const axiosGet = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		axios.get(url,{params:params})
			.then((res)=>{
				resolve(res.data);//请求成功就resolve(),执行下一步
			})
			.catch((err)=>{
				reject(err)
			})
	})
}

//post的参数 {}==》对象转字符串 qs
const axiosPost = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		params = qs.stringify(params);//对象转字符串
		axios.post(url,{params:params})
			.then((res)=>{
				resolve(res.data);//请求成功就resolve(),执行下一步
			})
			.catch((err)=>{
				reject(err)
			})
	})
}

export default{
  get:axiosGet,
  post:axiosPost
}
//
//var obj = {
//	name:"zhangsan",
//	sex:"男"
//}
//res = qs.stringify(obj)
//
//res = name="zhangsan"&sex="男"
