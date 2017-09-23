$( document ).ready(function()
{
  $('[data-toggle="datepicker"]').datepicker();
  console.log($(document).width());
  console.log($("#menu").width());
  console.log($(document).width() -  $("#menu").width());
  $("#main").css("width",$(document).width()-  $("#menu").width());
  $("#main").css("margin-left",$("#menu").width());


  _is_label_subject_on = false;
  _subject_label_height = $("#subject-label").height() * 2;
  console.log("Height of subject label is " + _subject_label_height);

  $("#subject-label").css("margin-top", "-" + _subject_label_height + "px");

  $( "#addsubject" ).click(function( event )
  {
    if(!_is_label_subject_on)
    {
      _is_label_subject_on = true;
      $( "#subject-label" ).animate({
        top: "+="+_subject_label_height
        }, 500, function() {
        // Animation complete.
        });
      }
    });

    $( "#subject-valid" ).click(function( event )
    {
        _is_label_subject_on = false;
        $( "#subject-label" ).animate({
          top: "-="+_subject_label_height
          }, 500, function() {
          // Animation complete.
          });

          if($("#subject-label input").val().trim() != "")
          {
            AddSubject($("#subject-label input").val());
            $("#subject-label input").val("");
          }
      });

});//document ready

function AddSubject(subjectName)
{
  console.log("Adding " + subjectName );
  $("#subjects").append( "<li><a href=\"#\">" + subjectName + "</a></li>" )

  $("#main").append("<div class=\"subject\" id="+subjectName+"> <div class=\"subject-header\"> <h3>"+ subjectName +
  "</h3> <a class=\"addhomework\">Add homework</a><a>Delete subject</a></div> <div class=\"homeworks\">  </div> </div>");

}//AddSubject
