var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    autoScrolling: true, //스크롤 하면 한 페이지씩 넘어감(스크롤바가 없음) 
    responsiveHeight: 350, //세로 높이가 350px 보다 작아졌을 때 오토스크롤링이 적용X 
    responsiveWidth: 400, 
    scrollBar: true,
    scrollingSpeed: 700,
    fitToSectionDelay: 500,
    verticalCentered: true, //글씨가 중간에 있도록 하는
});


document.querySelector('.nextS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});

document.querySelector('.prevS').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

$('.totalMitem').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});

$('.btn_total').click(function(){
    $('.total_menuZ').addClass('active')
});

$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active')
});

//var myScroll =new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});

new WOW().init();