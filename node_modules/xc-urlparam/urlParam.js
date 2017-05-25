(function(window,global){
	typeof exports === 'object'&& typeof module !=undefined?module.exports = global():
	typeof define === 'function'&&define.amd?define(global()) : (window.getParam=global());
}(this,function(){
	function getParam(name) {
	   /*
		   *正则匹配以name开始或者&符合+name=除了&符号以外的0到多个任意字符 
		   *后面跟&符号或者为结尾，i忽略大小写
	   */
	   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	   //去掉？号正则匹配
	   var r = window.location.search.substr(1).match(reg);
	   //如果匹配成功则返回参数值
	   if (r!=null) return unescape(r[2]); 
	   //没有就返回为null
	   return null;
	}
	return getParam;
}));