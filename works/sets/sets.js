$("#First").hide();
$("#Second").hide();
$("#Third").hide();
$("#Fourth").hide();
$( "#First_Click" ).click(function() {
  if ($("#First").is(":visible") ){
    $("#First").hide();
    x=0;}
  else {
    $("#First").show("slow");
    $("#Third").hide();
    $("#Second").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#First').offset().top)
},500);
  }
});
$( "#First_Desc" ).click(function() {
  if ($("#First").is(":visible") ){
    $("#First").hide();
    x=0;}
  else {
    $("#First").show("slow");
    $("#Third").hide();
    $("#Second").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#First').offset().top)
},500);
  }
});
$( "#Second_Click" ).click(function() {
  if ($("#Second").is(":visible") ){
    $("#Second").hide();
    x=0;}
  else {
    $("#Second").show("slow");
    $("#Third").hide();
    $("#First").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Second').offset().top)
},500);
  }
});
$( "#Second_Desc" ).click(function() {
  if ($("#Second").is(":visible") ){
    $("#Second").hide();
    x=0;}
  else {
    $("#Second").show("slow");
    $("#Third").hide();
    $("#First").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Second').offset().top)
},500);
  }
});
$( "#Third_Click" ).click(function() {
  if ($("#Third").is(":visible") ){
    $("#Third").hide();
    x=0;}
  else {
    $("#Third").show("slow");
    $("#Second").hide();
    $("#First").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Third').offset().top)
},500);
  }
});
$( "#Third_Desc" ).click(function() {
  if ($("#Third").is(":visible") ){
    $("#Third").hide();
    x=0;}
  else {
    $("#Third").show("slow");
    $("#Second").hide();
    $("#First").hide();
    $( "#Fourth" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Third').offset().top)
},500);
  }
});
$( "#Fourth_Click" ).click(function() {
  if ($("#Fourth").is(":visible") ){
    $("#Fourth").hide();
    x=0;}
  else {
    $("#Fourth").show("slow");
    $("#Third").hide();
    $("#First").hide();
    $( "#Second" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Fourth').offset().top)
},500);
  }
});
$( "#Fourth_Desc" ).click(function() {
  if ($("#Fourth").is(":visible") ){
    $("#Fourth").hide();
    x=0;}
  else {
    $("#Fourth").show("slow");
    $("#Third").hide();
    $("#First").hide();
    $( "#Second" ).hide();
    x=1;
    $('html, body').animate({
    scrollTop: ($('#Fourth').offset().top)
},500);
  }
});