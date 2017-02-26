/**
 * Created by liuxiang_ty on 2017/2/26.
 */
var httpd = require("http");
var path = require("path");
var fs = require("fs");
var port = 3000;
var url = require("url");

var server = httpd.createServer(function (req,res) {
    var pathName = url.parse(req.url).pathname;
    pathName = path.join(__dirname,"..",pathName);
    console.log(pathName);
    if( ! fs.existsSync(pathName)){
        res.writeHead(404);
        res.end();
    }else {
        fs.createReadStream(pathName, "utf-8").pipe(res);
    }
});
server.listen(port);
console.log("server start on 3000");


