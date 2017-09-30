var color_set=[];

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


color_set.push(red);
color_set.push(pink);
color_set.push(purple);
color_set.push(deep_purple);
color_set.push(indigo);
color_set.push(blue);


$( document ).ready(function()
{
  //console.log("red.p = " + red.p + ", red.s = "+red.s);
  $('[data-toggle="datepicker"]').datepicker();
//  console.log($(document).width());
  //console.log($("#menu").width());
//  console.log($(document).width() -  $("#menu").width());
  $("#main").css("width",$(document).width()-  $("#menu").width());
  $("#main").css("margin-left",$("#menu").width());


  _is_label_subject_on = false;
  _subject_label_height = $("#subject-label").height() * 2;
  //console.log("Height of subject label is " + _subject_label_height);

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


//DELETION================================
      $(document).on('click', ".delete-subject", function(event)
      {
        var subject_to_delete = $(event.target).parent().parent().parent().attr("id");
        $(event.target).parent().parent().parent().remove();
        console.log("the subject to delete is " + subject_to_delete);

        $("#subjects  a ").each(function(index, elem)
        {
          console.log("id = " + $(elem).attr("id"));
          console.log("text is "+ $(elem).text());
            if($(elem).text() == subject_to_delete)
            {
                $(elem).parent().remove();
            }
        });

      });


});//document ready

function AddSubject(subjectName)
{
  //console.log("Adding " + subjectName );
  $("#subjects").append( "<li><a href=\"#\" class=\"hvr-sweep-to-right\">" + subjectName + "</a></li>" );

  $("#main").append("<div class=\"subject \" id="+subjectName+"> <div class=\"subject-header\"> <h3 class=\"subject-title gotham-bold\">"+ subjectName +
  "</h3> <a class=\"addhomework\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></a><a class=\"delete-subject\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a></div> <div class=\"homeworks\">  </div> </div>");

  var rand  = Math.floor(Math.random() * (color_set.length - 1 + 1)) + 0;
//  console.log("incex = " + rand);
  var color = color_set[rand];
  //console.log("the color is now "+color.p);
  $("#"+subjectName +" .subject-header").css("background-color", color.p);
  $("#" + subjectName +" .homeworks").css("background-color", color.s);

}//AddSubject
