$('#btn1').click(function(){
    console.log($(this).parent().length);
    console.log($(this).parents().length);
    console.log($(this).parents());
    console.log($(this).parents('.main'));
    console.log($(this).parentsUntil('nav'));
})

$('#btn2').click(function(){
    $(this).parents('.main').each(function(){
        let rand = Math.floor(Math.random()*16777215).toString(16);
        $(this).css('background-color',`#${rand}`)
    })
})