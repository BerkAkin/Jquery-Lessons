$('#btn1').click(()=>{
    $('.output').load('file1.txt',(rep,status,xhr)=>{
        if(status == 'success'){console.log(rep, status, 'success')}
        else{console.log(rep, status, 'error')}
        console.log(1,xhr)
    })
})

$('#btn2').click(()=>{
    $('.output').load('file1.html')
})

