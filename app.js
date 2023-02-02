var todos = [];

function onAddClick(){
    var newTodo = document.getElementById('newTodo').value;
    todos.push(newTodo);
    updateTodoList();
    document.getElementById('newTodo').value = '';
}

function updateTodoList(){
    var eleTodo = document.getElementById('todo-list');
    eleTodo.innerHTML = '';
    for(var i = 0; i < todos.length; i++){
        eleTodo.innerHTML += '<li onclick="onTodoClick(' + i + ')">' + todos[i] + '</li>'
    }
}

function onTodoClick(index){
    todos.splice(index, 1);
    updateTodoList();
}