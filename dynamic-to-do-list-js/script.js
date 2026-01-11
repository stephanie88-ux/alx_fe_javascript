document.addEventListener("DOMContentLoaded", event() => {
    loadTasks();

    const addButton = document.getElementById("add-task-btn");
    const taskinput = document.getElementById("task-input");
    const taskInput= document.getElementById("taskInput");
    const taskList = document.getElementById("task-list");

    function loadtasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
         function addTask() {
         const taskText = taskInput.value.trim();
         if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;


        constRemoveButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function() {
        taskList.removeChild(li);
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
        classList.add("task-item")
        };
 
        Taskinput.value = "";
    }
        
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener('keypress', finction (event) {
        if (event.key === "Enter") {
            addTask();
        }   
    });


       