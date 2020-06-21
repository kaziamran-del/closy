$(document).ready(function(){
	
	/* counter Up */
		$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
	
	$('.img_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	/* Isotope Active */
	$(".portfolio_area").imagesLoaded(function () {
		var grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".grid-item"
			}
		});

		$(".portfolio_list").on("click", "li", function () {
			var filterValue = $(this).attr("data-filter");
			grid.isotope({
				filter: filterValue
			});
		});
		
	/* Isotope Menu Active
	===========================*/
		$(".portfolio_list li").on("click", function (event) {
			$(this)
				.siblings(".active")
				.removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});
	
/* 
	$('.menu').slicknav({
		label: '',
		'appendTo' : '.header_area'
	});
	 */
	
});
	
	

	
	
	