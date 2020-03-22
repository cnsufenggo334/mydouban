import axios from 'axios';

const php = (params) =>{
	return axios.get("/php/count.php",{params:params}).then((res)=>res.data);
}
const doubanVedio = (params) =>{
	return axios.get("/douban/movie/in_theaters",{params:params}).then((res)=>res.data);
}
export default{
	php,
	doubanVedio
}
