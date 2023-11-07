var items = document.querySelectorAll('li');
items.forEach(function (item) {
    item.addEventListener('click', function(e){
        e.preventDefault();
        if (item.children[1]!==undefined){
            item.children[1].style.background = 'red';
        }
    })
})