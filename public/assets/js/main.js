$( document ).ready(function() {

// // Scroll to target
	// $(function() {
	// 	$('a[href^="#"]').on('click', function(event) {

	//         var target = $( $(this).attr('href') );

	//         if( target.length ) {
	//         	event.preventDefault();
	//           	$('html, body').animate({
	//               	scrollTop: target.offset().top
	//           	}, 1000);
	//     	}

	//   	});
	// });

	$(document).on('click','.scroll', function(event) {
	    event.preventDefault();
	    var target = "#" + this.getAttribute('data-target');
	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 2000);
	});

	// Resize divs to full height of window
	function resize(){
        var heights = window.innerHeight;
        document.getElementById("hero").style.height = heights -0 + "px";
    }
    resize();
    window.onresize = function() {
        resize();
    };

	// function resize(){
 //        var heights = window.innerHeight;
 //        document.getElementById("middle-blurb").style.height = heights -0 + "px";
 //    }
 //    resize();
 //    window.onresize = function() {
 //        resize();
 //    };

});
