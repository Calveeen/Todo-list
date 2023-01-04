export function menuModal(){
    const menuBtn = document.querySelector(".menu");
    const exitMenu = document.querySelector(".close");
    const content = document.querySelector(".content");
    const menu = document.querySelector(".menu-modal");

    //Show menu if hamburger button is pushed
    menuBtn.addEventListener("click", () => {
        menu.classList.add("show");
        content.classList.add("dim");
    });

    //Remove menu if X is clicked
    exitMenu.addEventListener("click", () => {
        menu.classList.remove("show");
        content.classList.remove("dim");
    });
}

export function addProject(){
    const addBtn = document.querySelector(".add");
    const content = document.querySelector(".content");
    const menu = document.querySelector(".menu-modal");

    addBtn.addEventListener("click", () => {
        content.innerHTML = "";
        menu.classList.remove("show");
    });
}

export function changeProject(){
    const projects = document.querySelectorAll(".list-projects");
    projects.addEventListener("click", () => {

        //Show a different project in main content

    });
}


