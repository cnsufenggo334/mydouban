import axios from 'axios';
import qs from 'qs';

const axiosGet = (url,params) =>{
	return new Promise((resolve,reject)=>{
		axios.get(url,{params:params})
		.then((res)=>{
			resolve(res.data);
		}).catch((err)=>{reject(err)})
	})
}
const axiosPost = (url,params) =>{
	return new Promise((resolve,reject)=>{
		params = qs.stringify(params);
		axios.post(url,{params:params})
		.then((res)=>{
			resolve(res.data);
		}).catch((err)=>{reject(err)})
	})
}

export default{
	get:axiosGet,
	post:axiosPost
}
