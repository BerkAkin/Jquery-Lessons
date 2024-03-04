/* console.log($('div').first());
const val = '<h1>Berk Akın</h1>';

$('div').first().on('click',()=>{
    $('div').first().html(val)
});

$('div').click((e)=>{
    $(e.target).text('Clickedd')
    $(e.target).hide()
})


function clicker(e) {
    console.log(e)
}

$('#gizle').click(()=>{
    $('div').hide('slow')

})

$('#goster').click(()=>{
    $('div').show(10000)
})
 */


$('div').click(function(e){
    //$(e.target).fadeOut("slow")
    $(this).fadeOut('slow')
})


$('button').click((e)=>{
    $('div').fadeIn('slow')
})
