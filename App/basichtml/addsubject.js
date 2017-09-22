$( document ).ready(function()
{
  _islabelSubjectOn = false;

  $( "#addsubject" ).click(function( event )
  {
    if(!_islabelSubjectOn)
    {
      _islabelSubjectOn = true;
      $( "#subject-label" ).animate({
        top: "+=1000"
        }, 500, function() {
        // Animation complete.
        });
    }
    });

    $( "#subject-valid" ).click(function( event )
    {
        _islabelSubjectOn = false;
        $( "#subject-label" ).animate({
          top: "-=1000"
          }, 500, function() {
          // Animation complete.
          });

          if($("#subject-label input").val().trim() != "")
          {
            AddSubject($("#subject-label input").val());
            $("#subject-label input").val("");
          }
      });

});

function AddSubject(subjectName)
{
  console.log("Adding " + subjectName );
  $("#subjects").append( "<li><a href=\"#\">" + subjectName + "</a></li>" )

}//AddSubject
