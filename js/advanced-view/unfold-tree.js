$(document).ready(function () {

  var build_binary_question = function (question_node, question_node_next) {
    $('#node-'+(question_node.code).toString())
    .append("<div id='node-"+ question_node_next.code +"'>" +
    "[" + question_node_next.code + "] " +
    "<h5 class='d-block' mb-2>" + question_node_next.question +
    `</h5>
    <div
      class='btn-group btn-group-toggle mb-2'
      role='group'
      aria-label='Basic example'
      data-toggle='buttons'>

      <label
        class='btn btn-primary'
        data-toggle='collapse'
        data-target='.multi-collapse'
        aria-expanded='false'>
        <input
          type='radio'
          name='answer'
          value='Ja'>
          Ja
        </input>
      </label>

      <label class='btn btn-primary'>
        <input
          type='radio'
          name='answer'
          value='Nein'
          checked>
          Nein
        </input>
      </label>
    </div>`
    +
    "</div>");
  }

  var build_input_question = function(question_node, question_node_next){
    $('#node-'+(question_node.code).toString())
    .append("<div id='node-"+ question_node_next.code +"'>" +
    "[" + question_node_next.code + "] " +
    `<div class="border border-top mb-2"></div>
    <h5 class="d-block">` +
    question_node_next.question +
    `</h5>
    <div class="input-group mb-2">
      <input
        class="form-control"
        type="text"
        placeholder=` + question_node_next.placeholder + `
        name="answer">
      </input>
    </div>
    `
    +
    "</div>");
  }

  var build_options_question = function (question_node, question_node_next) {
    options_id_counter += 1;

    $('#node-'+(question_node.code).toString())
    .append("<div id='node-"+ question_node_next.code +"'>" +
    "[" + question_node_next.code + "] " +
    `
    <div class="border border-top mb-2"></div>
    <h5 class="d-block">` +
    question_node_next.question +
    `</h5>
    <div id="radio-container-` +
    options_id_counter.toString() + '-' +
    question_node_next.code  + `" class="mb-2 radio-container">
    </div>`
    +
    "</div>");

    for (option of question_node_next.options){
      $(
        '#radio-container-'+
        options_id_counter.toString() + '-' +
        (question_node_next.code).toString())
      .append(
        `<input
          type="radio"
          name="answer"
          value="` + option + `"
          checked> `+ option +`<br>`
      );
    }
  }

  var expand_tree_rec = function (last_node){
    if(!last_node)
    {
      return;
    }
    else if(last_node.question_type === "question-binary")
    {
      // last node binary next yes section
      if(last_node.next_yes === "/acquisition")
      {
        return
      }
      else if(last_node.next_yes.question_type === "question-binary")
      {
        build_binary_question(last_node, last_node.next_yes);
        expand_tree_rec(last_node.next_yes);
      }
      else if (last_node.next_yes.question_type === "question-input")
      {
        build_input_question(last_node, last_node.next_yes);
        expand_tree_rec(last_node.next_yes);
      }
      else if (last_node.next_yes.question_type === "question-options") {
        build_options_question(last_node, last_node.next_yes);
        expand_tree_rec(last_node.next_yes);
      }
      else {
        console.log(
          "next_yes code: " + last_node.next_yes.code +
          "unknown next_yes.question_type: " +
          last_node.next_yes.question_type
        );
      }

      // last node binary next no section
      if(last_node.next_no === "/acquisition")
      {
        return
      }
      else if(last_node.next_no.question_type === "question-binary")
      {
        build_binary_question(last_node, last_node.next_no);
        expand_tree_rec(last_node.next_no);
      }
      else if (last_node.next_no.question_type === "question-input")
      {
        build_input_question(last_node, last_node.next_no);
        expand_tree_rec(last_node.next_no);
      }
      else if (last_node.next_no.question_type === "question-options") {
        build_options_question(last_node, last_node.next_no);
        expand_tree_rec(last_node.next_no);
      }
      else {
        console.log(
          "next_no code: " + last_node.next_no.code +
          "unknown next_no.question_type: " +
          last_node.next_no.question_type
        );
      }
    }
    else if (
      last_node.question_type === "question-options" ||
      last_node.question_type === "question-input"
    )
    {
      if(last_node.next === "/acquisition")
      {
        return
      }
      else if(last_node.next.question_type === "question-binary")
      {
        build_binary_question(last_node, last_node.next);
        expand_tree_rec(last_node.next);
      }
      else if(last_node.next.question_type === "question-input")
      {
        build_input_question(last_node, last_node.next);
        expand_tree_rec(last_node.next);
      }
      else if (last_node.next.question_type === "question-options")
      {
        build_options_question(last_node, last_node.next);
        expand_tree_rec(last_node.next);
      }
      else
      {
        console.log(
          "next code: " + last_node.next.code +
          "unknown next.question_type: " +
          last_node.next.question_type
        );
      }
    }
    else
    {
      console.log("other type");
    }
  }

  var options_id_counter = 0

  var question_tree_string = $("#content-container").html().replace("\n", "").replace("\\", "");

  var question_tree_json = JSON.parse(
    question_tree_string
  );

  root = question_tree_json;
  expand_tree_rec(root);
});
