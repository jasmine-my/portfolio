$(document).ready(function(){
    //gnb button
    let gnbBtn = $(`.gnbBtn`);
    let gnb = $(`#gnb`);
    let menu = $(`#gnb li`);

    menu.click(function (e) {
      e.preventDefault();
      let i = $(this).index()+1;
      let content = $(`#section${i}`);
      let headerH = $(`#headerWrap`).outerHeight();
      let ot = content.offset().top - headerH;
      $(`html,body`).stop().animate({ scrollTop: ot });
    });

    gnbBtn.click(function(){
        gnb.slideToggle();
    });

    $(window).resize(function(){
            if ($(this).width()>=640) {
                gnb.css('display','flex');
            } else {
                gnb.removeAttr(`style`);
            }
    });

    //contact style
    $(`.copy`).each(function(){
        $(this).click(function(){
            let url = $(this).find(`.copyLink`);
            url.select();
            document.execCommand(`copy`);
            alert(`복사 되었습니다.`);
        });
    });

    if($(window).width()>1280) {
            $(`.contact li`).eq(0).html(`<i class="fas fa-envelope-square fa-lg"></i> <br> yeunk0206@naver.com`);
            $(`.contact li`).eq(1).html(`<i class="fas fa-phone-square fa-lg"></i> <br> 010-9137-1521`);
        }    

    $(window).scroll(function(){
        //slidup animation
        $(`section`).each(function(){
            let secTop = $(this).offset().top - 400;
            if($(window).scrollTop() > secTop) {
                $(this).find(`*`).addClass(`on`);
            }
        });
        //mobile일때 메뉴 숨기기
        if($(window).scrollTop() > 60 && $(window).width() < 640) {
            gnb.slideUp();
        }
        
        //PC화면일때 contact side메뉴 메인으로 내려갔을때 보이게 하기
        if($(window).width()>=1280) {
            let aboutTop = $(`.aboutMe`).offset().top -200;
            if($(window).scrollTop() > aboutTop) {
                $(`.contact`).fadeIn(300);
            } else { $(`.contact`).fadeOut(100); }
        } else { $(`.contact`).fadeIn(); }
        
    });
    
    //project thumbnails
    $(`.projects>div`).each(function(i){
        $(this).find(`.slideImg`).css('backgroundImage', `url("img/thumbnail/thumbnail${i+1}.png"`);
    });
    $(`.detail`).css('backgroundImage', `url("img/thumbnail/detail.png"`);
    $(`.detail2`).css('backgroundImage', `url("img/thumbnail/detail2.png"`);

    //color palete
    let colorChip = $(`.colorP ul li`);
    colorChip.each(function(i){
        let colorName = colorChip.eq(i).find(`p`).text();
        $(this).css('backgroundColor', colorName);
    });

    //interactive animation
    let textTime = 600;
    $(`.gradient h2`).animate({
        opacity: `1`
    }, textTime, function(){
        $(`.gradient h5`).animate({
            opacity: `1`
        }, textTime);
    });

    //logo animation
    let logo = $(`.logo`);
    logo.addClass(`on`);
});