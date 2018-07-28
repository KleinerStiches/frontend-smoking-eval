$(document).ready(function () {

  var toggle_aria_hidden = function(plain_id){
    return;
  }

  var all_button_groups = $(".btn-group-binary");

  for (btn_grp of all_button_groups){
    var btn_grp_id = btn_grp.id;
    if (btn_grp_id.indexOf("yes-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){

          var id_without_yes_no_tag = this.id.replace("yes-", "");
          var question_collapse_target = $("#yes-"+id_without_yes_no_tag).attr("data-target");
          var inverse_question_collapse_target = $("#no-"+id_without_yes_no_tag).attr("data-target");

          var id_for_yes_and_no_so_can_toggle_when_set_once = "";
          if(inverse_question_collapse_target.indexOf(".multicollapse-") < 0)
          {
            id_for_yes_and_no_so_can_toggle_when_set_once =
            question_collapse_target.replace(".multicollapse-", "").replace(".", "") +
            inverse_question_collapse_target.replace(".multicollapse-", "").replace(".", "");
          }
          else
          {
            id_for_yes_and_no_so_can_toggle_when_set_once = inverse_question_collapse_target.replace(".multicollapse-", "").replace(".", "");
          }

          if(question_collapse_target.indexOf(".multicollapse-") < 0)
          {
            var multicollase_target = ".multicollapse-" + id_for_yes_and_no_so_can_toggle_when_set_once;

            // if one brach already has
            if(question_collapse_target === multicollase_target && inverse_question_collapse_target !== question_collapse_target)
            {
              var multicollase_target = question_collapse_target;

              $(inverse_question_collapse_target).addClass(multicollase_target.replace(".", ""));

              var test2 = $("#no-"+id_without_yes_no_tag).attr("data-target");
              if($("#no-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
              {
                $("#no-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
              }
            }

            // when pressed a button once check if the multicollapsed class was NOT set already
            if(!(question_collapse_target === multicollase_target))
            {
              // add the multiclass to all the elements with the no-id as well as all with the yes-id tag
              // and add the multicollapse class to them
              $(question_collapse_target).addClass(multicollase_target.replace(".", ""))

              // add class as new data target to both answer buttons
              var test1 = $("#yes-"+id_without_yes_no_tag).attr("data-target");
              if($("#yes-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
              {
                $("#yes-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
              }
            }
          }
      });
    }
    else if (btn_grp_id.indexOf("no-") >= 0) {
      $("#" + btn_grp_id).on("click", function(){

        var id_without_yes_no_tag = this.id.replace("no-", "");
        var question_collapse_target = $("#no-"+id_without_yes_no_tag).attr("data-target");
        var inverse_question_collapse_target = $("#yes-"+id_without_yes_no_tag).attr("data-target");

        var id_for_yes_and_no_so_can_toggle_when_set_once = "";
        if(inverse_question_collapse_target.indexOf(".multicollapse-") < 0)
        {
          var id_for_yes_and_no_so_can_toggle_when_set_once =
          question_collapse_target.replace(".multicollapse-", "").replace(".", "") +
          inverse_question_collapse_target.replace(".multicollapse-", "").replace(".", "");
        }
        else
        {
          id_for_yes_and_no_so_can_toggle_when_set_once = inverse_question_collapse_target.replace(".multicollapse-", "").replace(".", "");
        }

        if(question_collapse_target.indexOf(".multicollapse-") < 0)
        {
          var multicollase_target = ".multicollapse-" + id_for_yes_and_no_so_can_toggle_when_set_once;

          // if one brach already has
          if(question_collapse_target === multicollase_target && inverse_question_collapse_target !== question_collapse_target)
          {
            var multicollase_target = question_collapse_target;
            $(inverse_question_collapse_target).addClass(multicollase_target.replace(".", ""));

            var test3 = $("#yes-"+id_without_yes_no_tag).attr("data-target");
            if($("#yes-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
            {
              $("#yes-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
            }
          }

          // when pressed a button once check if the multicollapsed class was NOT set already
          if(!(question_collapse_target === multicollase_target))
          {
            // add the multiclass to all the elements with the no-id as well as all with the yes-id tag
            // and add the multicollapse class to them
            $(question_collapse_target).addClass(multicollase_target.replace(".", ""))

            // add class as new data target to both answer buttons
            var test4 = $("#no-"+id_without_yes_no_tag).attr("data-target");
            if($("#no-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
            {
              $("#no-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
            }
          }
        }
      });
    }
    else
    {
        console.log("str.indexOf returns -1. does not find ");
    }
  }
});
