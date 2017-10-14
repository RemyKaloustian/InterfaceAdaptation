//Les couleurs de fond des matières sont prises aléatoirement parmi les couleurs suivantes
var color_set=[];//le tableau de couleurs
var red = {p:"#F44336", s:"#EF9A9A"};
var pink = {p:"#E91E63", s:"#F48FB1"};
var purple = {p:"#9C27B0", s:"#CE93D8"};
var deep_purple = {p:"#673AB7", s:"#B39DDB"};
var indigo = {p:"#3F51B5", s:"#9FA8DA"};
var blue = {p:"#2196F3", s:"#90CAF9"};
var teal = {p:"#009688", s:"#80CBC4"};
var cyan = {p:"#00BCD4", s:"#80DEEA"};
var green = {p:"#4CAF50", s:"#A5D6A7"};
var lime = {p:"#CDDC39", s:"#E6EE9C"};
var brown = {p:"#795548", s:"#BCAAA4"};
var deep_orange = {p:"#FF5722", s:"#FFAB91"};

//on ajoute les couleurs au tableau
color_set.push(red);
color_set.push(pink);
color_set.push(purple);
color_set.push(deep_purple);
color_set.push(indigo);
color_set.push(blue);
color_set.push(teal);
color_set.push(cyan);
color_set.push(green);
color_set.push(lime);
color_set.push(brown);
color_set.push(deep_orange);





$( document ).ready(function()
{
  $('[data-toggle="datepicker"]').datepicker();//initialisation du datepicker
  //la largeur du contenu est la largeur de la fenêtre moins la largeur du menu
  $("#main").css("width",$(document).width()-  $("#menu").width());
  //On écarte le contenu de "la largeur du menu"
  $("#main").css("margin-left",$("#menu").width());
  //permet de savoir si le formulaire de nouvelle matière est affiché
  _is_label_subject_on = false;
  //On stocke la hauteur du formulaire de nouvelle matière
  _subject_label_height = $("#subject-label").height() * 2;
 //pour pouvoir lui mettre un margin de - sa hauteur (comme ça il est en dehors de l'affichage)
  $("#subject-label").css("margin-top", "-" + _subject_label_height + "px");
  if(!_is_mobile)
  {
    //si on n'est pas sur mobile, le formulaire de nouvelle matière est poussée à droite de "la largeur du menu"
    $("#subject-label").css("margin-left", $("#menu").width());
  }

//Au clic sur le bouton d'ajout de matière
  $( "#addsubject" ).click(function( event )
  {
    //Si on a pas déjà affiché le formulaire de nouvelle matière
    if(!_is_label_subject_on)
    {
      _is_label_subject_on = true;
      //on fait bouger le formulaire de nouvelle matière en bas pour l'afficher
      $( "#subject-label" ).animate({
        top: "+="+_subject_label_height
        }, 500, function() {
        });
      }
    });//click()

    //Au clic sur le bouton d'ajout de matière, sur mobile
    $("#m-add-subject").click(function( event )
    {
        ShowNewSubjectLabel();
    });

//A la validation du formulaire denouvelle matière
    $( "#subject-valid" ).click(function( event )
    {
        _is_label_subject_on = false;
        //On cache le formulaire
        $( "#subject-label" ).animate({
          top: "-="+_subject_label_height
          }, 500, function() {
          });

//Si les données rentrées sont valides, on ajoute la matière
          if($("#subject-label input").val().trim() != "")
          {
            AddSubject($("#subject-label input").val());//Ajout de la matière
            $("#subject-label input").val("");//réinitialisation du formulaire
          }
      });


//Au clic sur le bouton de suppression de la matière
      $(document).on('click', ".delete-subject", function(event)
      {
        //On stocke la matière à supprimer
        var subject_to_delete = $(event.target).parent().parent().parent().attr("id");
        //On elève la div correspondante à cette matière
        $(event.target).parent().parent().parent().remove();

        //on parcourt le menu
        $("#subjects  a ").each(function(index, elem)
        {
          //Si un élément de menu a le même nom que la matière à supprimer
            if($(elem).text() == subject_to_delete)
            {
                $(elem).parent().remove(); //on supprime l'élément du menu
            }
        });
      });//suppression

//AU clic sur un élément du menu, BUREAU
      $(document).on('click', "#subjects a", function(event)
      {
        if($(event.target).text() !=  "Add subject") // Si on a cliqué sur une matière
        {
          //On place la div de la matière en premier
          $("#main").prepend($("#"+$(event.target).text()));
        }
      });

      //Au clic sur un élément du menu, MOBILE
      $(document).on('click', "#m-subjects a", function(event)
      {
        if($(event.target).text() !=  "Close") //Si on clique sur une matière
        {
          //on afiche cette matière en premier
          $("#main").prepend($("#"+$(event.target).text()));
          //On cache la div de menu mobile
          $("#m-subjects").css("display", "none");
        }
      });

//Au clic sur le bouton des matières, MOBILE
      $(document).on('click', "#m-show-subjects", function(event)
      {
        $("#m-subjects").css("display","block");//On affiche le menu avec les matières
      });

      //Au clic sur le premier a de #m-subjects
      $(document).on('click', "#m-subjects a:first-of-type", function(event)
      {
        //On cache les matières
        $("#m-subjects").css("display","none");
      });


});//document ready

function ShowNewSubjectLabel()
{
  if(!_is_label_subject_on)
  {
    _is_label_subject_on = true;
    //On fait descendre le formulaire de nouvelle matière pour qu'il soit visible
    $( "#subject-label" ).animate({
      top: "+="+_subject_label_height
      }, 500, function() {
        });
    }
}//ShowNewSubjectLabel()

function AddSubject(subjectName)
{
  if(_is_mobile)
  {
    //On ajoute la matière dans la liste des matières
    $("#m-subjects-list").append( "<a href=\"#\" class=\"hvr-sweep-to-right\">" + subjectName + "</a><br>" );
    //On ajoute une section dédiée à la matière
    $("#main").append("<div class=\"m-subject \" id="+subjectName+"> <div class=\"subject-header m-subject-header\"> <h3 class=\"subject-title gotham-bold\">"+ subjectName +
    "</h3> <a class=\"addhomework\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></a><a class=\"delete-subject\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a>   <a class=\"show-resources\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i></a></div> <div class=\"homeworks\">  </div> </div>");
  }
  else
  {
    //On ajoute la matière à la liste des matières
    $("#subjects").append( "<li><a href=\"#\" class=\"hvr-sweep-to-right\">" + subjectName + "</a></li>" );
    //On ajoute une section dédiée à la matière
    $("#main").append("<div class=\"subject \" id="+subjectName+"> <div class=\"subject-header\"> <h3 class=\"subject-title gotham-bold\">"+ subjectName +
    "</h3> <a class=\"addhomework\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></a><a class=\"delete-subject\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a><a class=\"show-resources\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i></a></div> <div class=\"homeworks\">  </div> </div>");
  }

  //On détermine une couleur au hasard dans le tableau de couleur
  var rand  = Math.floor(Math.random() * (color_set.length - 1 + 1)) + 0;
  var color = color_set[rand];
  //On applique la couleur trouvée sur la section de la matière
  $("#"+subjectName +" .subject-header").css("background-color", color.p);
  $("#" + subjectName +" .homeworks").css("background-color", color.s);

}//AddSubject
