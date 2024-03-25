$('.main div').addClass('box').hover(function(){
    $(this).css('background-color','red')},
    function(){$(this).css('background-color', 'white')}
).mouseenter(function(e){
    $(this).text(`(X:${e.pageX}, Y:${e.pageY}`)
})


$('.main div')
.mouseup(function(){
    $(this).text('MOUSE UP');
    $(this).css('background-color', 'orange')
})
.mousedown(function() {
    $(this).text('MOUSE DOWN');
    $(this).css('background-color', 'green')
})

$('.main').mouseout(()=>{
    $('.div2').text('Mouse Out on Main')
})

$('.main').mouseover(()=>{
    $('.div2').text('Mouse Over on Main')
})

$('.main').mouseleave(()=>{
    $('.div2').text('Mouse Left on Main')
})

$('.main').mouseenter(()=>{
    $('.div2').text('Mouse Enter on Main')
})