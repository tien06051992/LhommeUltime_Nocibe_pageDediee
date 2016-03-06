

$( document ).ready(function() {
	
  
  	//$(".vidBg").prop('muted', true);
 	$(".LhommeUltimeMuteBtn").click( function(){
         if( $(".vidBg").prop('muted') ) {
          $(".vidBg").prop('muted', false);
    } else {
      $(".vidBg").prop('muted', true);
    }
    });

  	$('.bg-video').click(function(){
		$(this).css('display', 'none');
		$('.video-container').html('<video width="655" height="369" controls autoplay> <source src="video/video.mp4" type="video/mp4"> <source src="movie.webm" type="video/webm"> Your browser does not support HTML5 video. </video>');
   
	});
});


