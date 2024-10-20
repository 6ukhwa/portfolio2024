<<<<<<< HEAD
$(document).ready(function() {
    

    
    // 객체 나타나기 설정
    ScrollOut({
        onShown: function(el) {
            // use the web animation API
            el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
        },
        onHidden: function(el) {
            // hide the element initially
            el.style.opacity = 1;
        }
    });

    
    // 돋보기 버튼 클릭 시 header 높이 조절
    $('.search').on('click', function() {

        $('header').addClass('expanded');
      });
    
    // close 클릭시 remove
    $('.close').on('click', function(){

        $('header').removeClass('expanded')
    });


    // 마우스를 올렸을 때 애니메이션 실행
    $('.second li').on('mouseenter', function() {
        $(this).find('.cover').stop().animate({
          top: '50%'
        }, 600); // 0.8초에 걸쳐 위로 이동
      });
  
      // 마우스를 뗐을 때 애니메이션 실행
      $('li').on('mouseleave', function() {
        $(this).find('.cover').stop().animate({
          top: '85%'
        }, 600); // 0.8초에 걸쳐 다시 아래로 이동
      });

=======
$(document).ready(function() {
    

    
    // 객체 나타나기 설정
    ScrollOut({
        onShown: function(el) {
            // use the web animation API
            el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
        },
        onHidden: function(el) {
            // hide the element initially
            el.style.opacity = 1;
        }
    });

    
    // 돋보기 버튼 클릭 시 header 높이 조절
    $('.search').on('click', function() {

        $('header').addClass('expanded');
      });
    
    // close 클릭시 remove
    $('.close').on('click', function(){

        $('header').removeClass('expanded')
    });


    // 마우스를 올렸을 때 애니메이션 실행
    $('.second li').on('mouseenter', function() {
        $(this).find('.cover').stop().animate({
          top: '50%'
        }, 600); // 0.8초에 걸쳐 위로 이동
      });
  
      // 마우스를 뗐을 때 애니메이션 실행
      $('li').on('mouseleave', function() {
        $(this).find('.cover').stop().animate({
          top: '85%'
        }, 600); // 0.8초에 걸쳐 다시 아래로 이동
      });

>>>>>>> 8ef36d441ea8fa5128b6123fac4d8b0505883eb5
  }); //-------------돈땃쥐----------------