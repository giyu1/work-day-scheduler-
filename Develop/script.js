$(".btn").on("click", function(){
    var id =$(this).attr("id").split("-")[0]
    var userEntry = $("#" + id + "-input").val()
    console.log("id", id)
})