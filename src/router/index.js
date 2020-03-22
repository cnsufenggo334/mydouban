import Vue from 'vue'
import Router from 'vue-router'

//使用home,mine 路由组件
import Home from "../pages/home"//引入想要在改文件中使用的组件
import Mine from "../pages/mine"//引入想要在改文件中使用的组件
import Group from "../pages/group"//引入想要在改文件中使用的组件
import Myaudio from "../pages/myaudio"//引入想要在改文件中使用的组件
import Broad from "../pages/broad"//引入想要在改文件中使用的组件
//Home,Mine是组件在../pages/home文件中使用的名字

import Newsdetail from "../pages/newsdetail"//引入想要在改文件中使用的组件

//书影音下面的
import MVideo from '@/pages/myaudio/vedio'
import MRead from '@/pages/myaudio/read'
import MTv from '@/pages/myaudio/tv'
import MCity from '@/pages/myaudio/city'
import MMusic from '@/pages/myaudio/music'

//大麦网
import Dlist from '@/pages/dlist'
import Ddetail from '@/pages/ddetail'

import Gdetail from '@/pages/groupdetail'
//mine里的列表
import Album from '@/pages/mine/album'
import Doulist from '@/pages/mine/doulist'
import Likes from '@/pages/mine/likes'
import Note from '@/pages/mine/note'
import Orders from '@/pages/mine/orders'
import Wallet from '@/pages/mine/wallet'

import Filmlist from '@/pages/filmlist'
import Filmdetail from '@/pages/filmdetail'

import Foods from '../pages/foods/list'
import Cart from '../pages/foods/cart'

Vue.use(Router)

export default new Router({
  routes: [
  	{
    	path:'/foods',
    	component:Foods,
    	meta:{title:'食物菜单'}
    },
     {
    	path:'/cart',
    	component:Cart,
    	meta:{title:'已选食物'}
    },
  	{
      path: '/filmdetail/:id',
      name:"filmdetail",
      component: Filmdetail,//import
      meta:{title:'电影详情'}
    },
  	{
      path: '/filmlist',
      name:"filmlist",
      component: Filmlist,//import
      meta:{title:'即将上映'}
    },
  	{
      path: '/album',
      name:"album",
      component: Album,//import
      meta:{title:'相册'}
    },
    {
      path: '/doulist',
      name:"doulist",
      component: Doulist,//import
      meta:{title:'豆列'}
    },
    {
      path: '/likes',
      name:"likes",
      component: Likes,//import
      meta:{title:'喜欢'}
    },
    {
      path: '/note',
      name:"note",
      component: Note,//import
      meta:{title:'日记'}
    },
    {
      path: '/orders',
      name:"orders",
      component: Orders,//import
      meta:{title:'订单'}
    },
    {
      path: '/wallet',
      name:"wallet",
      component: Wallet,//import
      meta:{title:'钱包'}
    },
  	{
      path: '/gdetail/:groupid',
      name:"gdetail",
      component: Gdetail//import
    },
    {
      path: '/ddetail/:detailid',
      name:"ddetail",
      component: Ddetail//import
    },
    {
      path: '/dlist/:typeid',
      name:"dlist",
      component: Dlist//import
    },
    {
      path: '/home',
      name:"name",
      component: Home,//import
      meta:{title:'首页'}
    },
    {
      path: '/mine',
      component: Mine,//import
      meta:{title:'我的'}
    },
     {
      path: '/group',
      name:"group",
      component: Group,//import Group
      meta:{title:'小组'}
    },
    {
      path: '/myaudio',//路径规范 尽量使用小写
      component: Myaudio,
      children:[
      		{
		      path: '',redirect: "vedio",meta:{title:'电影'}//import
		    },
		      {
		      path: 'vedio',component: MVideo,meta:{title:'电影'}//import
		    },
		    {
		      path: 'read',component: MRead,meta:{title:'读书'}//import
		    },
		    {
		      path: 'tv',component: MTv,meta:{title:'电视'}//import
		    },
		    {
		      path: 'city',component: MCity,meta:{title:'同城'}//import
		    },
		    {
		      path: 'music',component: MMusic,meta:{title:'音乐'}//import
		    }
      ]
    },
     {
      path: '/broad',
      name:"broad",
      component: Broad,//import
      meta:{title:'广播'}
    },
     {
      path: '/newsdetail',
      component: Newsdetail//import
    }
  ]
})
