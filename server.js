const exp = require("constants");
let express = require("express")
let port =4000;
let app =express()
let path = require("path")
app.use(express.urlencoded())
app.use(express.json())
let products = []
app.set("view engine", "ejs")

app.get("/products",function(req,res){
    res.render(path.join(__dirname,"views","index"),{products})
})
app.post("/products",function(req,res){
    let {name, price} = req.body;
    products.push({name,price});
    res.send("post method done")
});
app.put("/products/:userid",function(req,res){
    let {name,price} = req.body
    let {userid}= req.params;
    userid = Number(userid); 
    products[userid].name=name;
    products[userid].price= price;
    res.send("put method done")
})

app.delete("/products/:userid",function(req,res){
    let {name,price} = req.body
    let {userid} = req.params;
    userid = Number(userid);
    products.splice(userid,1)
    res.send("delete method done")
})


app.listen(port)