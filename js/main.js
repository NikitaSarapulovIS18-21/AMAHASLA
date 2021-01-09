$('.buttonburgmenu').click(function (e) { 
	e.preventDefault();
	$(this).toggleClass('buttonburgmenu_active');
	$('.menuburgernav').toggleClass('menuburgernav_active');
});