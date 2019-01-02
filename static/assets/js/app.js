(function($){
  $(function(){
  //   var projectList = $('.project-list');
  //   projectList.slick({
  //     arrows: false,
  //     autoplay: false,
  //     autoplaySpeed: 8000,
  //     centerMode: false,
  //     customPaging: function(slider, i) {
  //       return $('<a class="button secondary clear project-list-dot" />').text(
  //         $(slider.$slides[i]).find('.project-type').find('strong')[0].innerText
  //       );
  //     },
  //     dots: true,
  //     infinite: false,
  //     mobileFirst: true,
  //     speed: 200,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     swipeToSlide: true,
  //     responsive: [
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           variableWidth: true
  //         }
  //       }
  //     ],
  //     touchThreshold: 15,
  //   });
  //   var projectSlick = projectList.slick('getSlick');
  //   var heldSlide;
  //   var holdX;
  //   var holdY;
  //   projectSlick.$slides.each(function(idx, el) {
  //     var slide = $(el);
  //     slide.mousedown(function(event) {
  //       heldSlide = idx;
  //       holdX = event.clientX;
  //       holdY = event.clientY;
  //     });
  //     slide.mouseup(function(event) {
  //       if (
  //         heldSlide === idx &&
  //         Math.abs(event.clientX - holdX) < 10 &&
  //         Math.abs(event.clientY - holdY) < 10
  //       ) {
  //         $('.project-list').slick('slickGoTo', idx);
  //       }
  //     });
  //   });
    // setInterval(function() {
    //   var slideCount = projectSlick.slideCount;
    //   var currentSlide = projectList.slick('slickCurrentSlide');
    //   if (currentSlide + 1 >= slideCount) {
    //     projectList.slick('slickGoTo', 0);
    //   } else {
    //     projectList.slick('slickNext');
    //   }
    // }, 10000);
    $('form.ajax').each(function(idx, el) {
      var form = $(el);
      var contactContainer = document.getElementById('contact');

      form.ajaxForm({
        dataType: "json",
        success: function() {
          form.find('.form-input-container').hide();
          form.find('.success-message').show();
          form.find('.send-message-button').hide();
          form.find('.message-sent-button').show();
          form.find('.error-message').hide();
          form.find('.contact-tel-message').show();
          form.find('.other-contact-info').hide();
          contactContainer.scrollIntoView();
        },
        error: function() {
          form.find('.success-message').hide();
          form.find('.form-input-container').show();
          form.find('.message-sent-button').hide();
          form.find('.send-message-button').show();
          form.find('.contact-tel-message').hide();
          form.find('.error-message').show();
          form.find('.other-contact-info').show();
          contactContainer.scrollIntoView();
        }
      });
    });
    $('form .reset-form-button').click(function() {
      var form = $('form');
      form.find('.success-message').hide();
      form.find('.form-input-container').show();
      form.find('.message-sent-button').hide();
      form.find('.send-message-button').show();
      form.find('.error-message').hide();
      form.find('.contact-tel-message').show();
      form.find('.other-contact-info').show();
      form[0].reset();
      Stretchy.resizeAll();
    });
  });
})(jQuery);
