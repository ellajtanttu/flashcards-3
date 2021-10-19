$(document).ready(function() {
  $("#js").click(function() {
    $("#js").toggle();
    $("#js-text").toggle();
  });

  $("#js-text").click(function() {
    $("#js-text").hide();
    $("#js").show();
  });

  $("#jq").click(function() {
    $("#jq").toggle();
    $("#jq-text").toggle();
  });

  $("#jq-text").click(function() {
    $("#jq-text").hide();
    $("#jq").show();
  });

  $("#fc").click(function() {
    $("#fc").toggle();
    $("#fc-text").toggle();
  });

  $("#fc-text").click(function() {
    $("#fc-text").hide();
    $("#fc").show();
  });

  $("#ar").click(function() {
    $("#ar").toggle();
    $("#ar-text").toggle();
  });

  $("#ar-text").click(function() {
    $("#ar-text").hide();
    $("#ar").show();
  });

  $("#op").click(function() {
    $("#op").toggle();
    $("#op-text").toggle();
  });

  $("#op-text").click(function() {
    $("#op-text").hide();
    $("#op").show();
  });

  $("#pr").click(function() {
    $("#pr").toggle();
    $("#pr-text").toggle();
  });

  $("#pr-text").click(function() {
    $("#pr-text").hide();
    $("#pr").show();
  });

  $("#bo").click(function() {
    $("#bo").toggle();
    $("#bo-text").toggle();
  });

  $("#bo-text").click(function() {
    $("#bo-text").hide();
    $("#bo").show();
  });
  
  $("#nu").click(function() {
    $("#nu").toggle();
    $("#nu-text").toggle();
  });

  $("#nu-text").click(function() {
    $("#nu-text").hide();
    $("#nu").show();
  });

  $("#al").click(function() {
    $("#al").toggle();
    $("#al-text").toggle();
  });

  $("#al-text").click(function() {
    $("#al-text").hide();
    $("#al").show();
  });

  $("#rt").click(function() {
    $("#rt").toggle();
    $("#rt-text").toggle();
  });

  $("#rt-text").click(function() {
    $("#rt-text").hide();
    $("#rt").show();
  });

  $("#var").click(function() {
    $("#var").toggle();
    $("#var-text").toggle();
  });

  $("#var-text").click(function() {
    $("#var-text").hide();
    $("#var").show();
  });

  $("#na").click(function() {
    $("#na").toggle();
    $("#na-text").toggle();
  });

  $("#na-text").click(function() {
    $("#na-text").hide();
    $("#na").show();
  });

  //buttons:
  $("#allD").click(function() {
    $(".card-title").hide();
    $(".card-text").show();
  });

  $("#allT").click(function() {
    $(".card-text").hide();
    $(".card-title").show();
  });
});