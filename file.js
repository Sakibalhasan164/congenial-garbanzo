//reading files
const fs=require("fs")

//the fs module takes two argument 
fs.readFile("./read/readMe.txt",(error,data)=>{
if(error){console.log(error);}
else {
    console.log(data.toString())
}

})


//writing files
fs.writeFile("./readme2.txt","hello sakib hasan",()=>{
    console.log("file written");
})


//directoris
if(!fs.existsSync("./read/assets")){
  fs.mkdir("./read/assets",(err)=>{
      if(err){console.log(err);}
      else{console.log("folder created");}
  })


}else{fs.rmdir("./read/assets",(err)=>{
    if(err){console.log(err);}
    else{console.log("folder delited");}
})}



//deleting files