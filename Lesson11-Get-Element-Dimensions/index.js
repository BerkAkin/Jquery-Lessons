$('div').addClass('box').click(function(){
    let html = `<div>Width: ${$(this).width()}</div>`;
    html += `<div>Height: ${$(this).height()}</div>`;
    html += `<div>Inner Width: ${$(this).innerHeight()}</div>`;
    html += `<div>Inner Height: ${$(this).innerWidth()}</div>`;
    html += `<div>Outer Width: ${$(this).outerHeight()}</div>`;
    html += `<div>Outer Height: ${$(this).outerWidth()}</div>`;
   $(this).html(html)
})

$('#btn1').click(()=>{
    console.log($(document).width())
    console.log($(window).width())
})