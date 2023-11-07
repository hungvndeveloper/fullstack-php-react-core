var todoList = document.querySelector('.todo-list');
var formAdd = document.querySelector('.form-add');

formAdd.addEventListener('submit', function(e){
    e.preventDefault();
    var doNameObj = this.querySelector('[name="name"]');
   
    var doName = doNameObj.value;
    
    var doItem = `<div class="todo-item d-flex justify-content-between mb-3">
        <input type="checkbox">
        <span>${doName}</span>
        <span class="remove">&times;</span>
    </div>`;

    todoList.innerHTML+=doItem;

    doNameObj.value = '';
});

todoList.addEventListener('click', function(e){
    if (e.target.classList.contains('remove')){
        if (confirm('Are you sure you want to remove?')){
            e.target.parentElement.remove();
        }
    }
});

todoList.addEventListener('change', function(e){
    e.target.parentElement.classList.toggle('completed');
})

