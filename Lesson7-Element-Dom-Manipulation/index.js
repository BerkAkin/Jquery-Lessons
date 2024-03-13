$('#btn1').click(()=>{
    $('<h3>H1</h3>').replaceAll('.div3')
    $('.div2').replaceWith('<h2>H2</h2>')
})

$('#btn2').click(()=>{
    $('#input').clone().prependTo('.div4')
})