// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/rem'
import router from './router'
import Router from 'vue-router'
import api from './api/damaiObj'
import Api from './api/douban'
import ajax from './api/request'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false

Vue.prototype.api = api;
Vue.prototype.$ajax = ajax;
Vue.prototype.Api = Api;
Vue.prototype.isLeave = true;

//改变title名字
router.beforeEach((to, from, next) => {
	//console.log('全局路由守卫beforeEach', to, from)
	 if (to.meta && to.meta.title) {//如果当前meta不为空 title值也不为空
	    document.title = to.meta.title;//设置标题头为title值
	  } else {
	    document.title = '豆瓣'
	  }
	next()
})

////全局解析守卫
//router.beforeResolve((to, from, next) => {
////console.log('beforeResolve', to, from)
//	next();
//})
//
////后置钩子
//router.afterEach((to, from,next) => {
////console.log('afterEach', to, from)
//
//})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router:router
  components: { App },
  template: '<App/>'
})
