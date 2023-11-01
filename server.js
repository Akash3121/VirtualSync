const express = require("express");
const path = require("path");
const { Socket } = require("socket.io");
var app = express();
var server = app.listen(3000, function(){
    console.log("Listening on port 30000");
});

const io = require("socket.io")(server, {
    allowEIO3: true // false by default
  });
app.use(express.static(path.join(__dirname, "")));

io.on("connection", (socket)=>{
    console.log("socket id is ", socket.id);
})