(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});





        //slider1
		jQuery(document).ready(function() {

			 $(".slider1").owlCarousel({
			 	"items" : 4,
			 	"margin" : 20,
			 	"autoplay": true,	 	
			 	"autoplayTimeout" : 4000,
			 	"loop" : true,
			 	"nav" : false,
			 	"dop" : true,
			 	stageClass: 'owl-stage',
			 	"responsive" : {
			 		0 : {
			 			"items" : 1
			 		},
			 		576 : {
			 			"items" : 1
			 		},
			 		767 : {
			 			"items" : 4
			 		},
			 		991 : {
			 		 	"items" : 5
			 		}


			 	}
			 });




	}); 





		jQuery(".menu1").click(function() {
          jQuery(".menu2").show()
		});

		jQuery(".menu1").click(function() {
          jQuery(".menu1").hide()
		});




		jQuery(".menu2").click(function() {
          jQuery(".menu1 ").show()
		});

		jQuery(".menu2").click(function() {
          jQuery(".menu2").hide()
		});




		
		jQuery(".menu-part img  ").click(function() {
          jQuery(".nav ").slideToggle()()
		});
				
		
		
		
		
		jQuery(".return-btn a").click(function() { 

         var a = jQuery(".logo-area ").offset().top;

         jQuery("html").animate({scrollTop: a},2000);

	   });
		
		
		
	});
})(jQuery);