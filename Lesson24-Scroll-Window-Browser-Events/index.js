let counter = 1;

$('button').click(()=>{
    counter++;
    
    const random = Math.floor(Math.random()*200)+100;
    const color = '#'+Math.random().toString(16).substring(2,8);
    const id = 'id'+counter;

    $('<div>').text('New Division')
    .attr('id',id)
    .css('height',random+'px')
    .css('background-color',color)
    .appendTo('body');

    $('<a>')
    .attr('href','#'+id)
    .text(id+' ')
    .appendTo('.output');

})

$(window).scroll((e)=>{
    console.log(e)
})

$(window).resize((e=>{
    console.log($(window).height())    
    console.log($(document).width())    
}))