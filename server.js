const http=require("http")
const fs=require("fs");
const port=1080;
const _ =require("lodash")


const server=http.createServer((req,res)=>{
    //know about the request
    // console.log(req.url);
    
   const num=_.random(0,50.5)
   console.log(Math.floor(num));

    
    let path="./views/"
    if(req.url==="/index.html"){
        // console.log("just the//");
        path+="index.html"
        res.statusCode=200
    }else if(req.url==="/about"){
        path+="about.html"
        res.statusCode=200
    }else{path+="404.html"
          res.statusCode=404
   
}

//the respose
fs.readFile(path,(err,data)=>{
//if there is any error log me on the console
    if(err){
        console.log(err);
        res.end()
    }
    else{
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
        
    }
})

})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
 