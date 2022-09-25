//require表示引包，引包就是引用自己的一个特殊功能
 var http = require("http");
 var url = require("url");
 var server = http.createServer(function(req,res){
    //得到查询部分，由于写了true，那么就是一个对象
 });
 
 //运行服务器，监听3000端口（端口号可以任改）
 server.listen(3000,"127.0.0.1");
 
 // 终端打印如下信息
 console.log('Server running at http://127.0.0.1:3000/')
 