$(document).ready(function(){
  $("#switch-theme").click(function(){
    $(".btn").toggleClass("btn-outline-dark");
    $(".navbar").toggleClass("bg-dark");
    $(".border").toggleClass("border-dark");
    $(".list-group-item-primary").toggleClass("list-group-item-dark");
    $("body").css("background-color", "#555")


    $(".btn").toggleClass("btn-outline-primary");
    $(".navbar").toggleClass("bg-primary");
    $(".border").toggleClass("border-primary");
    $(".list-group-item-dark").toggleClass("list-group-item-primary");

    if($(".navbar").hasClass("bg-dark")){
      $("body").css("background-color", "#555")
    }
    else
    {
      $("body").css("background-color", "#FFF")
    }
  });
});
