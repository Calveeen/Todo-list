export function info(){
    const getTitle = document.querySelector(".task-detail > .task-title");
    const getNotes = document.getElementById("notes");
    const getPriority = document.querySelector(".task-detail > select");
    const getDueDate = document.querySelector(".task-detail > .due-date");

    const title = getTitle.value;
    const notes = getNotes.value;
    const priority = getPriority.options[getPriority.selectedIndex].text;
    const dueDate = getDueDate.value;

    return {title, notes , priority, dueDate};
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
