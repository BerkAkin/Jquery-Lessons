const url = 'https://script.google.com/macros/s/AKfycbzuGPGSdXCOOD9jQq4S0sx-OQxlOdL70sC_Z4AmWsRC6jnaxnwg8HGWfMBvalb-aD4U/exec';

$('<input>').attr({
    type:'text',
    value:'temp',
    name: 'first'
}).appendTo('.ins').before('First: ').after('<br>');

$('<input>').attr({
    type:'text',
    value:'temp2',
    name: 'last'
}).appendTo('.ins').before('Last: ').after('<br>');

$('#btn1').text('Get With para').click(adder1);
$('#btn2').text('Get Script JS').click(adder2);
$('#btn3').text('GET JSON').click(adder3);





function adder1(){
    const obj1 = {
        first: $('input').first().val(),
        last: $('input').last().val()
    }
    $.get(url,obj1,call1)
}

function call1(rep){
    console.log(rep.para)
    $.each(rep.para,(prop,val)=>{
        console.log(val);
        const html = `${prop} [${val}]`;
        $('<div>').html(html).appendTo('.output')
    })
}



function adder2(){
    $.getScript('loader.js', ()=>{
        logger('test working');
        $('<button>').text('send message').click(()=>{
            logger($('input').first().val())
        }).appendTo('.btns')
    })
}

function adder3(){
    const url1 = `${url}?id=5000`;
    $.getJSON(url1,(data)=>{console.log(data.para)})
}