let percentage=()=>{
    let display=document.querySelector('#display').value
    let a=eval(display);
   a=a/100;
   document.querySelector('#display').value=a;
}

let bracket=document.querySelector('#bracket')
bracket.addEventListener('click',()=>{
    bracket.classList.toggle('active')
    
})


let display=document.querySelector('#display')

function brackets() {
   
    if (bracket.classList=='active') {
        display.value+=')'
        console.log('active')
       
       }else{
        display.value+='('
       }
}





let mode=document.querySelector('#toggle')
mode.addEventListener('click', ()=>{
    mode.classList.toggle('active')
})


let body=document.querySelector('body')
toggle.addEventListener('click',()=>{
    body.classList.toggle('dark-mode')
})