var slideItems = document.querySelectorAll('.item');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var index = 0;

next.addEventListener('click', function(){
    slideItems[index].classList.remove('active');
    index++;
    if (index==slideItems.length){
        index = 0;
    }
    slideItems[index].classList.add('active');
})

prev.addEventListener('click', function(){
    slideItems[index].classList.remove('active');
    index--;
    if (index<0){
        index = slideItems.length - 1;
    }
    slideItems[index].classList.add('active');
})