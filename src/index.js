import {menuModal, taskModal} from "./dom.js";
import {taskDom, info} from "./task.js";

function addTask(){
    const submit = document.querySelector(".task-modal .submit");
    const titleInput = document.querySelector(".task-modal-form .task-title");
    const notesInput = document.querySelector(".task-modal-form #notes");
    const priorityInput = document.querySelector(".task-modal-form #priority");
    const dateInput = document.querySelector(".task-modal-form .due-date");

    submit.addEventListener("click", () => {
        const taskInfo = info();
        //reset values in input text field
        titleInput.value = "";
        notesInput.value = "";
        priorityInput.value = "low";
        dateInput.value = "";
        
        taskDom(taskInfo.title, taskInfo.notes, 
                taskInfo.priority, taskInfo.dueDate);
    });
}

addTask();
menuModal();
taskModal();