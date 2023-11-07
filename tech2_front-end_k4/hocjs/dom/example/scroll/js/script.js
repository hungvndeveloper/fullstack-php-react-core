var header = document.querySelector('.header');
var menu = header.querySelector('.menu');
var menuItems = menu.querySelectorAll('a');
var headerInnerHeight = header.clientHeight - menu.clientHeight - 30;

var html = document.querySelector('html');

window.addEventListener('scroll', function(){
    var position = html.scrollTop;
    
    if (position >= headerInnerHeight){
        header.classList.add('fixed');
        header.parentElement.style.paddingTop = `${menu.clientHeight}px`;
    }else{
        header.classList.remove('fixed');
        header.parentElement.style.paddingTop = `0`;
    }
});

menuItems.forEach(function(item){
   item.addEventListener('click', function(e){
       e.preventDefault(); 
       var hash = this.getAttribute('href');

       var sectionEl = document.querySelector(hash);
       var offsetTop = sectionEl.offsetTop - menu.clientHeight * 2;
       
       window.scroll(0, offsetTop);
   });
})

var hash = window.location.hash;
if (hash.length >= 2){
    var sectionEl = document.querySelector(hash);
    var offsetTop = sectionEl.offsetTop - menu.clientHeight * 2;
    window.scroll(0, offsetTop);
}