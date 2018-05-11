$(document).ready(function() {

    $('p.link.first, .back.last, #p4 .article img, #p1 .article img.third, .article3 .kasai img, .article3 .ryucheru img, .article3 div.title h1, .article3 div.title .item, .main_image h3, .article4 .title .cap_img, .article4 .title p, .article4 h3, .article5 .ryucheru, .article5 .kasai').css("opacity","0");
    $('p.link.first').css("display","none");

	$('#fullpage').fullpage({
		// sectionSelector: '.page',
		scrollOverflow: true,
		afterRender: function(){
			// $(def).css("opacity","0").css("transition","0s");
			$("#p1 .article img.third").css("transition","0.7s").css("width","16%" );
			$("#p1 .article img.third").css("opacity","1" );
		},
		// afterLoad: function(anchorLink, index){
		// 	if( index == 4 ){
		// 	//セクション１を下にスクロールしたとき実行されます
		// 		// particlesJS();
		// 		$("#p4 .article .top_img").css("opacity","1" );
		// 	}
		// },
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1 ){
				//セクション1へスクロールしたとき実行されます
				// particlesJS();
				// $("#p1 .article img.first, #p1 .article img.second").css("transition","0s").css("transition-delay","0.8s");
				// $("#p1 .article img.first, #p1 .article img.second").css("opacity","1" );
				$("#p1 .article img.third").css("transition","1.4s").css("transition-delay","0.7s").css("width","16%" );
				$("#p1 .article img.third").css("opacity","1" );
				// $("p.link.first").css("transition","0.7s").css("transition-delay","1.4s");
				// $("p.link.first").css("display","block" );
			}
			if(index == 1 ){
				//セクション1からスクロールしたとき実行されます
				// particlesJS();
				// $("#p1 .article img").css("opacity","0").css("transition","0.5s");
				// $("#p1 .article img.third").css("width","23%" ).css("opacity","0").css("transition","0.5s");;
				// $("p.link.first").css("display","none").css("opacity","0" ).css("transition","0.7s");

			}
			if(nextIndex == 2 ){
				//セクション2へスクロールしたとき実行されます
				// $(".next.first").css("opacity","0").css("transition","0.5s");
				// $(".main_image h3").css("opacity","1").css("transition","0.7s").css("transition-delay","0.35s" );
				// $(".article4 .title .cap_img, .article4 .title p, .article4 > h3").css("opacity","1").css("transition","0.7s").css("transition-delay","0.7s" );

			}
			if(index == 2 ){
				//セクション2からスクロールしたとき実行されます
				// $(".main_image h3, .article4 .title .cap_img, .article4 .title p, .article4 > h3").css("opacity","0").css("transition","0.5s");
			}
			if(nextIndex == 3 ){
				//セクション3へスクロールしたとき実行されます
				// $(".article5 .ryucheru").css("opacity","1").css("transition","0.7s").css("transition-delay","0.35s");
				// $(".article5 .kasai").css("opacity","1").css("transition","0.7s").css("transition-delay","0.7s" );
				// $(".back.last").css("opacity","1").css("transition","0.5s");
				
			}
			if(index == 3 ){
				//セクション3からスクロールしたとき実行されます
				// $(".article5 .ryucheru, .article5 .kasai").css("opacity","0").css("transition","0.5s");
				// $(".back.last").css("opacity","0").css("transition","0.5s");
			}

			if(nextIndex == 4 ){
				//セクション4へスクロールしたとき実行されます
				// particlesJS();
				$("#p4 .article img").css("transition","0s");
				$("#p4 .article img.first").css("transition","0.5s").css("transition-delay","0.2s");
				$("#p4 .article img.second").css("transition-delay","0.6s");
				$("#p4 .article img.third").css("transition-delay","1s");
				$("#p4 .article img").css("opacity","1" );
				$(".next.first").css("opacity","1").css("transition","0.5s");

			}
			if(index == 4 ){
				//セクション4からスクロールしたとき実行されます
				// particlesJS();
				$("#p4 .article img").css("opacity","0").css("transition","0.5s");
			}


		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				// $("p.link.first").css("opacity","1" ).css("transition","0.7s");
			}
		}
	});
});
$(document).on('click', '#moveDown1, #moveDown2, #moveDown3', function(){
	$.fn.fullpage.moveSectionDown();
  });
  $(document).on('click', '#moveTop', function(){
	$.fn.fullpage.moveTo(1);
  });
