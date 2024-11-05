
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// let editIndex = null;

// function displayTasks() {
//     const taskList = document.getElementById('taskList');
//     const completedList = document.getElementById('completedList');
//     taskList.innerHTML = '';
//     completedList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         const taskText = document.createElement('span');
//         taskText.textContent = task.text;

//         if (task.completed) {
//             taskText.className = 'complete';
//             completedList.appendChild(li);
//         } else {
//             taskList.appendChild(li);
//         }


//         const completeBtn = document.createElement('button');
//         completeBtn.textContent = 'Complete';
//         completeBtn.className = 'complete-btn';
//         completeBtn.onclick = () => toggleComplete(index);


//         if (task.completed) {
//             completeBtn.disabled = true;
//             completeBtn.textContent = task.completed ? 'Completed' : 'Complete';
//         }

    
//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.className = 'edit';
//         editBtn.onclick = () => loadEditTask(index);

     
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.className = 'delete-btn';
//         deleteBtn.onclick = () => removeTask(index);

//         li.appendChild(taskText);
//         li.appendChild(completeBtn);
//         li.appendChild(editBtn);
//         li.appendChild(deleteBtn);
//     });
// }

// function loadEditTask(index) {
//     const taskInput = document.getElementById('taskInput');
//     taskInput.value = tasks[index].text;
//     editIndex = index; 
// }

// // Add or edit a task
// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const task = taskInput.value.trim();
//     if (task) {
//         if (editIndex !== null) {

//             tasks[editIndex].text = task;
//             editIndex = null;
//         } else {

//             tasks.push({ text: task, completed: false });
//         }
//         saveTasks();
//         displayTasks();
//         taskInput.value = '';
//     }
// }

// function toggleComplete(index) {
//     tasks[index].completed = true;
//     saveTasks();
//     displayTasks();
// }


// function removeTask(index) {
//     tasks.splice(index, 1);
//     saveTasks();
//     displayTasks();
// }


// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }


// window.onload = displayTasks;










let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editIndex = null;

function displayTasks() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    taskList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.className = 'complete';
            completedList.appendChild(li);
        } else {
            taskList.appendChild(li);
        }

        // زر إتمام المهمة
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Completed' : 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => toggleComplete(index);

        // تعطيل الزر في حالة إتمام المهمة
        if (task.completed) {
            completeBtn.disabled = true;
        }

        // زر التعديل
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';
        editBtn.onclick = () => loadEditTask(index);

        // زر الحذف
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => removeTask(index);

        li.appendChild(taskText);
        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
    });
}

function loadEditTask(index) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text;
    editIndex = index;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        if (editIndex !== null) {
            tasks[editIndex].text = task;
            editIndex = null;
        } else {
            tasks.push({ text: task, completed: false });
        }
        saveTasks();
        displayTasks();
        taskInput.value = '';
    }
}

// تغيير حالة المهمة وإعادة عرض المحتوى لتحديث الزر
function toggleComplete(index) {
    tasks[index].completed = true;
    saveTasks();
    displayTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.onload = displayTasks;


