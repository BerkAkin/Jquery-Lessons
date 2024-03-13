//SOLA DOĞRU HAREKET EDER 1 SANİYE SÜRER VE BİTTİĞİNDE I MOVED YAZAR AMA ZİNCİRLEME OLARAK YAZILIR
$('#btn1').click(()=>{
    $('.div1').text(`I'm Moving`).animate({
        left:"+=50",
        opacity: 0.5
    }, 1000, ()=>{
        $('.div1').text(`I Moved`);
    })
})


//SAĞA DOĞRU HAREKET EDER 1 SANİYE SÜRER VE BİTTİĞİNDE I MOVED YAZAR
$('#btn2').click(()=>{
    $('.div2').text(`I'm Moving`);
    $('.div2').animate({
        left:"50",
        opacity: 0.5,
        fontSize:"20px",
    }, 1000, ()=>{
        $('.div2').text(`I Moved`);
    })

    $('.div3').text(`I'm Moving`);
    $('.div3').animate({
        top:"100",
        opacity: 0.5,
        fontSize:"25px"
    }, 1000, ()=>{
        $('.div3').text(`I Moved`);
    })

})

