let getHtml = function(id="#header",url="header.html"){
    $.ajax({
        type:"GET",
        url:url,
        success:function(data){
            $(id).html(data);
        },
        error:function(){
            console.log("header error");
        }
    })
};
(()=>{
    getHtml();
    getHtml("#footer","footer.html");
})()
