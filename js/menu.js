
function toggleMenu(force) {
    const drawer = document.getElementById("drawer");
    const isOpen = drawer.classList.contains("open");
    const nextState = typeof force === "boolean" ? force : !isOpen;

    drawer.classList.toggle("open", nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
}

document.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", () => toggleMenu());
});

document.querySelectorAll("[data-close]").forEach((element) => {
    element.addEventListener("click", () => toggleMenu(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleMenu(false);
    }
});
