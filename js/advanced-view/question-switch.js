//$(document).ready(function () {

var add_switch_handlers = function() {

  var toggle_aria_hidden = function(plain_id){
    return;
  }

  var all_button_groups = $(".btn-group-binary");

  for (btn_grp of all_button_groups){
    var btn_grp_id = btn_grp.id;
    if (btn_grp_id.indexOf("yes-") >= 0) {
      // TODO remove for test reason only
      console.log(" ");
      console.log("########################## yes ########################");
      console.log("parents id:" + btn_grp.parentNode.id);
      console.log("id: " + btn_grp.id);
      console.log($("#" + btn_grp_id).attr("data-target"));
      console.log(btn_grp);
      var cani_select = $("#" + btn_grp_id);

      if(btn_grp.parentNode.id.indexOf("100") >= 0 )
      {
        try{
          $("#" + btn_grp_id).click( function(){console.log("dummy 100 yes");});
        } catch(e){
          console.log("##################");
          console.log("##################");
          console.log("##################");
          console.log(e.message);
          console.log("##################");
          console.log("##################");
          console.log("##################");
        }
      }


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

            if(question_collapse_target === multicollase_target && inverse_question_collapse_target !== question_collapse_target)
            {
              var multicollase_target = question_collapse_target;
              $(inverse_question_collapse_target).addClass(multicollase_target.replace(".", ""));
              if($("#no-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
              {
                $("#no-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
              }
            }

            if(question_collapse_target !== multicollase_target)
            {
              $(question_collapse_target).addClass(multicollase_target.replace(".", ""));
              if($("#yes-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
              {
                $("#yes-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
              }
            }
          }
      });
    }
    else if (btn_grp_id.indexOf("no-") >= 0) {
      // TODO remove for test reason only
      var cani_select = $("#" + btn_grp_id);
      console.log(" ");
      console.log("########################## no ########################");
      console.log("parents id:" + btn_grp.parentNode.id);
      console.log("id: " + btn_grp.id);
      console.log($("#" + btn_grp_id).attr("data-target"));
      console.log(btn_grp);

      if(btn_grp.parentNode.id.indexOf("100") >= 0 )
      {
        try{
          $("#" + btn_grp_id).click( function(){console.log("dummy 100 no");});
        } catch(e){
          console.log("##################");
          console.log("##################");
          console.log("##################");
          console.log(e.message);
          console.log("##################");
          console.log("##################");
          console.log("##################");
        }
      }

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

          if(question_collapse_target === multicollase_target && inverse_question_collapse_target !== question_collapse_target)
          {
            var multicollase_target = question_collapse_target;
            $(inverse_question_collapse_target).addClass(multicollase_target.replace(".", ""));
            if($("#yes-"+id_without_yes_no_tag).attr("data-target") !== multicollase_target)
            {
              $("#yes-"+id_without_yes_no_tag).attr("data-target", multicollase_target)
            }
          }

          if(question_collapse_target !== multicollase_target)
          {
            $(question_collapse_target).addClass(multicollase_target.replace(".", ""));
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

}
//});
