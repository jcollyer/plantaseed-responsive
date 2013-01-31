

//external links
$("section a[href^='http://']").attr("target","_blank");

$(document).ready(function(){
	//facebook like
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	//slide show
	$("#slideshow > div:gt(0)").hide();
	setInterval(function() { 
			$('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  3000);


			//show more info buttons
			$(".fab-button").click(function(){
				$('.fab1').css("display" , "block");
			});

			$(".fab-button2").click(function(){
				$('.fab2').css("display" , "block");
			});




});