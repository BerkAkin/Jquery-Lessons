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


$('#btn1').click(()=>{
    $.ajax({ 
        url: "file30.json", 
        success: function(response) { 
          console.log(response); 
          const html = `${response.firstName} ${response.lastName}`;
          $('<div>').html(html).appendTo('.output')
        } 
      });
})


$('#btn2').click(()=>{
    $.ajax({
        url:url,
        dataType: 'json',
        method: 'GET',
        data:{
            first:$('input').first().val(),
            last:$('input').last().val(),
        },
        success: (resp)=>{console.log('Başarılı', resp)}
    })
    .done((data)=>{
        console.log('Ocram', data)
    })
    .fail((err)=>{
        console.log('Not so ocram', err)
    })
    .always((data)=>{
        console.log('Finished', data)
    })
})