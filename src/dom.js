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

