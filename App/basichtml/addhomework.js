$(document).ready(function()
{

  $("#homework-label").css("margin-left",  $( window ).width() + "px");

  $(document).on('click', ".subject-header a:first-of-type", function()
  {
      ShowHomeworkLabel();
  });

  $( "#homework-valid" ).click(function( event )
  {
      HideHomeworkLabel();

        if($("#homework-label input").val().trim() != "")
        {
          //AddSubject($("#subject-label input").val());
          //$("#subject-label input").val("");
        }
    });

    function ShowHomeworkLabel()
    {
      $( "#homework-label" ).animate({
        marginLeft: "0"
        }, 500, function() {
        // Animation complete.
        });
    }

    function HideHomeworkLabel()
    {
      $( "#homework-label" ).animate({
        marginLeft: $( window ).width()
        }, 500, function() {
        // Animation complete.
        });
    }

});
