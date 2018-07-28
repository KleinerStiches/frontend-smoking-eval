$(document).ready(function () {

  var toggle_aria_hidden = function(plain_id){
    return;
  }

  var all_button_groups = $(".btn-group-binary"); //.on("click", function(){

  for (btn_grp of all_button_groups){
    var btn_grp_id = btn_grp.id;
    if (btn_grp_id.indexOf("yes-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){
          var id_without_yes_no_tag = this.id.replace("yes-", "");
          var inverse_question = $("#no-"+id_without_yes_no_tag);
          var test_1 = inverse_question.attr("aria-expanded");

          var to_display_class = $("#no-"+id_without_yes_no_tag).attr("data-target");
          $(to_display_class).removeClass('d-none');

          // if(inverse_question.attr("aria-expanded") === true)
          if(test_1 === "true")
          {
            var to_collapse_class = $("#no-"+id_without_yes_no_tag).attr("data-target");
            $(to_collapse_class).toggleClass('d-none');
          }
      });
    }
    else if (btn_grp_id.indexOf("no-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){
        var id_without_yes_no_tag = this.id.replace("no-", "");
        var inverse_question = $("#yes-"+id_without_yes_no_tag);
        var test_2 = inverse_question.attr("aria-expanded");

        var to_display_class = $("#no-"+id_without_yes_no_tag).attr("data-target");
        $(to_display_class).removeClass('d-none');

        //if(inverse_question.attr("aria-expanded") === true)
        if(test_2 === "true")
        {
          var to_collapse_class = $("#yes-"+id_without_yes_no_tag).attr("data-target");
          $(to_collapse_class).toggleClass('d-none');
        }
      });
    }
    else
    {
        console.log("str.indexOf returns -1. does not find ");
    }
  }
});
