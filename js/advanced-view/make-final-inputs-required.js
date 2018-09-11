var attach_required_to_answers = function () {
  $("input").attr("required", false);

  // make the answers of the active branch in the answer tree required
  var required_inputs = $(
    `input:not(.not-active-answer):not(#advanced-interview-post-button)`
  );

  required_inputs.attr("required", true);
}
