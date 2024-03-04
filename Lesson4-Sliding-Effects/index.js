$('#goster').hide()


$('#gizle').click(()=>{
    $('div').slideUp('fast',doneFun);
    $('#gizle').hide()
    $('#goster').show()
})


$('#goster').click(()=>{
    $('div').slideDown('slow',doneFun)
    $('#goster').hide()
    $('#gizle').show()
})

$('div').click(function(){
    $(this).slideToggle();
})

function doneFun(){
    console.log('slide Done');
}