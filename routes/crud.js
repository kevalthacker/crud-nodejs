var express= require("express");
var router = express.Router();

const crud = require('../models/crud');

router.get('/',function(req,res){
    crud.find().then(results => res.json({success:true, results:results}) );
});

router.post('/',function(req,res){
    const data = { first_name : req.body.first_name, last_name : req.body.last_name}
    new crud(data).save();
    return res.json({success:true, message:'Record added successfully.'})
});

router.put('/',function(req,res){
    const data = { "first_name" : req.body.first_name, "last_name" : req.body.last_name};
    crud.findOneAndUpdate({_id:req.body.id},data, function (err, result) {
       return res.json({success:true, message:'Record updated successfully.'})
    });
});

router.delete('/',function(req,res){
    const data = { _id : req.body.id}
    new crud(data).remove();
    return res.json({success:true, message:'Record deleted successfully.'})
});

module.exports = router;
