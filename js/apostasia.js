//Scroll

window.addEventListener('scroll',()=>{
  const scroll = document.documentElement.scrollTop;
  const header = document.getElementById('header');
  if(scroll > 30){
    header.classList.add('scroll-header')
  }else{
    header.classList.remove('scroll-header')
  }
})


//Menú

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const close = document.querySelector('.fa-times')

burger.addEventListener('click',()=>{
  menu.classList.add('slide')
  burger.classList.add('opacity')
})
close.addEventListener('click',()=>{
  menu.classList.remove('slide')
  burger.classList.remove('opacity')
})
