$(document).ready(function(){

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


    
    $(window).scroll(function(){
    // top버튼설정
        if($(this).scrollTop() > 100) {
            $('.top_btn').fadeIn();
        }else {$('.top_btn').fadeOut();
    }

    // 네비 스타일 설정
    if($(this).scrollTop() > 100) {
        $('header').css({'background-color':'#fff'})
        $('nav').find('a').css({'color':'#454545'})
        $('.util').find('i').css({'color':'#454545'})
        $('.second').show();
    }else {
        $('header').css({'background-color':'transparent','color':'#fff'})
        $('nav').find('a').css({'color':'#fff'})
        $('.util').find('i').css({'color':'#fff'})
        $('.second').hide()
}
        
    });

    // top버튼 동작설정
    $('.top_btn').click(function(){
        $('html,body').animate({
            scrollTop : 0}, 600);
            return false;
        })


// 동물 슬라이드 설정
    $('.btn li').click(function(){

        var i = $(this).index()

        $('.btn li').removeClass('on')
        $(this).addClass('on')
    
        $('.images li').eq(i-1).stop().animate({'opacity':'0'},800);
        $('.images li').eq(i).stop().animate({'opacity':'1'},800)


        });
      
    var a = 0;
        function timer(){

            a++;
            if(a==3)a=0;
            $('.btn li').eq(a).trigger('click')
        }

    var slide = setInterval(timer,2000)

        $('.images').mouseenter(function(){
            clearInterval(slide)
        })

        $('.images').mouseleave(function(){
            slide = setInterval(timer,2000)
        })

      
    // 공지 슬라이드 설정
        var ii=0;
        setInterval(function(){
      
         ii++;
         if(ii==3)ii=0;
      
         $('.notice_inner li').eq(ii-1).css('top','0').stop().animate({'top':'100%'},800);
         $('.notice_inner li').eq(ii).css('top','-100%').stop().animate({'top':'0'},800);
      
        },2000);


        $('.num').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
          
              duration: 3000,
              easing:'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });
        });  

        var left = 0;

        // 왼쪽 버튼을 클릭했을 때 ul이 320px씩 왼쪽으로 이동
        $('.left').click(function() {
            left++;
            console.log(left);
        
            $('.adopt ul').width(1600 + (320 * left));
        
            // 마지막 슬라이드를 복제하여 ul의 끝에 추가
            $('.adopt li').eq(left - 1).clone().appendTo('.adopt ul');
        
            // ul을 320px씩 왼쪽으로 이동
            $('.adopt ul').stop().animate({'left': -320 * left}, 1200);
        });
        

        setInterval(function(){

            $('.left').trigger('click')
        },3000)


        // 달력

        $( "#datepicker" ).datepicker({

            onSelect: function(dateText, inst){
                alert('선택된 날짜:'+dateText)
            }
          });

          
        $('.reservation_form').find('button').click(function(e){
            e.preventDefault();
            // 날짜를 찾아오기
            let selectDate = $('#datepicker').datepicker('getDate');
            let selectMon = selectDate.getMonth()
            let selectDay = selectDate.getDate()
            console.log(selectMon+1);//달은 0부터 시작
            console.log(selectDay);

            // 인원수 불러오기
            let pel = $('#people').val();
            console.log(pel);

            // 프로그램명 불러오기
            let pro = $('#program option:selected').text()
            console.log(pro);

            $('.fixed').show()
            $('.fixed li').eq(0).find('span').text((selectMon+1)+'월'+selectDay)
            $('.fixed li').eq(1).find('span').text(pro)
            $('.fixed li').eq(0).find('em').text(pel)


        })

        $('.close').click(function(){

            $('.fixed').hide()
        })


    })
