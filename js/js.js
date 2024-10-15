$(document).ready(function(){


    // 브라우저의 높이값
    let winht = $(window).height()


    $('article').height(winht)

    
    // 화면이 리사이징 될때마다 브라우저 화면높이 찾기
    $(window).resize(function(){

    let winht2 = $(window).height()
    })

  

    // 화면에서 스크롤했을때 스크롤top값을 찾기
    $(window).scroll(function(){

    let sc = $(this).scrollTop()
    let sht = $(window).height()
    console.log(sc);
    
    
    // 각 gnb li에 해당하는 위치에 도달하면 addclass
    for(var a=0; a<=3; a++){
        if(sc>=sht*a && sc<sht*(a+1)) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(a).addClass('on')
        }
    }
    })
    
    // gnb li를 클릭하면 순번에 맞는 스크롤탑위치로 이동
    $('.gnb li').click(function(){

        let ht = $('article').height();
    
        let i = $(this).index();
        console.log(i);
        $('html,body').stop(true, false).animate({'scrollTop':ht*i},800)
    
        $('.gnb li').removeClass('on');
        $(this).addClass('on')
    })
    // 페이지 로드 시 한 번 화면 크기 체크
    checkWindowSize();

    // 창 크기가 변경될 때마다 실행되는 함수
    $(window).resize(function() {
    checkWindowSize();

    // 리사이징 될 때마다 브라우저 화면의 높이 찾기
    let winht2 = $(window).height();
    console.log("현재 창의 높이: " + winht2); // 높이 값 확인용
    });

    function checkWindowSize() {
    var windowWidth = $(window).width();
    
    if (windowWidth > 999) {
        // 데스크탑일 때만 마우스휠 이벤트 활성화
        $('article').on('mousewheel', function(event, delta) {
        event.preventDefault();

        if (delta > 0) {
            // 마우스휠을 위로 돌리면 이전 화면으로
            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({ 'scrollTop': prev }, 800);
        } else if (delta < 0) {
            // 마우스휠을 아래로 돌리면 다음 화면으로
            let next = $(this).next().offset().top;
            $('html, body').stop().animate({ 'scrollTop': next }, 800);
        }
        });
    } else {
        // 모바일에서는 마우스휠 이벤트 제거
        $('article').off('mousewheel');
    }
    }
        
    
    // button을 클릭하면 헤더가 사라지고 메인이 나타남
    $('header').find('button').click(function(){
        $('header').fadeOut()
        $('main, nav').fadeIn(1000)
    })

    // name에 마우스가 들어가면 키워드가 나옴
    // $('.name').mouseenter(function(){
    //     $('.keywords div').addClass('on')
    //     $('.keywords').addClass('on')
    // });

    // concept view버튼을 클릭하면 배경이 깔리고 팝업창과 X가 뜬다.
    $('.view1').click(function(){
        
        $('.blackBg').addClass('on')
        $('.bnj').addClass('on')
        $('.close').addClass('on')

        $('.bnj').scrollTop(0);
    })
                                                                                                                                                                                                                                                                                                                                                                                                           
    $('.view2').click(function(){

        $('.blackBg').addClass('on')
        $('.kap').addClass('on')
        $('.close').addClass('on')

        $('.kap').scrollTop(0);
    })
    $('.view3').click(function(){

        $('.blackBg').addClass('on')
        $('.ldh').addClass('on')
        $('.close').addClass('on')

        $('.ldh').scrollTop(0);
    })

    // 팝업창 마우스 휠 이벤트 핸들러: 팝업 내에서만 스크롤
    $('.pop_pop').on('mousewheel', function(event){
        event.stopPropagation(); // 배경에 스크롤 이벤트 전달 차단
    });
    
    $('.close').click(function(){

        $('.blackBg').removeClass('on')
        $('.bnj').removeClass('on')
        $('.kap').removeClass('on')
        $('.ldh').removeClass('on')
        $('.close').removeClass('on')
    })


    // 구름 엔딩
    setInterval(function() {
        $('.cloud img').toggle();
      }, 600);






}); //돈땃쥐
