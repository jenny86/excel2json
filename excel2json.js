#!/usr/bin/env node


/*
* 文件格式为竖版
* title content
* XXX    XXX
*/
var xlsx = require('node-xlsx');
var fs = require('fs');
var list = xlsx.parse("Excel1.xlsx");
// console.log(JSON.stringify(list));

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



/*
*文件格式为横版
* title1 XXX
* title2 XXX
* title3 XXX
*/

// var xlsx = require('node-xlsx');
// var fs = require('fs');
// var list = xlsx.parse("Excel1.xlsx");


// var obj = {};
// var name;
// //console.log(JSON.stringify(list));

// //fs.writefile("domeData.json",changeObj(list),'utf-8',complete);

// changeObj(list);

// function changeObj(list){
// 	for (var i = 0; i < list.length; i++) {
// 		var excleData = list[i].data;
// 		for (var k = 0; k < excleData.length; k++) {
// 			obj[excleData[k][0]] = excleData[k][1];
			
// 		};
// 		console.log(JSON.stringify(obj));
// 		writeFile(list[i].name,JSON.stringify(obj))
// 	}

// }

// function writeFile(fileName,data){
// 	fs.writeFileSync(fileName+".json",data,'utf-8');
// }

// console.log('文件生成成功');

// function complete(err){
// 	if (!err) {
// 		console.log('json文件生成成功')
// 	} else {
// 		console.err(err)
// 	};
// }





// var xlsx = require("node-xlsx");
// var fs = require('fs');
// var list = xlsx.parse("Excel1.xlsx");
// praseExcel(list);
// //解析Excel
// function praseExcel(list)
// {
//     for (var i = 0; i < list.length; i++) 
//     {	
//          var excleData = list[i].data;
//          var sheetArray  = [];
//          var typeArray =  excleData[1];
//          var keyArray =  excleData[2];
//         for (var j = 1; j < excleData.length ; j++)
//         {
//              var curData = excleData[j];

//              if(curData.length == 0) continue;
//              var item = changeObj(curData,typeArray,keyArray);
//              sheetArray.push(item);
//         }
//         if(sheetArray.length >0) ;
//         writeFile(list[i].name+".json",JSON.stringify(sheetArray));

//     }
// }
// //转换数据类型
// function changeObj(curData,typeArray,keyArray)
// {
//     var obj = {};
//     for (var i = 0; i < curData.length; i++) 
//     {
//         //字母 
//        	obj[keyArray[i]] = curData[i]; 
//     }
//     return obj;
// }
// function changeValue(value,type)
// {
//     if(value == null || value =="null") return ""
//     if(type =="int") return Math.floor(value);
//     if(type =="Number") return value;
//     if(type =="String") return value;  
// }
// //写文件
// function writeFile(fileName,data)
// {  
//   fs.writeFile(fileName,data,'utf-8',complete);
//   function complete(err)
//   {
//       if(!err)
//       {
//           console.log("文件生成成功");
//       }   
//   } 
// }