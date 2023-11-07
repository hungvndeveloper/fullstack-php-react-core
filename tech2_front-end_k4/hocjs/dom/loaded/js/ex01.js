// window.addEventListener('load', function(){
//     var h1 = document.querySelector('h1');
//     console.log(h1);
// })

// window.addEventListener('DOMContentLoaded', function(){
//     var h1 = document.querySelector('h1');
//     console.log(h1);
// })

// function changeColor(selector){
//     var el = document.querySelector(selector);
//     if (el){
//         el.style.color = 'red';
//         el.style.background = 'grey';
//     }
// }

// changeColor('.content');
// changeColor('.box');

HTMLElement.prototype.changeColor = function(style = {}){
    // console.log(style);
    Object.assign(this.style, style);
    //{color: 'red'}
}

document.querySelector('.content').changeColor({
    color: '#fff',
    background: 'grey',
    fontStyle: 'italic'
});

document.querySelector('.box').changeColor({
    background: 'green',
    color: '#fff'
});