$(document).ready(function() {
    
  $(window).scroll(function(){

    var sc = $(this).scrollTop();
    $('h1').text(sc);
  })
    

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
        $('.search_pop').addClass('on')
      });
    
    // close 클릭시 remove
    $('.close').on('click', function(){

      $('nav').removeClass('on');
        $('header').removeClass('expanded')
        $('.search_pop').removeClass('on')
    });

    // nav를 호버할 때 header 높이 400px로 조절
  $('nav').hover(function() {
      $('header').addClass('expanded');
      $('nav').addClass('on');
      $('.search_pop').removeClass('on')
    },
    function() {
      $('header').removeClass('expanded');
    }
  );

    // 마우스를 올렸을 때 애니메이션 실행
    $('.second li').on('mouseenter', function() {
        $(this).find('.cover').stop().animate({
          top: '50%'
        }, 600);
      });
  
      // 마우스를 뗐을 때 애니메이션 실행
      $('.second li').on('mouseleave', function() {
        $(this).find('.cover').stop().animate({
          top: '85%'
        }, 600);
      });
  
      // 햄버거 버튼 클릭 시 팝업나타남
      $('.bars').click(function(){

        $('.ham_pop').toggleClass('on')
        $('.ham').toggleClass('on')
        $('.close_ham').toggleClass('on')
      })

      // top버튼 클릭시 화면 상단으로
      $('.top').click(function(){
        $('html,body').animate({
            scrollTop : 0}, 600);
            return false;
        })

      // 사이드바 포지션 설정
      $(window).scroll(function(){

            if($(this).scrollTop() > 900) {
                $('aside').css({'position':'fixed'});
            }else {$('aside').css({'position':'absolute'});
        }
      });







      
  }); //-------------돈땃쥐----------------