
var add_switch_to_binary_questions = function() {

  $(".btn-group-binary").each(function(){

    $(this).on("click", function(){

      var id_without_yes_no_tag = "";
      var question_collapse_target = $(this).attr("data-target");
      var inverse_question_collapse_target = "";

      if(this.id.indexOf("yes-") >= 0)
      {
        id_without_yes_no_tag = this.id.replace("yes-", "");
        inverse_question_collapse_target =
          $("#no-"+id_without_yes_no_tag).attr("data-target");
      }
      else
      {
        id_without_yes_no_tag = this.id.replace("no-", "");
        inverse_question_collapse_target =
          $("#yes-"+id_without_yes_no_tag).attr("data-target");
      }


      var numeric_id_part = "";
      if(inverse_question_collapse_target.indexOf(".multicollapse-") < 0)
      {
        numeric_id_part =
        question_collapse_target.replace(".multicollapse-", "")
          .replace(".", "") +
        inverse_question_collapse_target.replace(".multicollapse-", "")
          .replace(".", "");
      }
      else
      {
        numeric_id_part =
          inverse_question_collapse_target.replace(".multicollapse-", "")
          .replace(".", "");
      }

      if(question_collapse_target.indexOf(".multicollapse-") < 0)
      {
        var multicollase_target = ".multicollapse-" + numeric_id_part;
        $(this).attr("data-target", multicollase_target);
        $(question_collapse_target).addClass(
          multicollase_target.replace(".", "")
        );
      }


      if(this.id.indexOf("yes-") >= 0)
      {

        id_without_yes_no_tag = this.id.replace("yes-", "");
        if ($("#no-"+id_without_yes_no_tag).hasClass("disabled-switch"))
        {
          $("#no-"+id_without_yes_no_tag).removeClass("disabled-switch");
        }

        $(this).addClass("disabled-switch");

      }
      else
      {

        id_without_yes_no_tag = this.id.replace("no-", "");
        if ($("#yes-"+id_without_yes_no_tag).hasClass("disabled-switch"))
        {
          $("#yes-"+id_without_yes_no_tag).removeClass("disabled-switch");
        }

        $(this).addClass("disabled-switch");

      }


    });

  });

}
