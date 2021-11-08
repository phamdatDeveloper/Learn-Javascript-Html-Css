process = {

    function1 : function(elem){
        var div = $(elem).closest("tr");
        console.log("function1");
    },
    
};

process.function1();    

$("#btn_").on("click", function(){
    process.function1(this);
});