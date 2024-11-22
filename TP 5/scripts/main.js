function changex() {
    let burger = document.getElementById("burger");
    let nav = document.getElementById("nav");

    if (burger.classList.contains("bi-list")) {
        burger.classList.replace("bi-list", "bi-x");
        nav.style.borderRadius = "0.2rem";
    } else if (burger.classList.contains("bi-x")) {
        burger.classList.replace("bi-x", "bi-list");
        nav.style.borderRadius = "0rem";
    }

}

function expand() {

    let divOverlay = document.getElementById("imageOverlay");
    let enSavoirPlus = document.getElementById("enSavoirPlus")
    let titleOverlay = document.getElementById("titleOverlay")
    let arrow = document.getElementById("arrow")
    let purchaseButton = document.getElementById("purchaseButton")
    let prix = document.getElementById("carousselPrix")

    if (divOverlay.classList.contains("expand")) {
        divOverlay.classList.remove("expand");
        divOverlay.classList.replace("flex-column", "flex-row");
        enSavoirPlus.classList.replace("d-none", "d-inline-block");
        titleOverlay.classList.replace("d-inline-block", "d-none");
        arrow.classList.replace("bi-chevron-down", "bi-chevron-up");
        arrow.style.marginBottom = "0rem";
        purchaseButton.classList.replace("d-inline-block", "d-none");
        prix.classList.replace("d-inline-block", "d-none");
    } else {
        divOverlay.classList.add("expand");
        divOverlay.classList.replace("flex-row", "flex-column");
        enSavoirPlus.classList.replace("d-inline-block", "d-none");
        titleOverlay.classList.replace("d-none", "d-inline-block");
        arrow.classList.replace("bi-chevron-up", "bi-chevron-down");
        arrow.style.marginBottom = "0.2rem";
        purchaseButton.classList.replace("d-none", "d-inline-block");
        prix.classList.replace("d-none", "d-inline-block");
    }

}