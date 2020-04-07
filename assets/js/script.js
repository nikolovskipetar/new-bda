$(window).scroll(function() {
  let s = $("nav"),
      a = $("#nav-border");
  s.toggleClass("scrolled", $(this).scrollTop() > 50), s.hasClass("scrolled") ? a.css("border-bottom", "unset") : a.css("border-bottom", "1px solid rgba(250, 250, 250, 0.1)")
}), $(document).ready(function() {
  document.documentElement.clientWidth < 600 && ($(".index-router").hide()), window.location.href.indexOf("parasitology") > -1 && ($(".nav span").removeClass("active"), $(".item-text").removeClass("active"), $(".nav span.parasitology").addClass("active"), $(".item-text.parasitology").addClass("active")), window.location.href.indexOf("microbiology") > -1 && ($(".nav span").removeClass("active"), $(".nav span.microbiology").addClass("active")), $(window).scrollTop() > 300 ? scrollBtn.addClass("show") : scrollBtn.removeClass("show")
});
let btn = $("#mobile-menu"),
  bars = $("#mob-menu");
btn.click(function() {
  setTimeout(function() {
      btn.hasClass("collapsed") ? (bars.removeClass("fa-times"), bars.addClass("fa-bars")) : (bars.removeClass("fa-bars"), bars.addClass("fa-times"))
  }, 100)
}), $(window).on("load", function() {
  $(".preloader").fadeOut()
});
let scrollBtn = $("#button");
$(window).scroll(function() {
  $(window).scrollTop() > 300 ? scrollBtn.addClass("show") : scrollBtn.removeClass("show")
}), scrollBtn.on("click", function(s) {
  s.preventDefault(), $("html, body").animate({
      scrollTop: 0
  }, "300")
}), $(".nav span").click(function() {
  let s = $(this),
      a = s.attr("class"),
      o = $(".item-text").is("." + a);
  s.hasClass("active") || ($(".nav span").removeClass("active"), s.addClass("active")), o && ($(".item-text").hide(), $("." + a).fadeIn())
});