$(document).ready(function(){

  for (var i = 0; i < 36; i++) {
    $('.quadrato_grande').append('<div class="quadratino"></div>');
  }

  var data = '';

  $.ajax({
    url: 'https://www.boolean.careers/api/random/int',
    method: 'GET',
    success: function(data) {
    console.log(data);
    }
  });


  $('.quadratino').click(function() {
    if (data.response <= 5) {
      $(this).addClass('bg_yellow');

    } else (data.response > 5) {
      $(this).addClass('bg_green');
    }

  });

  //
  //
  // function numero_random(number) {
  //
  // }

});
