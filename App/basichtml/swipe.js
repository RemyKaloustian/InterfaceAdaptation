$(document).ready(function()
{
  var pressed_element;

  var is_pressed = false;
  $(document).on('mousedown', ".res-img", function(event)
  {
    is_pressed = true;
    console.log("Pressde");
    pressed_element = $(event.target);

  });

  $(document).on('mousemove', ".res-img", function(event)
  {
    if(is_pressed)
    {
      console.log("sliding");
      //$(event.target).css("margin-left", $(event.target).css("margin-left") + 3 + "px");
      $(pressed_element).animate({
        marginLeft: "1000"
      }, 1200, function() {
          pressed_element.remove();

      });
    }
    ///is_pressed = true;
    //console.log("Pressde");
  //  $(event.target).css("margin-left", $(event.target).css("margin-left") + 3);
  });

  $(document).on('mouseup', ".res-img", function(event)
  {
    is_pressed = false;
    console.log("Unpressed");
  });

});
