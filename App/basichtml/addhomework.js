$(document).ready(function()
{

  var _is_resources_on = false;
  //On place le formulaire de nouveau devoir hors de vue
  $("#homework-label").css("margin-left",  $( window ).width() + "px");

//Au clic sur le + d'une matière
  $(document).on('click', ".subject-header a:first-of-type", function(event)
  {
    //On affiche le formulairede nouveau devoir
      ShowHomeworkLabel($(event.target).parent().parent().parent().attr("id"));
  });

  //Au clic sur le header d'une matière
  $(document).on('click', ".subject-header", function(event)
  {
    if(_is_mobile)
    {
      //Si on n'a pas cliqué sur le bouton de suppression ou ressources
      if($(event.target).parent().attr("class") != "delete-subject" && $(event.target).parent().attr("class") != "show-resources")
      {
        //On affiche le formulaire de nouveau devoir
        ShowHomeworkLabel($(event.target).parent().attr("id"));
      }
    }

  });

//Au clic sur le bouton de suppression de devoir
  $(document).on('click', ".delete-homework", function(event)
  {
    //On enlève la section de devoirs
      $(event.target).parent().parent().remove();
  });

//Au clic sur le bouton de ressources
  $(document).on('click', ".subject-header .show-resources", function(event)
  {
    //On affiche les ressources
    console.log("clicked resources");
    if(_is_mobile)
    {
      console.log("Showing resources");
      $("#m-resources").css("display", "block");
    }
    else
    {
      if(_is_resources_on)
      {
        _is_resources_on= false;
        //$(event.target).parent().parent().parent().detach($("#resources"));
        $("#resources").css("display", "none");
      }
      else
      {
        _is_resources_on = true;
        $(event.target).parent().parent().parent().prepend($("#resources"));
        $("#resources").css("display", "block");
      }

    }
  });

  //A l'apui sur le boutonde fermeture de ressources
  $(document).on('click', "#close-resources", function(event)
  {
    //On cache les ressources
      $("#m-resources").css("display", "none");
  });

//A la validation du formulaire de devoir
  $( "#homework-valid" ).click(function( event )
  {
    //On cache le formulaire de nouveau devoir
      HideHomeworkLabel();
      //Si les champs sont valides
        if($("#homework-label input").val().trim() != "" && $("#homework-label textarea").val().trim() != "")
        {
          //On ajoute le devoir à la matière correspondante
          AddHomework($("#homework-label input").val(), $("#homework-label textarea").val());
          $("#homework-label input").val("");
          $("#homework-label textarea").val("");
        }
    });

    function AddHomework(homework, date)
    {
      //On ajoute la section du nouveau devoir
        $( "#" + $("#homework-label").data("subject") + " .homeworks").append("<div class=\"homework\"> "+ homework +", "+ date +"<a class=\"delete-homework\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a></div>");
    }//AddHomework()

    function ShowHomeworkLabel(subject)
    {
      //On précise la matière dans le formulaire de nouveau devoir
      $("#homework-label h4").text("New homework in " + subject);
      $("#homework-label").data("subject", subject);
      if(_is_mobile)
      {
        //On montre le formulaire de nouveau devoir
        //Sa largeur vaut tout l'écran
        $( "#homework-label" ).animate({
          marginLeft: "0"
          }, 500, function() {
            });
      }
      else
      {
        //On montre le formulaire de nouveau devoir
        //Cette fois, la largeur est plus réduite
        $( "#homework-label" ).animate({
          marginLeft: $("#menu").width()
          }, 500, function() {
            });
      }
    }//ShowHomeworkLabel()

    function HideHomeworkLabel()
    {
      //On cache le formulaire de nouveau devoir
      $( "#homework-label" ).animate({
        marginLeft: $( window ).width()
        }, 500, function() {
          });
    }

});//document.ready()
