var express=require('express');
var router=express.Router();
var fs=require('fs');
var db=require('./queries')

router.get("/", function(req,res){
  fs.readFile("index.html", function(err,html){
    res.write(html);
    res.end();
  })
});
router.post('/save', db.save);
router.get('/getAll',db.getAll);



module.exports=router;
