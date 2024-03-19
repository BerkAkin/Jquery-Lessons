let counter = 0;
const arr = [];


for(let i = 0; i<5; i++){
    $ele = $('<input>');
    $('<input>').attr({
        type:'checkbox',
        value: i,
        checked:'checked'
    }).appendTo('.div4').click(function(){
        let temp = ''
        let $el = $(this);
        temp += `Attr: ${$el.attr('checked')}
        `;
        temp += `Prop: ${$el.prop('checked')}
        `;
        temp += `Is: ${$el.is(':checked')}
        `;
        console.log(temp)

    })
}


for(let i = 0; i<5; i++){
    $ele = $('<input>');
    $ele.attr({
        type:'checkbox',
        value: i,
    }).appendTo('.div3')
    $ele.prop('checked', true)
    $ele.click(function(){
        let temp = ''
        let $el = $(this);
        temp += `Attr: ${$el.attr('checked')}
        `;
        temp += `Prop: ${$el.prop('checked')}
        `;
        temp += `Is: ${$el.is(':checked')}
        `;
        console.log(temp)

    })
}



$('.div1').click(function(){
    counter++
    $('.div1').html(`<div>Counter: ${counter}</div>`)
})






$('div').click(function(){
    console.log($(this).attr('id'))
    const rand = Math.floor(Math.random()*100)
    $(this).attr('id',rand);
    console.log($(this).attr('id'))

})





$('#btn1').click(()=>{
   // $('.div1').addClass('box').empty();
    if(arr.length>0){
        $ele = arr.shift();
        $('.div4').append($ele);
    }
    $('#input').attr({
        type:'number',
        placeholder:'Sayı',
        min:10,
        max:20
    })
})






$('#btn2').click(()=>{
   // $ele = $('.div1').detach();
   // arr.push($ele)
})