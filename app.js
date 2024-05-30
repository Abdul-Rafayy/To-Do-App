function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    var listItem = document.createElement('li');

    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (listItem.className === 'completed') {
            listItem.className = '';
        } else {
            listItem.className = 'completed';
        }
    };

    
    var taskSpan = document.createElement('span');
    taskSpan.innerHTML = taskText;

    
    var editButton = document.createElement('button');
    editButton.innerHTML = '✂';

    editButton.className = 'editButton';
    editButton.onclick = function() {
        if (editButton.innerHTML === '✂') {
            taskSpan.contentEditable = true;
            taskSpan.focus();
            editButton.innerHTML = '✔';
            editButton.className = 'saveButton';
        } else {
            taskSpan.contentEditable = false;
            editButton.innerHTML = '✂';
            editButton.className = 'editButton';
        }
    };

    
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function() {
        listItem.parentNode.removeChild(listItem);
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(listItem);

    taskInput.value = '';
}
document.getElementById('taskInput').onkeypress = function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
};
function deleteAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

