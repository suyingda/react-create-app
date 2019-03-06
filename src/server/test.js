/*
const http = require('http');

var server =http.createServer(function(req,res){
    switch(req.url){
        case './dist/index':
            break;
    }
});

server.listen(8001)*/
var http = require('http');
var fs = require('fs');//引入文件读取模块
const express = require('express');

const app = express();
const path = require('path');
var documentRoot = './dist';

app.use(express.static(path.join(__dirname, '../../dist')));

var server = http.createServer(function (req, res) {

    var url = req.url === '/' ? '/index.html' : req.url;
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html

    var file = documentRoot + url;
    // var file = './dist/index.html';
    // console.log(req.url, 123);
    //E:/PhpProject/html5/websocket/www/index.html

    fs.readFile(file, function (err, data) {
        /*
            一参为文件路径
            二参为回调函数
                回调函数的一参为读取错误返回的信息，返回空就没有错误
                二参为读取成功返回的文本内容
        */
        if (err) {
            // console.log(err,'error!进入服务端请求')
            fs.readFile('./dist/index.html', 'utf-8',function (err, data) {
                console.log(file, '文件路径')
                if (err) {
                    res.writeHeader(404, {
                        'content-type': 'text/html;charset="utf-8"',
                    });
                    res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
                    res.end();
                } else {
                    res.writeHeader(200, {
                        'content-type': 'text/html;charset="utf-8"',
                    });
                    res.write(data);//将index.html显示在客户端
                    res.end();
                }
            });
            /*  res.writeHeader(404, {
                  'content-type': 'text/html;charset="utf-8"',
              });
              res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
              res.end();*/
        } else {

            // res.writeHead(200, {'Content-type': `${'text/html'};chartset=utf-8`});
            res.writeHead(666, {'Content-type': 'text/plain'});
            console.log('status : 200');
            res.write(data);
            res.end();

/*
            res.writeHeader(200, {
                // 'content-type' : "text/event-stream"
                // 'content-type': 'text/html;charset="utf-8"',

            });
            res.write(data);//将index.html显示在客户端
            res.end();*/

        }

    });

}).listen(1001);


