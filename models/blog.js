const mongoos=require("mongoose")
const Schema=mongoos.Schema;

const blogSchema=new Schema({
 title:{
     type:String,
     required:true,
 },
 snippet:{
     type:String,
     required:true,
 },
 body:{
     type:String,
     required:true,
 }

},{timestamps:true})

const Blog=mongoos.model("Blog",blogSchema)
 

module.exports=Blog