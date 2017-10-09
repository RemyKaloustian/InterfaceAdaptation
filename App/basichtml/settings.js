var _is_mobile = false; //permet de savoir si on est sur un téléphone

$(document).ready(function()
{
  //Si la largeur est inférieure à la hauteur => téléphone
  if($(document).width()< $(document).height())
  {
    _is_mobile = true;
    console.log("IN MOBILE");
    ToMobile(); //On applique les transformations CSS pour mobile
  }

});
