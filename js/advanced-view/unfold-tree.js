$(document).ready(function () {

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
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_yes.code +"'>" +
        "[" + last_node.next_yes.code + "] " +
        "<h5 class='d-block' mb-2>" + last_node.next_yes.question +
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
        expand_tree_rec(last_node.next_yes);
      }
      else if (last_node.next_yes.question_type === "question-input")
      {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_yes.code +"'>" +
        "[" + last_node.next_yes.code + "] " +
        `<div class="border border-top mb-2"></div>
        <h5 class="d-block">` +
        last_node.next_yes.question +
        `</h5>
        <div class="input-group mb-2">
          <input
            class="form-control"
            type="text"
            placeholder=` + last_node.next_yes.placeholder + `
            name="answer">
          </input>
        </div>
        `
        +
        "</div>");
        expand_tree_rec(last_node.next_yes);
      }
      else if (last_node.next_yes.question_type === "question-options") {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_yes.code +"'>" +
        "[" + last_node.next_yes.code + "] " +
        `
        <div class="border border-top mb-2"></div>
        <span class="d-block">` +
        last_node.next_yes.question +
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
        // TODO append all options to the radio-container
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
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_no.code +"'>" +
        "[" + last_node.next_no.code + "] " +
        "<h5 class='d-block' mb-2>" + last_node.next_no.question +
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
        expand_tree_rec(last_node.next_no);
      }
      else if (last_node.next_no.question_type === "question-input")
      {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_no.code +"'>" +
        "[" + last_node.next_no.code + "] " +
        `<div class="border border-top mb-2"></div>
        <h5 class="d-block">` +
        last_node.next_no.question +
        `</h5>
        <div class="input-group mb-2">
          <input
            class="form-control"
            type="text"
            placeholder=` + last_node.next_no.placeholder + `
            name="answer">
          </input>
        </div>
        `
        +
        "</div>");
        expand_tree_rec(last_node.next_no);
      }
      else if (last_node.next_no.question_type === "question-options") {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next_no.code +"'>" +
        "[" + last_node.next_no.code + "] " +
        `
        <div class="border border-top mb-2"></div>
        <span class="d-block">` +
        last_node.next_no.question +
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
        // TODO append all options to the radio-container
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
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next.code +"'>" +
        "[" + last_node.next.code + "] " +
        "<h5 class='d-block' mb-2>" + last_node.next.question +
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
        expand_tree_rec(last_node.next);
      }
      else if(last_node.next.question_type === "question-input")
      {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next.code +"'>" +
        "[" + last_node.next.code + "] " +
        `<div class="border border-top mb-2"></div>
        <h5 class="d-block">` +
        last_node.next.question +
        `</h5>
        <div class="input-group mb-2">
          <input
            class="form-control"
            type="text"
            placeholder=` + last_node.next.placeholder + `
            name="answer">
          </input>
        </div>
        `
        +
        "</div>");
        expand_tree_rec(last_node.next);
      }
      else if (last_node.next.question_type === "question-options")
      {
        $('#node-'+(last_node.code).toString())
        .append("<div id='node-"+ last_node.next.code +"'>" +
        "[" + last_node.next.code + "] " +
        `
        <div class="border border-top mb-2"></div>
        <span class="d-block">` +
        last_node.next.question +
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
        // TODO append all options to the radio-container
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
