$(document).ready(function()
{

  $("#homework-label").css("margin-left",  $( window ).width() + "px");

  $(document).on('click', ".subject-header a:first-of-type", function(event)
  {
      console.log($(event.target).parent().parent().attr("id"));
      ShowHomeworkLabel($(event.target).parent().parent().attr("id"));
  });

  $( "#homework-valid" ).click(function( event )
  {
      HideHomeworkLabel();

        if($("#homework-label input").val().trim() != "")
        {
          AddHomework($("#homework-label input").val());
          $("#homework-label input").val("");
        }
    });

    function AddHomework(homework)
    {
        console.log("Trying to add " + homework + "in " + $("#homework-label").data("subject"));
        $( "#" + $("#homework-label").data("subject") + " .homeworks").append("<div class=\"homework\"> "+ homework+"</div>");
    }

    function ShowHomeworkLabel(subject)
    {
      $("#homework-label h4").text("New homework in " + subject);
      $("#homework-label").data("subject", subject);
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
