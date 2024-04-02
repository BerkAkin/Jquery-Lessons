$('#btn1').click(adder1);
$('#btn2').click(adder2);
$('#btn3').click(adder3);



function adder1(){
    $.get('file30.json', (res)=>{
        console.log(res);

        let html = `${res.firstName} ${res.lastName}`;
        $('<h2>').text(html).appendTo('.output');

        const a = res.address;
        const val1 = `${a.city} <br> ${a.postalCode} <br> ${a.state} <br> ${a.streetAddress} <br> `
        $('<div>').html(val1).appendTo('.output');

        $ul = $('<ul>');
        $ul.appendTo('.output');
        $.each(res.phoneNumbers, (index, value)=>{
            const temp = `${index+1}. ${value.number} (${value.type})`;
            $('<li>').html(temp).appendTo($ul);
        })
    })
}


function adder2(){
    $.get('https://discoveryvip.com/shared/people.json', (data)=>{
        console.log(data);
        $.each(data.people, (index, value)=>{console.log(value.first)})
    })
}

function adder3(){
    $.get('https://www.discoveryvip.com/shared/books1.json', (data)=>{
        console.log(data.books);
        let val1 = JSON.stringify(data.books);
        $.each(data.books,(ind, val)=>{
            val1 += `<div>(${val.title})</div>`
            val1 += `<div>(${val.author})</div>`
        })
        $('<div>').html(val1).appendTo('.output');
    })
}