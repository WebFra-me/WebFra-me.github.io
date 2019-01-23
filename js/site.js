$(window).scroll(function(){
	
	if($(window).scrollTop() > 0){
		$("#site-nav").addClass("shadow");
		$("#site-nav .navbar-brand img").addClass("small");
	}
	else{
		$("#site-nav").removeClass("shadow");
		$("#site-nav .navbar-brand img").removeClass("small");
	}
	
});