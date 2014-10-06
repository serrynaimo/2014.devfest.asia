var menuVisible = false;
var fromTop = parseInt($('nav').offset().top, 10);

$(window).on("scroll touchmove", function (e) {
	if(window.pageYOffset > fromTop && !menuVisible) {
		$("body").addClass("visible");
		menuVisible = true;
	}
	else if(window.pageYOffset <= fromTop && menuVisible) {
		$("body").removeClass("visible");
		menuVisible = false;
	}
});
