
var add_answer_clean_up_to_submit_button = function(){

  $("#advanced-interview-post-button").on("click", function(){

    // mark all input with not-active-answer
    $("input:not(#advanced-interview-post-button)").addClass("not-active-answer");

    // bubble down the answer tree and all inuts found remove the class
    var first_question = $("#node-root > div")[0];
    rec_follow_answer_branch(first_question);

    // all input with class not-active-answer remove value and checked
    $("input.not-active-answer").val("").attr("checked", false);

  });

}


var rec_follow_answer_branch = function(question_div) {

    var question_node = $(question_div);
    if (question_node.hasClass('question-binary'))
    {
      var question_code = $(question_div).find(
        "label[for=answer-code-" + question_div.id.replace("node-", "") + "]"
      ).text().replace("\n", "").trim();

      var answer_code_id = question_code + "-" +
      question_div.id.replace("node-", "");

      var answer = $("input[name=" + answer_code_id +
      "]:checked").val();
      // if answer yes rec_follow_answer_branch mit id mach extra
      if (answer === "Ja")
      {
        $("input[name=" + answer_code_id + "]").removeClass("not-active-answer");
        var next_question_div_id = $(question_div).find(
          "label[for=next-yes-id-" + question_div.id.replace("node-", "") +"]"
        ).text().replace("\n", "").trim();
        if (next_question_div_id !== "acquisition") {
          var next_question_node = $("#node-"+next_question_div_id)[0];
          rec_follow_answer_branch(next_question_node);
        }

        $("input[name=" + answer_code_id + "]").attr("name", question_code);
      }
      else if (answer === "Nein")
      {
        $("input[name=" + answer_code_id + "]").removeClass("not-active-answer");
        var next_question_div_id = $(question_div).find(
          "label[for=next-no-id-" + question_div.id.replace("node-", "") + "]"
        ).text().replace("\n", "").trim();
        if (next_question_div_id !== "acquisition") {
          var next_question_node = $("#node-"+next_question_div_id)[0];
          rec_follow_answer_branch(next_question_node);
        }

        $("input[name=" + answer_code_id + "]").attr("name", question_code);
      }
      else
      {
        console.log("no answer given");
      }
    }
    else if (question_node.hasClass('question-input'))
    {
      var question_code = $(question_div).find(
        "label[for=answer-code-" + question_div.id.replace("node-", "") + "]"
      ).text().replace("\n", "").trim();

      var answer_code_id = question_code + "-" +
      question_div.id.replace("node-", "");

      $("input[name=" + answer_code_id +
      "]").removeClass("not-active-answer");

      var next_question_div_id = $(question_div).find(
        "label[for=next-id-" + question_div.id.replace("node-", "") + "]"
      ).text().replace("\n", "").trim();;

      if (next_question_div_id !== "acquisition") {
        var next_question_node = $("#node-"+next_question_div_id)[0];
        rec_follow_answer_branch(next_question_node);
      }

      $("input[name=" + answer_code_id + "]").attr("name", question_code);
    }
    else if (question_node.hasClass('question-options'))
    {
      var question_code = $(question_div).find(
        "label[for=answer-code-" + question_div.id.replace("node-", "") + "]"
      ).text().replace("\n", "").trim();

      var answer_code_id = question_code + "-" +
      question_div.id.replace("node-", "");

      $("input[name=" + answer_code_id +
      "]").removeClass("not-active-answer");

      var next_question_div_id = $(question_div).find(
        "label[for=next-id-" + question_div.id.replace("node-", "") + "]"
      ).text().replace("\n", "").trim();;

      if (next_question_div_id !== "acquisition") {
        var next_question_node = $("#node-"+next_question_div_id)[0];
        rec_follow_answer_branch(next_question_node);
      }

      $("input[name=" + answer_code_id + "]").attr("name", question_code);
    }
    else
    {
      console.log("question type unknown");
    }

}
