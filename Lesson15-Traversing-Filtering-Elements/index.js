$('#btn1').click(()=>{
    console.log($('.main').children());
    $main = $('.main').children();
    $main.first().css('background-color','red')
    $main.last().css('background-color','green')
    $main.eq(6).css('background-color','orange')
})

$('#btn2').click(()=>{
    $main = $('.main').children();
    $btns = $main.filter('button');
    $main.filter('button').css('background-color','black');
    $btns.css('color','white')
})

$('#btn3').click(()=>{
    $main = $('.main').children();
    $btns = $main.not('button');
    $main.not('button').css('background-color', 'purple');
    $btns.css('color','white')
})

$('#btn4').click(()=>{
    $('.main div').not('.div1').css('color', 'red')
})

$('#btn5').click(()=>{
    $('.main div').filter('div').css('color','green');
})