var attach_required_to_answers = function () {
  $("input").attr("required", false);

  // make the answers of the active branch in the answer tree required
  var required_inputs = $(
    `input:not(.not-active-answer):not(#advanced-interview-post-button):not(
     #script-triggered-form-post)`
  );

  console.log(required_inputs);

  required_inputs.attr("required", true);

  $('#script-triggered-form-post').trigger('click');
}
