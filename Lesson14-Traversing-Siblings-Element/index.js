$('#btn1').click(()=>{
    console.log($('#btn1').siblings());
    $sel = $('#btn1').siblings()
    $sel.addClass('box')
})



$('#btn2').click(()=>{
    $('.box').removeClass('box');
})



$('#btn3').click(()=>{
    $('#btn1').siblings('div').addClass('box');
})



$('#btn4').click(()=>{
    $('#btn1').next('span').addClass('box');
    $('#btn1').nextAll('span').addClass('box');
    $('#div3').nextUntil('button').addClass('box1');
})


$('#btn5').click(()=>{
    $('#btn1').prev('span').addClass('box2');
    $('#btn1').prevAll('span').addClass('box2');
    $('#div3').prevUntil('button').addClass('box2');
})