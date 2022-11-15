let body = document.querySelector('body'),
    nav = document.querySelector('.nav'),
    navclose = document.querySelector('.cross'),
    navopen = document.querySelector('.navclose');
nav.addEventListener('click',()=>{
    navopen.classList.toggle('navopen')
})
navclose.addEventListener('click',()=>{
    navopen.classList.toggle('navopen')
})