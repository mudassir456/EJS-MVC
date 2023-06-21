let {Router} = require("express")
let router = Router();
let products = require("../models/product");
let path = require("path")
let controller = require("../controllers/product")

router.get("/",controller.get)
router.post("/",controller.post);
router.put("/:userid",controller.put)
router.delete("/:userid",controller.delete)

module.exports= router