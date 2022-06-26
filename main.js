$(function  () {
  $("#subimg img").on("click" , function() {
    img=$(this).attr("src");
    $("#subimg li").removeClass("current");
    $(this).parent().addClass("current");
    $("#mainimg img").fadeOut(50,function() {
      $("#mainimg img")
      .attr("src" , img)
      .on("load" , function() {
        $(this).fadeIn();
      });
    });

  });
});