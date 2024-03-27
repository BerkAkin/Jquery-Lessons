$('<div>').text('Berk').addClass('box').prependTo(document.body);

$('.box').on({
    click: function(){$(this).toggleClass('active')},
    mouseenter: function(){$(this).css('background-color','orange')},
    mouseleave: function(){$(this).css('background-color','white')}
})

$('.btns').on('click','button',function(){
    const val = `${$(this).index()} index button`
    $(this).css('background-color','red')
    $('.output').text(val)
})

const obj = {
    first: 'Berk',
    last: 'Desti',
    id:100
}

$('.output').on('click',obj,adder);

function adder(e){
    console.log(e.data);
}
