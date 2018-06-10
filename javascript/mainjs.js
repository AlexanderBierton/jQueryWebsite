$(function() {
  $(".navbar").tabs();


  var availableTags = [
    "My Mailbox",
    "Personal Details",
    "My Benefit Statement",
    "Contact Us",
    "Scheme Information",
    "Retirement Planner",
    "My Deferred benefits"
  ];
  $( ".tags" ).autocomplete({
    source: availableTags
  });


});

function makejQuery(jType) {
  switch(jType) {

    case "Accordion":
      $(".test-accordion").accordion();
    break;

    case "Slider":
      $( ".slider-range-max" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
        }
      });
      $( "#amount" ).val( $( ".slider-range-max" ).slider( "value" ) );
    break;

    case "Tabs":
      $(".tabs").tabs();
    break;

    case "Draggable":
      $(".draggable").draggable();
    break;

    case "Sortable":
      $(".sortable").sortable();
      $(".sortable").disableSelection();
    break;
  }
}
