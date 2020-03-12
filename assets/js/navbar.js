$(window).scroll(function() {
    let navigation = $('nav')
    let border = $('#nav-border')

    navigation.toggleClass('scrolled', $(this).scrollTop() > 50)

    if (navigation.hasClass('scrolled')) {
        border.css('border-bottom', 'unset')
    } else {
        border.css('border-bottom', '1px solid rgba(250, 250, 250, 0.1)')
    }
});

let btn = $('#mobile-menu')
let bars = $('#mob-menu')

btn.click(function() {

    setTimeout(function() {
        if (btn.hasClass('collapsed')) {
            bars.removeClass('fa-times')
            bars.addClass('fa-bars')
            console.log(true)
        } else {
            bars.removeClass('fa-bars')
            bars.addClass('fa-times')
            console.log(true)
        }
    }, 100)
})

$(window).on('load', function() {
    // executes when HTML-Document is loaded and DOM is ready
    $('.preloader').fadeOut()
});