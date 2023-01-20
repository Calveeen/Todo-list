export function menuModal(){
    const menuBtn = document.querySelector(".header button");
    const sidebar = document.querySelector(".sidebar")
    const overlay = document.querySelector(".dark-overlay");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("show-sidebar");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("show-sidebar");
        overlay.classList.remove("active");
    });
}

export function taskModal(){
    const addBtn = document.querySelector(".create");
    const taskModal = document.querySelector(".task-modal");
    const overlay = document.querySelector(".dark-overlay");
    const submit = document.querySelector(".task-modal > form > .submit");

    //Show task-modal when add btn is clicked
    addBtn.addEventListener("click", () => {
        taskModal.removeAttribute("id");
        overlay.classList.add("active");
    });

    //When users click outside the form, exit task modal
    overlay.addEventListener("click", () => {
        taskModal.setAttribute("id", "hide-modal");
        overlay.classList.remove("active");
    });

    //Also exit task modal after clicking create task button
    submit.addEventListener("click", () => {
        taskModal.setAttribute("id", "hide-modal");
        overlay.classList.remove("active");
    });
}

export function taskDom(getTitle, getNotes, getPriority, getDueDate){  
    const taskList = document.querySelector(".content > .workspace > .task-list");
    //creating dom
    const task = document.createElement("div");
    const checkbox = document.createElement("input");
    const infoList = document.createElement("div");
    const title = document.createElement("h4");
    const date = document.createElement("p");
    const notes = document.createElement("p");
    const priority = document.createElement("p");
    const customize = document.createElement("div");
    const edit = document.createElement("img");
    const remove = document.createElement("img");

    task.classList.add("tasks");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    infoList.classList.add("info")
    date.classList.add("date");
    notes.classList.add("notes");
    priority.classList.add("priority");
    customize.classList.add("customize");
    edit.classList.add("edit");
    edit.setAttribute("src", "./img/edit-button.png");
    remove.classList.add("delete");
    remove.setAttribute("src", "./img/delete.png");

    title.textContent = getTitle;
    date.textContent = getDueDate;
    notes.textContent = getNotes;
    priority.textContent = getPriority;

    infoList.append(title, date, notes, priority);
    customize.append(edit, remove);
    task.append(checkbox, infoList, customize);
    taskList.append(task);
}


