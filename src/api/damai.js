import axios from 'axios';
export const broadlist = () => {
	return axios.get("../../static/broadlist.json").then((res)=>res.data)
}
export const dlist = () => {
	return axios.get("../../static/dlist.json").then((res)=>res.data)
}
export const minelist = () => {
	return axios.get("../../static/minelist.json").then((res)=>res.data)
}