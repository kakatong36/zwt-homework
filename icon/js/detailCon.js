// 获取详细页的具体操作
app.controller("detailCon",function($scope,$stateParams){
	$scope.obj = {
		Name:$stateParams.name,
		City:$stateParams.city,
		Country:$stateParams.country,
		Age:$stateParams.age
	}
	//返回按钮
	$scope.goBack = function(){
		//通过调用浏览器的返回事件，实现返回到主页的效果
		window.history.back();
	}
})