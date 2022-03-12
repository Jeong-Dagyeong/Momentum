const title = document.querySelector(".hello"); // eslint-disable-line no-unused-vars

const clickClass = "clicked";

function handlePageChange() {
    title.classList.toggle(clickClass);    
}

// window.addEventListener("innerWidth", handlePageChange);



