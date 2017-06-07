var fs = require('fs');

/*
* fs 读文件
*
*/

// console.log('开始读取文件')
// fs.readFile('word.txt','utf-8',function(err,data){
// 	if (err) {
// 		console.log(err);
// 		return;
// 	} else {
// 		console.log(data)
// 	};
// })

// console.log('读取文件成功')


// console.log('开始读取文件')
// var data = fs.readFileSync('word.txt','utf-8');
// console.log(data)

// console.log('读取文件成功')


/*
* fs 写文件
*
*/
// var data = '\n我是被写入的文本';
// fs.writeFile('word.txt',data,{flag:'a'});
// console.log('写入成功')

// fs.writeFile('word.txt',data, {flag: 'a'}, function (err) {
//    if(err) {
//     	console.error(err);
//     } else {
//     	console.log('写入成功');
//     }
// });


/*
* fs 复制文件
*
*/


// fs.readFile('exercise.js','utf-8',function(err,data){

// 	fs.writeFile('word.txt',data, {flag: 'a'}, function (err) {
// 	   if(err) {
// 	    	console.error(err);
// 	    } else {
// 	    	console.log('写入成功');
// 	    }
// 	});
// });
/*
* fs 获取文件相关信息
*
*/

// fs.stat('word.txt',function(err,stat){
// 	console.log(stat.size)
// })

//console.log(fs.statSync('word.txt'));


// fs.stat('word.txt',function(err,stat){
// 	console.log(stat.isFile())
// 	console.log(stat.isDirectory())
// })


/*
* fs 检测文件是否存在
*
*/
//console.log(fs.existsSync('word1.txt'));
//console.log(fs.existsSync('creatdir'));

/*
* fs 创建文件夹
*
*/
// fs.mkdirSync('creatdir', 0777);



