const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{

   const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
 
   const obj = JSON.parse(data);
   // console.log(req.url);
    if(req.url=="/"){
 res.end('hello krishna');
    }
    else if(req.url=="/about"){
        res.end("this is about page");
    }
    else if(req.url=="/userApi"){
        res.writeHead(200, {"content-type": "appliction/json"})
        res.end(obj.data[0].title);
        // console.log();
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 error page not found</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to port 8000 ");
});
