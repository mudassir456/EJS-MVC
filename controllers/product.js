let path = require("path");
let Shop = require("../models/product");
const { Types } = require("mongoose");

module.exports ={
    get :async function(req,res){
        const products = await Shop.find()
        res.send({products})
    },
    post :async function(req,res){
        try {
            let {name, price} = req.body;
        let products = await Shop.create({
            _id :new Types.ObjectId,
            name : name,
            price : price
        })
        res.send({products})
        } catch (err){
            console.log("error found")
            console.log(err)
        }
    },
    put :async function(req,res){
        let {name,price} = req.body
        let {userid}= req.params;
        let products = await Shop.updateOne({
            _id : userid
        },{
            name,
            price
        }) 
        res.send({products})
    },
    delete :async function(req,res){
        let {name,price} = req.body
        let {userid} = req.params;
        let products = await Shop.findOneAndRemove(userid)
        res.send({products})
    }
}