import axios from 'axios';
const broadlist = () => {return axios.get("../../static/broadlist.json").then((res)=>res.data)}
const dlist = () => {return axios.get("../../static/dlist.json").then((res)=>res.data)}
const minelist = () => {return axios.get("../../static/minelist.json").then((res)=>res.data)}
const hometype = () => {return axios.get("../../static/hometype.json").then((res)=>res.data)}
const newslist = () => {return axios.get("../../static/newslist.json").then((res)=>res.data)}
const groupList = () => {return axios.get("../../static/groupList.json").then((res)=>res.data)}
export default{
	broadlist,
	dlist,
	minelist,
	hometype,
	newslist,
	groupList
}
