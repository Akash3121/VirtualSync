var MyApp = (function(){

    function init(uid, mid){
        alert("From App js")
    }

    return {
        _init: function(uid, mid){
            init(uid, mid);
        },
    };
})();

// var MyApp ={
//     _init: function (uid, mid) {
//         alert("From App js");
//     }
//     // function init (uid, mid) {
//     //     alert("From App js");
//     // }

//     // return {
//     //     _init: function(uid, mid){
//     //         init(uid, mid);
//     //     },
//     // }
// };