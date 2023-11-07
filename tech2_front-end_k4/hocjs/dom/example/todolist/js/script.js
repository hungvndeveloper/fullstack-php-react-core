var todoForm = document.querySelector('.todos__form');
var todoInner = document.querySelector('.todos__inner');

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    var doNameEl = this.children[0]; //element
    
    var doName = doNameEl.value;
    
    var div = document.createElement('div');
    div.classList.add('todos--item');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', handleMarkCompleted);

    div.appendChild(checkbox);

    var spanName = document.createElement('span');
    spanName.classList.add('name');
    spanName.innerText = doName;

    div.appendChild(spanName);

    var spanRemove =  document.createElement('span');
    spanRemove.classList.add('remove');
    spanRemove.innerHTML = '&times;';
    spanRemove.addEventListener('click', handleRemove);

    div.appendChild(spanRemove);

    todoInner.appendChild(div);

    doNameEl.value = ''
   
})

var handleRemove = function(e){
    if (confirm('Bạn có chắc chắn?')){
        e.target.parentElement.remove();
    }
}

var handleMarkCompleted  = function(e){
    var status = e.target.checked;

    var todoItem = e.target.parentElement;
    
    if (status){
       todoItem.classList.add('completed');
    }else{
        todoItem.classList.remove('completed');
    }
}