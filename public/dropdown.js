$(document).ready(function () {
  $('.dropdown-body').hide();
  $(".label").click(function () {
    $(".dropdown-body").slideDown("slow");
  });
  $(".fa").click(function () {
    $(".dropdown-body").slideUp("slow");
  });
});
