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
    $('#node-'+(question_node.code).toString())
    .append("<div id='node-"+ question_node_next.code +"'>" +
    "[" + question_node_next.code + "] " +
    `
    <div class="border border-top mb-2"></div>
    <span class="d-block">` +
    question_node_next.question +
    `</span>
    <div class="mb-2 radio-container">
      {% for option in question['options'] %}
      <input
        type="radio"
        name="answer"
        value="{{ escape(option) }}"
        checked> `+ "xyz" +`<br>
      {% end %}
    </div>`
    +
    "</div>");
  }

  var expand_tree_rec = function (last_node){
    if (!last_node)
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
        console.log("unknown next_yes.question_type: " +
        last_node.next_yes.question_type);
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
        console.log("unknown next_no.question_type: " +
        last_node.next_no.question_type);
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
        console.log("unknown next.question_type: " +
        last_node.next.question_type);
      }
    }
    else
    {
      console.log("other type");
    }
  }

  var question_tree_string = $("#content-container").html().replace("\n", "").replace("\\", "");

  var question_tree_json = JSON.parse(
    question_tree_string
  );

  root = question_tree_json;
  expand_tree_rec(root);
});


/*

{% for question in question_tree.items() %}
  {% if question['question_type'] == "question-binary" %}
    <div class="mb-2">
      <h5 class="d-block" mb-2>
        {{ escape(question['question']) }}
      </h5>
      <div
        class="btn-group btn-group-toggle mb-2"
        role="group"
        aria-label="Basic example"
        data-toggle="buttons">

        <label
          class="btn btn-primary"
          data-toggle="collapse"
          data-target=".multi-collapse"
          aria-expanded="false">
          <input
            type="radio"
            name="answer"
            value="Ja">
            Ja
          </input>
        </label>

        <label class="btn btn-primary">
          <input
            type="radio"
            name="answer"
            value="Nein"
            checked>
            Nein
          </input>
        </label>
      </div>

      <div class="m-2 collapse multi-collapse">
        {% for question in questions %}
          {% if question['question_type'] == "question-input" %}
            <div class="border border-top mb-2"></div>
            <h5 class="d-block">{{ escape(question['question']) }}</h5>
            <div class="input-group mb-2">
              <input
                class="form-control"
                type="text"
                placeholder="{{ escape(question['placeholder']) }}"
                name="answer">
              </input>
            </div>
          {% elif question['question_type'] == "question-options" %}
            <div class="border border-top mb-2"></div>
            <span class="d-block">{{ escape(question['question']) }}</span>
            <div class="mb-2 radio-container">
              {% for option in question['options'] %}
              <input
                type="radio"
                name="answer"
                value="{{ escape(option) }}"
                checked> {{ escape(option) }}<br>
              {% end %}
            </div>
          {% end %} <!-- if elif -->
        {% end %} <!-- for question in questions -->
      </div>
    </div>
  {% end %} <!-- if question['question_type'] == "question-binary -->
{% end %}<!-- for question in questions -->

*/
