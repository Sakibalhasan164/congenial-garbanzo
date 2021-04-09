//this is the nodejs streams modules 
 const fs=require("fs");
//the file can be read by the read file mathode but its better to use the stream mathode for a huge amount of data


//  fs.readFile("./randomText.txt",(err,data)=>{
//      if(err){console.log(err);}
//      else{console.log(data.toString());}
//  })
// console.log("hi");


const readStream=fs.createReadStream("./randomText.txt",{encoding:"utf-8"})
const writeStream=fs.createWriteStream("./writeStream.txt")
// readStream.on("data",(chunk)=>{
//     console.log("-----NEW CHUNK OF DATA HAS ARRIVED-----");
//     // console.log(chunk);
//     writeStream.write("\n---THIS IS THE NEW CHUNK\n")
//     writeStream.write(chunk)

// })

//piping
readStream.pipe(writeStream)


