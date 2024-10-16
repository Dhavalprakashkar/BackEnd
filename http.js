const myHttp = require("http");

const server= myHttp.createServer((req,res)=>{
    if(req.method == "GET" && req.url == "/hi"){
        res.end("Welcome");
}
});

server.listen(8000, ()=>{
    console.log("Running on port 8000")
})