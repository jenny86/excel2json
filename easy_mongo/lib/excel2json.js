/*
* 文件格式为竖版
* title content
* XXX    XXX
*/
var xlsx = require('node-xlsx');
var fs = require('fs');
var list = xlsx.parse("Excel1.xlsx");


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
	try {
		fs.writeFileSync(name + '.json' ,JSON.stringify(jsonArr),'utf-8');
		console.log('json文件已生成')
	} catch(err) {
		console.log(err)
	}
}



