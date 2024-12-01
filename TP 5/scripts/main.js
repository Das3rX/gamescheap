
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

function loadArray() {

    let outerWilds = document.getElementById("outerWilds");
    let echoesOfTheEye = document.getElementById("echoesOfTheEye");
    let blackMythWukong = document.getElementById("blackMythWukong");
    let metaphorReFantazio = document.getElementById("metaphorReFantazio");
    let celeste = document.getElementById("celeste");
    let starWarsOutlaws = document.getElementById("starWarsOutlaws");
    let portal2 = document.getElementById("portal2");
    let callOfDutyBlackOps6 = document.getElementById("callOfDutyBlackOps6");
    let dishonored = document.getElementById("dishonored");
    let stray = document.getElementById("stray");
    let road96 = document.getElementById("road96");
    let detroitBecomeHuman = document.getElementById("detroitBecomeHuman");
    let baldursGate3 = document.getElementById("baldursGate3");
    let subnautica = document.getElementById("subnautica");
    let redDeadRedemption2 = document.getElementById("redDeadRedemption2");
    let balatro = document.getElementById("balatro");
    let neva = document.getElementById("neva");
    let hades = document.getElementById("hades");
    let portal = document.getElementById("portal");
    let dishonored2 = document.getElementById("dishonored2");
    let theLastOfUs = document.getElementById("theLastOfUs");
    let discoElysium = document.getElementById("discoElysium");
    let hollowKnight = document.getElementById("hollowKnight");
    let cyberpunk2077 = document.getElementById("cyberpunk2077");


    let productsArray = [
        outerWilds,
        echoesOfTheEye,
        blackMythWukong,
        metaphorReFantazio,
        celeste,
        starWarsOutlaws,
        portal2,
        callOfDutyBlackOps6,
        dishonored,
        stray,
        road96,
        detroitBecomeHuman,
        baldursGate3,
        subnautica,
        redDeadRedemption2,
        balatro,
        neva,
        hades,
        portal,
        dishonored2,
        theLastOfUs,
        discoElysium,
        hollowKnight,
        cyberpunk2077
    ];
    return productsArray;
}


function search()  {

let productsArray = loadArray();
let searchBar = document.getElementById("searchBar");

for (let i = 0; i < productsArray.length; i++) {
    let titreJeu = productsArray[i].getElementsByTagName("h3")[0];


    if (!(titreJeu.textContent.toLowerCase().includes(searchBar.value.toLowerCase()))) {
        productsArray[i].style.display = "none";

    } else {

        productsArray[i].style.display = "inline-block";
    }
}

}

function x() {
    let searchBar = document.getElementById("searchBar");
    let productsArray = loadArray();
    searchBar.value = "";
    for (let i = 0; i < productsArray.length; i++) {
        productsArray[i].style.display = "inline-block";
    }
}

function ajouterPanier(element,titre, prix, src) {
    let spanPanier = element.querySelector("span")
    if (spanPanier.classList.contains("bi-cart-plus-fill")) {
        spanPanier.classList.replace("bi-cart-plus-fill", "bi-cart-check-fill");
        element.style.outline = "0.18rem solid #1E1E2F"
        
    } else {
        spanPanier.classList.replace("bi-cart-check-fill", "bi-cart-plus-fill");
        element.style.outline = "0"
    }

}