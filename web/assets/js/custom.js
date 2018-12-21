/* Website Launch Date */
var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();

/* For Home Page 8-9 */
function onePageLayout(){
	'use strict';
	
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	}  // End if
  });
}

/* Timer JS */
    $(document).ready(function() {
      $('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
        $('.countdown').text('we are live');
      });
    });
	function openNav() {
		if($(window).width() <= 800)
		{
			document.getElementById("mySidenav").style.left = "0";
			document.getElementById("main").style.marginLeft = "100%";
		}
		else
		{
			document.getElementById("mySidenav").style.left = "0px";
			document.getElementById("main").style.marginLeft = "800px";
		}
	}
	function closeNav() {
		document.getElementById("mySidenav").style.left = "-800px";
		document.getElementById("main").style.marginLeft= "0";
	}
/* Scroll JS */
	(function($){
		$(window).on("load",function(){
			/* all available option parameters with their default values */
			$(".content").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y",
			});
		});
	})(jQuery);

	
function handleSupport(){
		var cssStylesheet = '<link rel="stylesheet" type="text/css" href="plugins/themify/themify-icons.css" />';
		
		var supportBtnStyle = "<style>.theme-btn{background-color:#fff;border-radius:40px;bottom:10px;color:#fff;display:table;height:50px;left:10px;min-width:50px;position:fixed;text-align:center;z-index:9999}.theme-btn i{font-size:22px;line-height:50px}.theme-btn.bt-support-now{background:#1ebbf0;background:-moz-linear-gradient(45deg,#1ebbf0 8%,#39dfaa 100%);background:-webkit-linear-gradient(45deg,#1ebbf0 8%,#39dfaa 100%);background:linear-gradient(45deg,#1ebbf0 8%,#39dfaa 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1ebbf0', endColorstr='#39dfaa', GradientType=1 );bottom:70px}.theme-btn.bt-buy-now{background:#1fdf61;background:-moz-linear-gradient(top,#A3D179 0,#88BA46 100%);background:-webkit-linear-gradient(top,#A3D179 0,#88BA46 100%);background:linear-gradient(to bottom,#A3D179 0,#88BA46 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1fdf61', endColorstr='#88BA46', GradientType=0 )}.theme-btn:hover{color:#fff;padding:0 20px}.theme-btn span{display:table-cell;vertical-align:middle;font-size:16px;letter-spacing:-15px;opacity:0;line-height:50px;transition:all .5s;-webkit-transition:all .5s;-moz-transition:all .5s;text-transform:uppercase}.theme-btn:hover span{opacity:1;letter-spacing:1px;padding-left:10px}.at-expanding-share-button[data-position=bottom-left]{bottom:70px!important}</style>";
		jQuery('head').append(cssStylesheet);
		jQuery('head').append(supportBtnStyle);
		
		
	}	
/*################	End OF Function List ###################################*/
/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	
	onePageLayout();
	handleSupport();
	
});
/* Document.ready END */