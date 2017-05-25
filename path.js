/*
* 获取文件路径
*/

// var path = require('path');
// var filepath = '/tmp/demo/js/test.js';

// // 输出：/tmp/demo/js
// console.log( path.dirname(filepath) );

/*
* 获取文件名
*/
// var path = require('path');

// // 输出：test.js
// console.log( path.basename('/tmp/demo/js/test.js') );

// // 输出：test
// console.log( path.basename('/tmp/demo/js/test/') );

// // 输出：test
// console.log( path.basename('/tmp/demo/js/test') );

// // 输出：test
// console.log( path.basename('/tmp/demo/js/test.js', '.js') );

var a = {
	x:6,
	y:2
};
function fn(a){
	console.log(a)
	a  = {x: 2};
	// console.log(a.x);
	// console.log(a.y);
}
fn();
console.log(a.x);
console.log(a.y);


// function fun(n,o){
// 	console.log(0);
// 	return {
// 		fun : function(m){
// 			return fun(m,n)
// 		}
// 	}

// }
// var a = fun(0);

// function box(){
// 	var arr= [];
// 	for(var i=0;i<5;i++){
// 		arr[i] = function(){
// 			return i;
// 		}
// 	}
// 	return arr;
// }
// var b = box();
// b[0]();
// console.log(b[0]())