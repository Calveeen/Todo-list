import {menuModal, taskModal, taskDom,} from "./dom.js";
import {info} from "./info.js";
import {format} from "../node_modules/date-fns";

function createTask(){
    const titleInput = document.querySelector(".task-modal-form .task-title");
    const notesInput = document.querySelector(".task-modal-form #notes");
    const priorityInput = document.querySelector(".task-modal-form #priority");
    const dateInput = document.querySelector(".task-modal-form .due-date");
    const taskInfo = info();
    const dateInfo = taskInfo.dueDate.split("-");
    const storedDates = [];

    //convert string to date, and store into array
    storedDates.push(Date.parse(taskInfo.dueDate));
    //Note that month is the INDEX, not the month number (y tho)
    dateInfo[1] = parseInt(dateInfo[1]) - 1;
    const formatDate = format(new Date(
        dateInfo[0], dateInfo[1], dateInfo[2]
    ), "MMM/dd/yyyy");

    //reset values in input text field
    titleInput.value = "";
    notesInput.value = "";
    priorityInput.value = "low";
    dateInput.value = "";

    //create task onto workspace
    taskDom(taskInfo.title, taskInfo.notes, 
            taskInfo.priority, formatDate);
}

function addTask(){
    const submit = document.querySelector(".task-modal .submit");

    submit.addEventListener("click", () => {
        createTask();
    });
}

addTask();
menuModal();
taskModal();