$('#btn1').click(()=>{
    $('div').toggleClass('red'),
    $('div').css('width','100px')
})
$('#btn2').click(()=>{
    $('div').toggleClass('blue')
    $('div').css('height','+=10')

})

$('div').click(function(){
    const rc = '#' + Math.random().toString(16).substring(2,8);
    const temp = $(this).css(['color','background-color', 'height'])
    for(const prop in temp){
        console.log(prop,':', temp[prop])
    }
    $(this).css('background-color',rc)

})

$('.div4').click(()=>{
    output('test')
})

function output(val){
    $('.div4').html(val)
}