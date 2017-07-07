// 
// 将图片写在一个数组里面
app.controller('homeCon',function($scope,$http,$state){
	$scope.imgs = [
		"images/5.jpg",
		"images/4.jpg",
		"images/3.jpg",
		"images/2.jpg",
		"images/1.jpg",
		"images/6.jpg",
		"images/7.jpg",
		"images/8.jpg"
	];

	// 根据接口接收数据
	// 定义一个空的数据数组
	var detailArr = [];
	function getAll(){
		$http({
			url:'data/data.php?type=list&pageNo='+page+"&num="+count
		}).then(function(data){
			// console.log(data);
			if(page == 1){
				$scope.detailArr = data.data.records;
				// 刷新成功之后要停止刷新
				$scope.$broadcast('scroll.refreshComplete');
			}else{
				var newArr = [ 
						{"Name":"花花","City":"德州","Country":"中国","age":20}, 
						{"Name":"哈哈","City":"济南","Country":"中国","age":25}, 
						{"Name":"甜甜","City":"休斯顿","Country":"美国","age":40}, 
						{"Name":"蒙蒙","City":"日本","Country":"中国","age":23}, 
						{"Name":"嘻嘻","City":"华盛顿","Country":"美国","age":42}, 
						{"Name":"七儿","City":"香港","Country":"中国","age":36}, 
						{"Name":"罗伊","City":"越南","Country":"越南","age":18}, 
						{"Name":"福福","City":"禹城","Country":"中国","age":2}, 
						{"Name":"刻绘","City":"莫斯科","Country":"俄罗斯","age":57}, 
						{"Name":"字字","City":"平壤","Country":"朝鲜","age":28}, 
						{"Name":"了了","City":"伦敦","Country":"英国","age":41}
						];
				$scope.detailArr = $scope.detailArr.concat(newArr);
					//请求全部数据，当获取的数据长度为0时，向上刷新 不存在
				if (data.data.records.length == 0) {
					$scope.isMore = false;
				}

				// 停止加载的动画
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
			
		},function(err){
			console.log(err);
			if (page == 1) {
				$scope.$broadcast('scroll.refreshComplete');
			}else{	
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		})

	}

	// 去往详情页
	$scope.gotoDetail = function(obj){
		// console.log(obj);
		// 能够打印出来：Object {Name: "张三", City: "德州", Country: "中国", age: 20, $$hashKey: "object:28"}
		$state.go("detail",{
			name:obj.Name,
			city:obj.City,
			country:obj.Country,
			age:obj.age
		})
	}
	//分别定义:刷新显示的页数和一页显示10条内容
	var page = 1;
	var count = 10;
	$scope.isMore = true; //向下刷新允许存在
	// 调用获取数据的函数
	getAll(page);
	// 向下刷新
	$scope.doRefresh = function(){
		//每次刷新，将刚刚刷新出来的内容显示在第一页
		page = 1;
		//刷新的主要操作是再次向服务器发送请求，获取最新的数据
		getAll(page);
	}
	// 向上加载
	$scope.loadMore = function(){
		//加载，需要页面变量自增
		page++;
		//获取页码对应的数据
		getAll(page);
	}
})