let path = require("path");
let products = require("../models/product")

module.exports ={
    get :function(req,res){
        res.render(path.join(__dirname,"../views","index"),{products})
    },
    post :function(req,res){
        let {name, price} = req.body;
        products.push({name,price});
        res.send("post method done")
    },
    put :function(req,res){
        let {name,price} = req.body
        let {userid}= req.params;
        userid = Number(userid); 
        products[userid].name=name;
        products[userid].price= price;
        res.send("put method done")
    },
    delete :function(req,res){
        let {name,price} = req.body
        let {userid} = req.params;
        userid = Number(userid);
        products.splice(userid,1)
        res.send("delete method done")
    }
}