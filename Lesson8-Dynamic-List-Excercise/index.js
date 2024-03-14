$('#btn1').click(adder);

let counter = 0;

function adder(){

    const val = $('input').val();
    const $li =  $(`<li>`);
    const $el =  $(`<span>`).text(val);
    const $btn =  $(`<button>`).text('X');


    $li.click(function(){
        $li.toggleClass('red')
    })


    $btn.click(function(){
       $li.remove()
    })


    $li.append($el)
    $li.append($btn);
    $('#list').append($li)
    counter++
    const temp = `Berk ${counter}`
    $('input').val(temp)
}