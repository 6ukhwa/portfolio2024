$(document).ready(function(){

    // 브라우저의 높이값
    let winht = $(window).height()

    // 화면에서 스크롤했을때 스크롤top값을 찾기
    $(window).scroll(function(){

    let sc = $(this).scrollTop()
    let sht = $(window).height()
    
    // 각 gnb li에 해당하는 위치에 도달하면 addclass
    for(var a=0; a<=2; a++){
        if(sc>=sht*a && sc<sht*(a+1)) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(a).addClass('on')
        }
    }
    })
    
    // gnb li를 클릭하면 순번에 맞는 스크롤탑위치로 이동
    $('.gnb li').click(function(){

        let ht = $('article').height();
    
        let i = $(this).index()
        console.log(i);
        $('html,body').animate({'scrollTop':ht*i},500)
    
        $('.gnb li').removeClass('on');
        $(this).addClass('on')
    })
    
    
    // button을 클릭하면 헤더가 사라지고 메인이 나타남
    $('header').find('button').click(function(){
        $('header').fadeOut()
        $('main, nav').fadeIn(1000, 'swing')
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
    })
    $('.view2').click(function(){

        $('.blackBg').addClass('on')
        $('.kap').addClass('on')
        $('.close').addClass('on')
    })
    $('.view3').click(function(){

        $('.blackBg').addClass('on')
        $('.ldh').addClass('on')
        $('.close').addClass('on')
    })

    $('.close').click(function(){

        $('.blackBg').removeClass('on')
        $('.bnj').removeClass('on')
        $('.kap').removeClass('on')
        $('.ldh').removeClass('on')
        $('.close').removeClass('on')
    })


}); //돈땃쥐
