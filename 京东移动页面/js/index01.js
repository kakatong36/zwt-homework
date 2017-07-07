// 轮播图设置

// setInterval(function(){
// 	var len = $(".loopCircle_ul>li").length;
// 	var index = $(".loopCircle_ul>li").index($(".current"));
// 	if(index<len-1){
// 		$($(".loopCircle_ul>li")[index]).removeClass("current");
// 		$(".loopCircle_ul>li")[index+1].className = "current";
// 	}else if(index == len-1){
// 		$($(".loopCircle_ul>li")[len-1]).removeClass("current");
// 		// index = 0;
// 		$(".loopCircle_ul>li")[0].className = "current";
// 	}
// },1000);
	

// 倒计时商品
 function start(){
	     var timeOne = new Date();
	     var timeTwo = new Date(2017,6,6,21,0,0);     
	     var delta_T = (timeTwo.getTime() - timeOne.getTime())/1000;  //计算相差的秒数        
	 	 var hour =  Math.floor(delta_T/60/60);    	
	     var minute = Math.floor(delta_T/60-hour*60);
	     var second = Math.floor(delta_T - hour*60*60-minute*60);
	     var hourStr = hour.toString();
	     if(hourStr.length == 2){
	     	$(".interTime>span")[0].innerHTML = hourStr.split("")[0];
	     	$(".interTime>span")[1].innerHTML = hourStr.split("")[1];
	     }else if(hourStr.length == 1){
	     	$(".interTime>span")[0].innerHTML = 0;
	     	$(".interTime>span")[1].innerHTML = hourStr.split("")[0];
	     }else if(hourStr.length == 0){
	     	$(".interTime>span")[0].innerHTML = 0;
	     	$(".interTime>span")[1].innerHTML = 0;
	     }
	     // 分钟
	      var minuteStr = minute.toString();
	     if(minuteStr.length == 2){
	     	$(".interTime>span")[3].innerHTML = minuteStr.split("")[0];
	     	$(".interTime>span")[4].innerHTML = minuteStr.split("")[1];
	     }else if(minuteStr.length == 1){
	     	$(".interTime>span")[3].innerHTML = 0;
	     	$(".interTime>span")[4].innerHTML = minuteStr.split("")[0];
	     }else if(minuteStr.length == 0){
	     	$(".interTime>span")[3].innerHTML = 0;
	     	$(".interTime>span")[4].innerHTML = 0;
	     }
	     // 秒
	      var secondStr = second.toString();
	     if(secondStr.length == 2){
	     	$(".interTime>span")[6].innerHTML = secondStr.split("")[0];
	     	$(".interTime>span")[7].innerHTML = secondStr.split("")[1];
	     }else if(secondStr.length == 1){
	     	$(".interTime>span")[6].innerHTML = 0;
	     	$(".interTime>span")[7].innerHTML = secondStr.split("")[0];
	     }else if(secondStr.length == 0){
	     	$(".interTime>span")[6].innerHTML = 0;
	     	$(".interTime>span")[7].innerHTML = 0;
	     }  
	      // 冒号闪动的效果
	     $(".bgNone").toggleClass("flicker");
     }
     setInterval(start,1000);   //执行该函数的间隔时间
   