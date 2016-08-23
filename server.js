var express = require("express");
var app = express();
var server = app.listen(3000,function(){
  console.log("Live at Port 3000");
});

var router = express.Router();
var io = require('socket.io').listen(server)

app.use(express.static(__dirname));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/chat",function(req,res){
  res.sendFile(path + "chat.html");
});

app.use("/",router);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
