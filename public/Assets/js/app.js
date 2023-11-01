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
