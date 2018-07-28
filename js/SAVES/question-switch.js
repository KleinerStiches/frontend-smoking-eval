$(document).ready(function () {

  var toggle_aria_hidden = function(plain_id){
    return;
  }

  var all_button_groups = $(".btn-group-binary"); //.on("click", function(){

  for (btn_grp of all_button_groups){
    var btn_grp_id = btn_grp.id;
    if (btn_grp_id.indexOf("yes-") >= 0) {
      var id_without_yes_no_tag = btn_grp_id.replace("yes-", "");
      $("#" + btn_grp_id).on("click", function(){
          var inverse_question = $("#no-"+id_without_yes_no_tag);
          var test_1 = inverse_question.attr("aria-expanded");
          if(inverse_question.attr("aria-expanded") === true)
          {
            $("#no-"+id_without_yes_no_tag).attr("aria-expanded", false);
            $("#yes-"+id_without_yes_no_tag).attr("aria-expanded", true);
          }
          // TODO else and in the else check if both are not expanded then just set expand to the clicked one
      });
    }
    else if (btn_grp_id.indexOf("no-") >= 0) {
      var id_without_yes_no_tag = btn_grp_id.replace("no-", "");
      $("#" + btn_grp_id).on("click", function(){
        var inverse_question = $("#yes-"+id_without_yes_no_tag);
        var test_2 = inverse_question.attr("aria-expanded");
        if(inverse_question.attr("aria-expanded") === true)
        {
          $("#yes-"+id_without_yes_no_tag).attr("aria-expanded", false);
          $("#no-"+id_without_yes_no_tag).attr("aria-expanded", true);
          // TODO else and in the else check if both are not expanded then just set expand to the clicked one
        }
      });
    }
    else
    {
        console.log("str.indexOf returns -1. does not find ");
    }

  }





});
