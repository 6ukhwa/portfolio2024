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

    //아티클에서 마우스휠했을때 화면이 움직인다.
    $('article').mousewheel(function(event,delta){ //
    event.preventDefault()
    if(delta>0){
    // 마우스를 올리면 이전 화면으로 움직이고 
    let prev = $(this).prev().offset().top
    $('html,body').stop().animate({'scrollTop':prev},800)
    }

    if(delta<0){
    // 마우스를 내리면 다음 화면으로 움직인다.
    let next = $(this).next().offset().top;
    
    $('html,body').stop().animate({'scrollTop':next},800)
    }
    })
    
    
    // button을 클릭하면 헤더가 사라지고 메인이 나타남
    $('header').find('button').click(function(){
        $('header').fadeOut()
        $('main, nav').fadeIn(1000)
    })

    // name에 마우스가 들어가면 키워드가 나옴
    $('.name').mouseenter(function(){
        $('.keywords div').addClass('on')
        $('.keywords').addClass('on')
    });

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
