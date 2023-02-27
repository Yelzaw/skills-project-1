

  $('.open-btn').click(function(){
    $(".open-btn").parents().next("#myNav").css("width","25%");
  })

  $('.closebtn').click(function(){
    $("#myNav").css("width","0%");
  })