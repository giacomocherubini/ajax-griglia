$(document).ready(function(){

  for (var i = 0; i < 36; i++) {
    $('.quadrato_grande').append('<div class="quadratino"></div>');
  }

  var data = '';

  $('.quadratino').click(function() {
    var square = $(this);

    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data) {
      console.log(data.response);


      if (data.response <= 5) {
        $(square).addClass('bg_yellow');
      } else {
        $(square).addClass('bg_green');
      }
      $(square).text(data.response);

    }
    });

  });

});
