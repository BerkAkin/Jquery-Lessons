let counter = 0;

for(let i=0;i<10;i++){
    counter++
    const $span = $(`<span>Hell: ${counter}</span>`);     
    $span.text('New')
    $('.div2').after($span);
}

for(let i=0;i<3;i++){
   $(`<button>Hell: ${i+1}</button>`).
   insertAfter('.div3').click(function(){
    console.log($(this))
   })     

}


$('#btn1').click(()=>{
    const val = $('#input').val()
    $('.div1').text(val);
    $('.div3').prepend(val);
})


$('#btn2').click(()=>{
    counter++;
    const $div = $(`<div>Hell: ${counter}</div>`);     
    $div.appendTo('.div3');
})