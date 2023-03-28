let switchBtn= document.querySelector('.switch');

switchBtn.onclick=function(){
    switchBtn.classList.toggle('active');
    document.body.classList.toggle('dark');
}
