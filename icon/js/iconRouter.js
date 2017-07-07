// 配置路由，ionic中使用的是ui-router路由服务
var app = angular.module("app",["ionic","ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
	// 找不到某页面时，返回该主页面
	$urlRouterProvider.otherwise("/home");
	// 配置路由表
	$stateProvider.state('home',{
			url:'/home',
			templateUrl:'template/home.html',
			controller:"homeCon"
		}
	)
	// 详情页
	.state('detail',{
		// 通过路由进行传值,把对象的每个信息单独穿过
		url:'/detail/:name/:city/:country/:age',
		templateUrl:'template/detail.html',
		controller:'detailCon'
	})
})