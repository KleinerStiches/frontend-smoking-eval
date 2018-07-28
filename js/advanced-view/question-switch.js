$(document).ready(function () {

  var toggle_aria_hidden = function(plain_id){
    return;
  }

  var all_button_groups = $(".btn-group-binary"); //.on("click", function(){

  for (btn_grp of all_button_groups){
    var btn_grp_id = btn_grp.id;
    if (btn_grp_id.indexOf("yes-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){
          //var id_without_yes_no_tag = this.id.replace("yes-", "");
          //var inverse_question = $("#no-"+id_without_yes_no_tag);
          //var to_collapse_class = $("#no-"+id_without_yes_no_tag).attr("data-target");
          //$(to_collapse_class).collapse();

          var id_without_yes_no_tag = this.id.replace("yes-", "");
          var question_collapse_target = $("#yes-"+id_without_yes_no_tag).attr("data-target");
          var inverse_question_collapse_target = $("#no-"+id_without_yes_no_tag).attr("data-target");
          var id_for_yes_and_no_so_can_toggle_when_set_once = question_collapse_target + inverse_question_collapse_target;
          // when pressed a button once check if the multicollapsed class was NOT set already
          if(!(this.attr("data-target") === "multicollapse-"+id_for_yes_and_no_so_can_toggle_when_set_once)))
          {
            // add the multiclass to all the elements with the no-id as well as all with the yes-id tag
            // and add the multicollapse class to them

            $(question_collapse_target)
            .addClass("multicollapse-"+id_for_yes_and_no_so_can_toggle_when_set_once)
            $(inverse_question_collapse_target)
            .addClass("multicollapse-"+id_for_yes_and_no_so_can_toggle_when_set_once);

            // add class as new data target to both answer buttons
            $("#yes-"+id_without_yes_no_tag).attr("data-target", id_for_yes_and_no_so_can_toggle_when_set_once)
            $("#no-"+id_without_yes_no_tag).attr("data-target", id_for_yes_and_no_so_can_toggle_when_set_once)
          }

      });
    }
    else if (btn_grp_id.indexOf("no-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){


        @TODO like above


        var id_without_yes_no_tag = this.id.replace("no-", "");
        //var inverse_question = $("#yes-"+id_without_yes_no_tag);
        var to_collapse_class = $("#yes-"+id_without_yes_no_tag).attr("data-target");
        $(to_collapse_class).collapse();
      });
    }
    else
    {
        console.log("str.indexOf returns -1. does not find ");
    }
  }
});
