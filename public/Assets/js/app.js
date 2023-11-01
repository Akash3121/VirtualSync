var MyApp = (function(){

    function init(uid, mid){
        // alert("From App js")

        event_process_for_signaling_server();
    }

    return {
        _init: function(uid, mid){
            init(uid, mid);
        },
    };
})();
