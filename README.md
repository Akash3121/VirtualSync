# VirtualSync
A clone of Google Meet with WebRTC, Socket.io

Download & Install Node.js

then open terminal npm init, click enter all times if its stops running(it asks for something)
next enter `npm install express socket.io`

Update Start Script:
In the package.json, under scripts, remove test and add start, see below
"scripts": {
    "start": "node server"
  },


Check these if you have any doubt's:
https://github.com/IAnjy/meet-clone/tree/master/public/Assets
https://github.com/yves1da2vinci3/google_meet_clone/tree/main/public/
Rep Search: https://github.com/search?q=google+meet+clone+socket.io&type=repositories

Wached till 1:36:24

added 
var MyApp ={
    _init: function (uid, mid) {
        alert("From App js");
    }
}; instead of
var MyApp ={
    function init (uid, mid) {
         alert("From App js");
    }

    return {
        _init: function(uid, mid){
             init(uid, mid);
         },
     }
}; 
as this is giving some errors, continue with the one above, let's see what happens.

**Push into the branch, not main**