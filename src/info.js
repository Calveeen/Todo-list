export function info(){
    const getTitle = document.querySelector(".task-detail > .task-title");
    const getNotes = document.getElementById("notes");
    const getPriority = document.querySelector(".task-detail > select");
    const getDueDate = document.querySelector(".task-detail > .due-date");
    const title = getTitle.value;
    const notes = getNotes.value;
    const priority = getPriority.options[getPriority.selectedIndex].value;
    const dueDate = getDueDate.value;

    //also returns the node of due date 
    return {title, notes , priority, dueDate, getDueDate};
}