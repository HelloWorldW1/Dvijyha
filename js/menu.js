
const drawer = document.getElementById("drawer");
const openButton = document.querySelector("[data-menu]");
const closeButtons = document.querySelectorAll("[data-close]");

function setMenu(open) {
    if (!drawer) {
        return;
    }

    drawer.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
}

openButton?.addEventListener("click", () => {
    setMenu(true);
});

closeButtons.forEach((element) => {
    element.addEventListener("click", () => {
        setMenu(false);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenu(false);
    }
});
