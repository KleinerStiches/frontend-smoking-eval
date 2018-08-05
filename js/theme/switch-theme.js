$(document).ready(function(){
  $("#switch-theme").click(function(){

    $(".navbar").toggleClass("bg-dark");
    $(".border").toggleClass("border-dark");
    $(".list-group-item-primary").toggleClass("list-group-item-dark");
    $("body").css("background-color", "#555")

    $(".navbar").toggleClass("bg-primary");
    $(".border").toggleClass("border-primary");
    $(".list-group-item-dark").toggleClass("list-group-item-primary");


    if($(".btn").hasClass("btn-outline-primary"))
    {
      $(".btn-outline-primary").toggleClass("btn-outline-dark");
      $(".btn-outline-primary").toggleClass("btn-outline-primary");
    }
    else if ($(".btn").hasClass("btn-outline-dark"))
    {
      $(".btn-outline-dark").toggleClass("btn-outline-primary");
      $(".btn-outline-dark").toggleClass("btn-outline-dark");
    }
    else
    {
      // other buttons do not affect
    }

    if($(".navbar").hasClass("bg-dark"))
    {
      $("body").css("background-color", "#555")
    }
    else
    {
      $("body").css("background-color", "#FFF")
    }
  });
});
