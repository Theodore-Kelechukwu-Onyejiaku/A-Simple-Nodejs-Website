const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    if(req.url === "/"){
        fs.readFile("index.html", (err, data)=>{
            if(err) throw err;
            res.writeHead(202, {"Content-type" : "text/html"})
            res.end(data);
        })
    }
    
    else if(req.url === "/about"){
        fs.readFile("about.html", (err, data)=>{
            if(err) throw err;
            res.writeHead(202, {"Content-type" : "text/html"})
            res.end(data);
        })
    }

    else if(req.url === "/contact-me"){
        fs.readFile("contact-me.html", (err, data)=>{
            if(err) throw err;
            res.writeHead(202, {"Content-type" : "text/html"})
            res.end(data);
        })
    }

    else{
        fs.readFile("404.html", (err, data)=>{
            if(err) throw err;
            res.writeHead(202, {"Content-type" : "text/html"})
            res.end(data);
        })
    }
})
.listen(5000);