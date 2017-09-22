$( document ).ready(function() {

  $( "#addsubject" ).click(function( event ) {

    $( "label" ).animate({
      top: "+=1000"
    }, 500, function() {
      // Animation complete.
      });

    });

});
