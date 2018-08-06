$(document).ready(function(){
  $("#switch-theme").click(function(){

    $(".list-group-item").toggleClass("list-group-item-secondary");
    $(".navbar").toggleClass("bg-dark");
    $(".border").toggleClass("border-dark");
    $("body").css("background-color", "#555")


    $(".navbar").toggleClass("bg-primary");
    $(".border").toggleClass("border-primary");

    if ($(".list-group-item").hasClass("list-group-item-primary"))
    {
      $(".list-group-item-primary").toggleClass("list-group-item-light");
      $(".list-group-item-primary").toggleClass("list-group-item-primary");
    }
    else if ($(".list-group-item").hasClass("list-group-item-light"))
    {
      $(".list-group-item-light").toggleClass("list-group-item-primary");
      $(".list-group-item-light").toggleClass("list-group-item-light");
    }
    else
    {
      // do not manipulate standard list items
    }

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
