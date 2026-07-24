const container=document.querySelector('.container');
const welcomebtn =document.querySelector('.sign-in-btn ');
const hellobtn=document.querySelector('.sign-up-btn'); 


welcomebtn.addEventListener('click',()=>{
    container.classList.add('active');
}) ;

hellobtn.addEventListener('click',()=>{
    container.classList.remove('active');
});
