$('input').keydown(function(e){
    console.log(e.key, e.code);
    $(this).css('background-color', 'yellow');
    console.log('keydown '+ $(this).index())
})

$('input').keypress(function(e){
    console.log(e.key, e.code);
    $(this).css('color', 'red');
    console.log('keypress '+ $(this).index())
})

$('input').keyup(function(e){
    console.log(e.key, e.code);
    $(this).css('border', 'none');
    console.log('keyup '+ $(this).index())
})

$('input').focus(function(e){
    console.log(e.key, e.code);
    $(this).css('border', '2px solid blue');
    console.log('focus '+ $(this).index())
})

$('input').blur(function(e){
    console.log(e.key, e.code);
    $(this).css('border', '2px solid green');
    console.log('blur '+ $(this).index())
})

$('input').focusin(function(e){
    console.log(e.key, e.code);
    $(this).css('border', '2px solid orange');
    console.log('focusin '+ $(this).index())
})

$('input').focusout(function(e){
    console.log(e.key, e.code);
    $(this).css('border', '2px solid red');
    console.log('focusout '+ $(this).index())
})

