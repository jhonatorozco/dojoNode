var express=require('express');
var routes=require('./routes');
var bodyParser=require('body-parser');

var app=express();
app.listen(8081,function(){
  console.log("Escuchando el puerto 8080");
});
app.use(bodyParser.urlencoded({extend:true}));
app.use('/',routes);
