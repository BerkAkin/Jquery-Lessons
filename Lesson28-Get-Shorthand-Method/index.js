$('#btn1').click(sendDataOver)

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

$('#btn1').text('Post Data');
const url = 'https://script.google.com/macros/s/AKfycbzuGPGSdXCOOD9jQq4S0sx-OQxlOdL70sC_Z4AmWsRC6jnaxnwg8HGWfMBvalb-aD4U/exec';


function sendDataOver(){
    const data = {
        first: $('input[name="first"]').val(),
        last: $('input[name="last"]').val()
    }   
    console.log(data);
    $.post(url,data, (rep,status)=>{
        console.log(rep);
        console.log(status);
        if(status ==  'success'){
            const p = rep.para;
            const temp = `Status: ${status} <br> ${p.first} ${p.last}`;
            $('<div>').html(temp).appendTo('.output');
        }
    })
}