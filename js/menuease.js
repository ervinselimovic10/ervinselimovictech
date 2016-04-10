  $(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 25) {
        $('#navscroll').addClass('shrink');
      } else {
        $('#navscroll').removeClass('shrink');
      }
    });
  });