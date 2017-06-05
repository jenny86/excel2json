// 利用闭包保存参数
var urlcontent = function(data){
	var obj =  {};
	var fn = function() {
		var arrimg = [];
		return function(parm){
			parm ? arrimg.push(parm) : arrimg
			return arrimg;
		}
	}();

	for (var i = 0; i < data.length; i++) {
		obj = fn(data[i]);
	};
	fn = null;
	return obj;
}


//处理时间为00：00：00
function formatSeconds(value) {
    let second = Number(value);
    let hh = Math.floor(second/3600); 
    let mm = Math.floor((second-hh*3600)/60);
    let ss = Math.floor((second-hh*3600)%60);  
    let time = '00:00:00';
    
    if(hh<10) {
        hh = "0" + hh
    };  
     
    if(mm<10) {
        mm = "0" + mm
    };  
      
    if(ss<10) {
        ss = "0" + ss
    };  
    if (second > 0) {
        time = hh + ":" + mm + ":" + ss;
    } 
    return time;  
    
}