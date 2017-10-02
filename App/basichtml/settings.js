var _is_mobile = false;

$(document).ready(function()
{
  if($(document).width()< $(document).height())
  {
    _is_mobile = true;
    console.log("IN MOBILE");
  }

  });
