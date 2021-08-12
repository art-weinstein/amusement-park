$(document).ready(function() {
  $("#height").submit(function(event) {
    event.preventDefault();
    const feet = parseInt($("#ftHeight").val());
    const inches = parseInt($("#inHeight").val());

    if (feet >= 5 && inches >= 4) {
      $("#big-ride").show();
      $("#medium-ride").show();
      $("small-ride").hide();
    } else if (feet >= 6 && inches >= 0) {
      $("#big-ride").show();
      $("#medium-ride").show();
      $("small-ride").hide();
    } else {
      $("#big-ride").hide();
      $("#medium-ride").hide();
      $("#small-ride").show();
    }
  });
});