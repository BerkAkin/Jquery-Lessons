$('#btn1').click(()=>{
    const elements = $('.main div').toArray();
    console.log(elements);
    elements.forEach((element,index)=>{
        console.log(element.textContent);
        const span = document.createElement('span');
        span.textContent = `Hello ${index+1}`;
        element.append(span)
    })
})