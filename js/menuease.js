  $(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('#navscroll').addClass('shrink');
      } else {
        $('#navscroll').removeClass('shrink');
      }
    });
  });