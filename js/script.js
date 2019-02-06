const dark = document.querySelector(".dark-btn");
const light = document.querySelector(".light-btn");    
const html = document.querySelector("html");



dark.addEventListener('click',(event)=>{
    html.classList.remove('light-bg');
    html.classList.add('dark-bg');
})

light.addEventListener('click',(event)=>{
    html.classList.remove('dark-bg');
    html.classList.add('light-bg');
})

document.addEventListener("DOMContentLoaded",(event)=>{    
    html.classList.add('light-bg');
});