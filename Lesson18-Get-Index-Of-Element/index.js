$('#btn1').click(()=>{
    const temp = $('.main div').get(1);
    console.log(temp.innerHTML);
    console.log(temp.textContent);
})


$('#btn2').click(()=>{
    const len = $('.main div').length;
    console.log(len);
    let html = '';
    for(let i=0; i<len; i++){
        const temp = $('.main div').get(i);
        console.log(temp.textContent)
        html += ` ${i}. ${temp.textContent}`
    }
    $('.main span').text(html);
})

//BUTONA TIKLANDIĞINDA İNDEX DEĞERİNİ ALMAK

$('#btn3').click(function(){
    console.log($(this).index())
})