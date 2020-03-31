$(window).scroll(function () {
  let navigation = $('nav');
  let border = $('#nav-border');

  navigation.toggleClass('scrolled', $(this).scrollTop() > 50);

  if (navigation.hasClass('scrolled')) {
    border.css('border-bottom', 'unset')
  } else {
    border.css('border-bottom', '1px solid rgba(250, 250, 250, 0.1)')
  }
});

$(document).ready(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 300) {
    scrollBtn.addClass('show');
  } else {
    scrollBtn.removeClass('show');
  }
});

let btn = $('#mobile-menu');
let bars = $('#mob-menu');

btn.click(function () {

  setTimeout(function () {
    if (btn.hasClass('collapsed')) {
      bars.removeClass('fa-times');
      bars.addClass('fa-bars')
    } else {
      bars.removeClass('fa-bars');
      bars.addClass('fa-times')
    }
  }, 100)
});

$(window).on('load', function () {
  $('.preloader').fadeOut()
});


let scrollBtn = $('#button');


//button back to top
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    scrollBtn.addClass('show');
  } else {
    scrollBtn.removeClass('show');
  }
});

//scroll to top
scrollBtn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, '300');
});

$('.nav span').click(function () {
  let $this = $(this);
  let id = $this.attr('class');
  let same = $('.item-text').is('.' + id);

  if (!$this.hasClass('active')) {
    $('.nav span').removeClass('active');
    $this.addClass('active')
  }

  if (same) {
    $('.item-text').hide();
    $('.' + id).fadeIn()
  }
});


$(document).ready(function () {
  (function ($) {
    $('#news-slider').owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      pagination:true,
      autoPlay:true,
      dots: true
    });
  })(jQuery);
});