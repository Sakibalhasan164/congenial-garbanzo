const { static } = require("express");
const express=require("express");
const { result } = require("lodash");
const app=express();
const mongoose=require("mongoose")
const Blog=require("./models/blog")
//register a view engin
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

//sendbox router
app.get("/add-blog",(req,res)=>{
const blog=new Blog({
    title:"new blog 22",
    snippet:"this is a blog",
    body:"this is the body.............lol"
})
blog.save()
.then((result)=>{res.send(result)})
.catch((err)=>{console.log(err);})
})



//conectin to mongoDB
const dbURL="mongodb+srv://SakibHasan:1234test@net-ninja.faupo.mongodb.net/net-ninja?retryWrites=true&w=majority"
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{

app.listen(500,()=>{
    console.log("server is listning");
})

console.log("connected to the database");

})
.catch((err)=>{
    console.log(err);
})
         

//listning 


app.get("/",(req,res)=>{ 
    
        Blog.find()
          .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
          })
          .catch(err => {
            console.log(err);
          });
      });




//about
app.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
    
})

//crate
app.get('/create',(req,res)=>{
res.render("create",{title:"Create"})

})
//i am getting a blog form the user
app.post("/create",(req,res)=>{
    const blog=new Blog(req.body)
    blog.save()
    .then(()=>{
        res.redirect("/")
        console.log(req.body);
    })
    .catch((err)=>{console.log(err);
    })
}) 







//redircting in express
app.get("/about-me",(req,res)=>{
    res.redirect("/about",{title:"home"})
})

//404 page
app.use((req,res)=>{
    res.status(404).render("404")
})