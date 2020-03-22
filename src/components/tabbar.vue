<template>
	<div class="tabbarWrap">
		<!-- to="/home" 和路由数组对应-->
	    <!--<router-link to="/home">首页</router-link>
	    <router-link to="/myaudio">书影音</router-link>
	    <router-link to="/broad">广播</router-link>
	    <router-link to="/group">小组</router-link>
	    <router-link to="/mine">我的</router-link>-->
	    <item title="首页"  mark="home" :active="sel" @myevent="getVal">
	    	 <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normalImg"/>
	   		 <img src="../assets/images/ic_tab_home_active.png" alt="" slot="activeImg"/>
	    </item>
	    <item title="书影音" mark="myaudio" :active="sel" @myevent="getVal">
	    	  <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normalImg"/>
	    	  <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="activeImg"/>
	    </item>
	    <item title="广播" mark="broad" :active="sel" @myevent="getVal">
	    	<img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normalImg"/>
	    	 <img src="../assets/images/ic_tab_status_active.png" alt="" slot="activeImg"/>
	    </item>
	    <item title="小组" mark="group" :active="sel" @myevent="getVal">
	    	 <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normalImg"/>
	    	 <img src="../assets/images/ic_tab_group_active.png" alt="" slot="activeImg"/>
	    </item>
	    <item title="我的"  mark="mine" :active="sel" @myevent="getVal">
	    	 <img src="../assets/images/ic_tab_profile_female_normal.png" alt="" slot="normalImg"/>
	    	  <img src="../assets/images/ic_tab_profile_female_active.png" alt="" slot="activeImg"/>
	    </item>
	</div>
</template>

<script>
	import Item from "./item"
	export default{
		name:"tabbar",
		components:{
			Item
		},
		data(){
			return {
				sel:"home"
			}
		},
		methods:{
			getVal(value){
				this.sel = value;
			}
		}
	}
</script>

<style>
	.tabbarWrap{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 64px;
		background: white;
	}
</style>