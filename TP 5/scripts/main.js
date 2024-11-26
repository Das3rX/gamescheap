
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

function expandOuterWilds() {

    let divItem = document.getElementById("itemOuterWilds")
    let divOverlay = document.getElementById("imageOverlayOuterWilds");
    let enSavoirPlus = document.getElementById("enSavoirPlusOuterWilds");
    let titleOverlay = document.getElementById("titleOverlayOuterWilds");
    let arrow = document.getElementById("arrowOuterWilds");
    let purchaseDiv = document.getElementById("purchaseDivOuterWilds");
    let prix = document.getElementById("carousselPrixOuterWilds");

    if (divOverlay.classList.contains("expand")) {
        divItem.setAttribute("data-bs-interval", "8000");
        divOverlay.classList.remove("expand");
        divOverlay.classList.replace("flex-column", "flex-row");
        enSavoirPlus.classList.replace("d-none", "d-inline-block");
        titleOverlay.classList.replace("d-inline-block", "d-none");
        arrow.classList.replace("bi-chevron-down", "bi-chevron-up");
        arrow.style.marginBottom = "0rem";
        purchaseDiv.classList.replace("d-flex", "d-none");
        prix.classList.replace("d-inline-block", "d-none");
    } else {
        divItem.setAttribute("data-bs-interval", "1000000");
        divOverlay.classList.add("expand");
        divOverlay.classList.replace("flex-row", "flex-column");
        enSavoirPlus.classList.replace("d-inline-block", "d-none");
        titleOverlay.classList.replace("d-none", "d-inline-block");
        arrow.classList.replace("bi-chevron-up", "bi-chevron-down");
        arrow.style.marginBottom = "0.2rem";
        purchaseDiv.classList.replace("d-none", "d-flex");
        prix.classList.replace("d-none", "d-inline-block");
    }

}

function expandCeleste() {

    let divItem = document.getElementById("itemCeleste");
    let divOverlay = document.getElementById("imageOverlayCeleste");
    let enSavoirPlus = document.getElementById("enSavoirPlusCeleste");
    let titleOverlay = document.getElementById("titleOverlayCeleste");
    let arrow = document.getElementById("arrowCeleste");
    let purchaseDiv = document.getElementById("purchaseDivCeleste");
    let prix = document.getElementById("carousselPrixCeleste");

    if (divOverlay.classList.contains("expand")) {
        divItem.setAttribute("data-bs-interval", "8000");
        divOverlay.classList.remove("expand");
        divOverlay.classList.replace("flex-column", "flex-row");
        enSavoirPlus.classList.replace("d-none", "d-inline-block");
        titleOverlay.classList.replace("d-inline-block", "d-none");
        arrow.classList.replace("bi-chevron-down", "bi-chevron-up");
        arrow.style.marginBottom = "0rem";
        purchaseDiv.classList.replace("d-flex", "d-none");
        prix.classList.replace("d-inline-block", "d-none");
    } else {
        divItem.setAttribute("data-bs-interval", "1000000");
        divOverlay.classList.add("expand");
        divOverlay.classList.replace("flex-row", "flex-column");
        enSavoirPlus.classList.replace("d-inline-block", "d-none");
        titleOverlay.classList.replace("d-none", "d-inline-block");
        arrow.classList.replace("bi-chevron-up", "bi-chevron-down");
        arrow.style.marginBottom = "0.2rem";
        purchaseDiv.classList.replace("d-none", "d-flex");
        prix.classList.replace("d-none", "d-inline-block");
    }

}

function expandStray() {
    
    let divItem = document.getElementById("itemStray");
    let divOverlay = document.getElementById("imageOverlayStray");
    let enSavoirPlus = document.getElementById("enSavoirPlusStray");
    let titleOverlay = document.getElementById("titleOverlayStray");
    let arrow = document.getElementById("arrowStray");
    let purchaseDiv = document.getElementById("purchaseDivStray");
    let prix = document.getElementById("carousselPrixStray");

    if (divOverlay.classList.contains("expand")) {
        divItem.setAttribute("data-bs-interval", "8000");
        divOverlay.classList.remove("expand");
        divOverlay.classList.replace("flex-column", "flex-row");
        enSavoirPlus.classList.replace("d-none", "d-inline-block");
        titleOverlay.classList.replace("d-inline-block", "d-none");
        arrow.classList.replace("bi-chevron-down", "bi-chevron-up");
        arrow.style.marginBottom = "0rem";
        purchaseDiv.classList.replace("d-flex", "d-none");
        prix.classList.replace("d-inline-block", "d-none");
    } else {
        divItem.setAttribute("data-bs-interval", "1000000");
        divOverlay.classList.add("expand");
        divOverlay.classList.replace("flex-row", "flex-column");
        enSavoirPlus.classList.replace("d-inline-block", "d-none");
        titleOverlay.classList.replace("d-none", "d-inline-block");
        arrow.classList.replace("bi-chevron-up", "bi-chevron-down");
        arrow.style.marginBottom = "0.2rem";
        purchaseDiv.classList.replace("d-none", "d-flex");
        prix.classList.replace("d-none", "d-inline-block");
    }

}



