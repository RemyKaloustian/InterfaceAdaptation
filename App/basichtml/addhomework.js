$(document).ready(function()
{

  $("#homework-label").css("margin-left",  $( window ).width() + "px");
//adding homework
  $(document).on('click', ".subject-header a:first-of-type", function(event)
  {
      console.log($(event.target).parent().parent().parent().attr("id"));
      ShowHomeworkLabel($(event.target).parent().parent().parent().attr("id"));
  });

  $(document).on('click', ".subject-header", function(event)
  {
    if(_is_mobile)
    {
      if($(event.target).parent().attr("class") != "delete-subject" && $(event.target).parent().attr("class") != "show-resources")
      {
        console.log($(event.target).parent().attr("class"));
        //console.log($(event.target).parent().attr("id"));
        ShowHomeworkLabel($(event.target).parent().attr("id"));
      }
    }

  });
//deleting homework
  $(document).on('click', ".delete-homework", function(event)
  {
      $(event.target).parent().parent().remove();
  });

//showing resources
  $(document).on('click', ".subject-header .show-resources", function(event)
  {
      $("#resources").css("display", "block");
  });

  //closing resources
  $(document).on('click', "#close-resources", function(event)
  {
      $("#resources").css("display", "none");
  });

  $( "#homework-valid" ).click(function( event )
  {
      HideHomeworkLabel();

        if($("#homework-label input").val().trim() != "" && $("#homework-label textarea").val().trim() != "")
        {
          AddHomework($("#homework-label input").val(), $("#homework-label textarea").val());
          $("#homework-label input").val("");
          $("#homework-label textarea").val("");
        }
    });

    function AddHomework(homework, date)
    {
        console.log("Trying to add " + homework + "in " + $("#homework-label").data("subject"));
        $( "#" + $("#homework-label").data("subject") + " .homeworks").append("<div class=\"homework\"> "+ homework +", "+ date +"<a class=\"delete-homework\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a></div>");
    }

    function ShowHomeworkLabel(subject)
    {
      $("#homework-label h4").text("New homework in " + subject);
      $("#homework-label").data("subject", subject);
      if(_is_mobile)
      {
        $( "#homework-label" ).animate({
          marginLeft: "0"
          }, 500, function() {
          // Animation complete.
          });
      }
      else
      {
        $( "#homework-label" ).animate({
          marginLeft: $("#menu").width()
          }, 500, function() {
          // Animation complete.
          });
      }
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
