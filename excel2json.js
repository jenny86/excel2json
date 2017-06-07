#!/usr/bin/env node


/*
* 文件格式为竖版
* title content
* XXX    XXX
*/
var xlsx = require('node-xlsx');
var fs = require('fs');

// console.log(JSON.stringify(list));
// console.log(list);

if (fs.existsSync(process.argv[2] + ".xlsx")) {
	var list = xlsx.parse(process.argv[2] + ".xlsx");
	console.log('正在读取文件...')
	changeObj(list);
	function changeObj(list) {
		for (var i = 0; i < list.length; i++) {
			var excleArr = list[i].data;
			var name = list[i].name;
			var keyArray = excleArr[0];
			var jsonArr = [];
			for (var k = 1; k < excleArr.length; k++) {
			 	var excleDataArr = excleArr[k];
				var obj = {};
				for (var i = 0; i < excleDataArr.length; i++) {
					obj[keyArray[i]] = excleDataArr[i];
				}; 
				//console.log(obj[0])
				jsonArr.push(obj);
				//console.log(jsonArr)
			}	
		};
		if (!fs.existsSync('text')) {
			fs.mkdirSync('text', 0777);
			try {
				fs.writeFileSync('text/'+name+'.js' ,JSON.stringify(jsonArr),'utf-8');
				console.log('json文件已生成')
			} catch(err) {
				console.log(err)
			}
		} else {
			try {
				fs.writeFileSync('text/'+name+'.js' ,JSON.stringify(jsonArr),'utf-8');
				console.log('json文件已生成')
			} catch(err) {
				console.log(err)
			}
		};	
	}
} else {
	console.log(process.argv[2] + ".xlsx 文件不存在" )
};



