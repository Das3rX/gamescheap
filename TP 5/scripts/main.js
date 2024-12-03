
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


function search() {

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

function ajouterPanier(element, titre, prix, src, selectValue = 1) {

    let titreArray = ['Outer Wilds', 'Outer Wilds: Echoes of the Eye', 'Black Myth Wukong',
        'Metaphor: ReFantazio', 'Celeste', 'Star Wars Outlaws', 'Portal 2',
        'Call of Duty: Black Ops 6', 'Dishonored', 'Stray', 'Road 96', 'Detroit: Become Human',
        "Baldur's Gate 3", 'Subnautica', 'Red Dead Redemption 2', 'Balatro', 'Neva', 'Hades',
        'Portal', 'Dishonored 2', 'The Last of Us: Part 1', 'Disco Elysium: The Final Cut',
        'Hollow Knight', 'CyberPunk 2077'];

    let spanPanier = element.querySelector("span");
    let iconePanier = document.getElementById("iconePanier")

    let nbrItemsPanier = 0;

    if (spanPanier.classList.contains("bi-cart-plus-fill")) {
        spanPanier.classList.replace("bi-cart-plus-fill", "bi-cart-check-fill");
        element.style.outline = "0.18rem solid #1E1E2F";
        sessionStorage.setItem(titre, JSON.stringify([titre, prix, src, selectValue]))
        iconePanier.classList.add("shake");

    } else {
        spanPanier.classList.replace("bi-cart-check-fill", "bi-cart-plus-fill");
        element.style.outline = "0";
        sessionStorage.removeItem(titre);
        iconePanier.classList.remove("shake");
    }

    for (let i = 0; i < titreArray.length; i++) {
        if (sessionStorage.getItem(titreArray[i]) != null) {
            nbrItemsPanier++;
        }
    }

    sessionStorage.setItem("panierLongueur", nbrItemsPanier);

    // let iconePanier = document.getElementById("iconePanier");
    for (let i = 0; i <= nbrItemsPanier; i++) {
        if (i == nbrItemsPanier) {
            if (i >= 10) {
                iconePanier.src = "img/cart-icons/11.svg";
            } else {
                iconePanier.src = "img/cart-icons/" + (i + 1) + ".svg";
            }

        }
    }
    // iconePanier(nbrItemsPanier);

}

function loadPanier() {


    let titreArray = ['Outer Wilds', 'Outer Wilds: Echoes of the Eye', 'Black Myth Wukong',
        'Metaphor: ReFantazio', 'Celeste', 'Star Wars Outlaws', 'Portal 2',
        'Call of Duty: Black Ops 6', 'Dishonored', 'Stray', 'Road 96', 'Detroit: Become Human',
        "Baldur's Gate 3", 'Subnautica', 'Red Dead Redemption 2', 'Balatro', 'Neva', 'Hades',
        'Portal', 'Dishonored 2', 'The Last of Us: Part 1', 'Disco Elysium: The Final Cut',
        'Hollow Knight', 'CyberPunk 2077'];

    let nbrItemsPanier = 0;
    let sousTotal = 0;

    let container = document.getElementById("jeuxPanier");
    container.replaceChildren();
    listePrix.replaceChildren();
    for (let i = 0; i < titreArray.length; i++) {
        if (sessionStorage.getItem(titreArray[i]) != null) {

            let panierVide = document.getElementById("panierVide");
            let resumeTitre = document.getElementById("resumeTitre");
            let resumeCommande = document.getElementById("resumeCommande");
            let listePrix = document.getElementById("listePrix");
            let sousTotalValeur = document.getElementById("sousTotalValeur");

            let titre = JSON.parse(sessionStorage.getItem(titreArray[i]))[0];
            let prix = JSON.parse(sessionStorage.getItem(titreArray[i]))[1];
            let src = JSON.parse(sessionStorage.getItem(titreArray[i]))[2];
            let selectValue = JSON.parse(sessionStorage.getItem(titreArray[i]))[3];

            let divCarte = document.createElement("div");
            divCarte.classList.add("card", "mb-3", "jeuPanierDiv");

            let divRow = document.createElement("div");
            divRow.classList.add("row", "g-0");
            divCarte.appendChild(divRow);

            let colImg = document.createElement("div");
            colImg.classList.add("col-4", "col-lg-2");
            divRow.appendChild(colImg);

            let jeuImg = document.createElement("img");
            jeuImg.classList.add("img-fluid", "rounded-start");
            jeuImg.setAttribute("src", src);
            jeuImg.setAttribute("alt", titre);
            colImg.appendChild(jeuImg);

            let colContenu = document.createElement("div");
            colContenu.classList.add("col-8", "col-lg-10")
            divRow.appendChild(colContenu)

            let divCardBody = document.createElement("div");
            divCardBody.classList.add("card-body", "jeuPanierContenu");
            colContenu.appendChild(divCardBody);

            let titreJeu = document.createElement("h5");
            titreJeu.classList.add("card-title", "pb-2");
            titreJeu.innerText = titre;
            divCardBody.appendChild(titreJeu);

            let prixJeu = document.createElement("p");
            prixJeu.innerText = prix;
            divCardBody.appendChild(prixJeu);

            let selectQuantite = document.createElement("div");
            selectQuantite.classList.add("selectQuantite");
            divCardBody.appendChild(selectQuantite);

            let selectQuantiteForm = document.createElement("form");
            selectQuantite.appendChild(selectQuantiteForm);

            let selectQuantiteFormLabel = document.createElement("label");
            selectQuantiteFormLabel.setAttribute("for", "selectQuant");
            selectQuantiteFormLabel.innerText = "Quantité: ";
            selectQuantiteForm.appendChild(selectQuantiteFormLabel);

            let select = document.createElement("select");
            select.setAttribute("name", "selectQuant");
            select.setAttribute("id", titre);
            select.setAttribute("onchange", "updateQuant('" + titre + "')");
            selectQuantiteForm.appendChild(select);

            for (let i = 1; i <= 10; i++) {
                if (i == selectValue) {
                    let option = document.createElement("option");
                    option.innerText = i;
                    option.selected = true;
                    option.setAttribute("value", i);
                    select.appendChild(option);
                } else {
                    let option = document.createElement("option");
                    option.innerText = i;
                    option.setAttribute("value", i);
                    select.appendChild(option);
                }

            }

            let buttonSupprimer = document.createElement("button");
            buttonSupprimer.setAttribute("type", "button");
            buttonSupprimer.setAttribute("onclick", "supprimerJeu('" + titre + "')");
            buttonSupprimer.classList.add("d-block");
            let spanTrash = document.createElement("span");
            spanTrash.classList.add("bi", "bi-trash3-fill");
            buttonSupprimer.appendChild(spanTrash);
            selectQuantiteForm.appendChild(buttonSupprimer);

            container.appendChild(divCarte);


            let divParent = document.createElement("div");
            divParent.classList.add("d-flex", "justify-content-around", "align-items-center");

            let divTitre = document.createElement("div");
            divTitre.classList.add("me-auto", "titre");
            divTitre.innerText = titre + " (" + selectValue + "x)";
            divParent.appendChild(divTitre)

            divPrix = document.createElement("div");
            divPrix.classList.add("ms-auto")
            divPrix.innerText = "$" + (Number(prix.slice(1)) * Number(selectValue)).toFixed(2);
            sousTotal += Number(divPrix.innerText.slice(1));
            divParent.appendChild(divPrix);

            listePrix.appendChild(divParent)

            nbrItemsPanier++;

        }



    }


    sousTotalValeur.innerText = "$" + sousTotal.toFixed(2);
    sessionStorage.setItem("panierLongueur", nbrItemsPanier)

    if (nbrItemsPanier != 0) {
        panierVide.style.display = "none";
        resumeTitre.style.display = "block";
        resumeCommande.style.display = "block";
    } else {
        panierVide.style.display = "block";
        resumeTitre.style.display = "none";
        resumeCommande.style.display = "none";
    }

    if (nbrItemsPanier == 0) {

    } else {

    }
}

function updateQuant(titre) {
    let selectValue = document.getElementById(titre).value;
    let item = JSON.parse(sessionStorage.getItem(titre));
    item[3] = selectValue;
    sessionStorage.setItem(titre, JSON.stringify(item))
    loadPanier();
}



function ajouterWishlist(element, titre, prix, src) {
    let spanPanier = element.querySelector("span");
    if (spanPanier.classList.contains("bi-heart-fill")) {
        spanPanier.classList.replace("bi-heart-fill", "bi-bookmark-heart-fill");
        element.style.outline = "0.18rem solid #1E1E2F";
        sessionStorage.setItem("w-" + titre, JSON.stringify([titre, prix, src]))
    } else {
        spanPanier.classList.replace("bi-bookmark-heart-fill", "bi-heart-fill");
        element.style.outline = "0";
        sessionStorage.removeItem("w-" + titre);
    }

}

function loadWishlist() {


    let wishlistTitreArray = [
        'w-Outer Wilds',
        'w-Outer Wilds: Echoes of the Eye',
        'w-Black Myth Wukong',
        'w-Metaphor: ReFantazio',
        'w-Celeste',
        'w-Star Wars Outlaws',
        'w-Portal 2',
        'w-Call of Duty: Black Ops 6',
        'w-Dishonored',
        'w-Stray',
        'w-Road 96',
        'w-Detroit: Become Human',
        'w-Baldur\'s Gate 3',
        'w-Subnautica',
        'w-Red Dead Redemption 2',
        'w-Balatro',
        'w-Neva',
        'w-Hades',
        'w-Portal',
        'w-Dishonored 2',
        'w-The Last of Us: Part 1',
        'w-Disco Elysium: The Final Cut',
        'w-Hollow Knight',
        'w-CyberPunk 2077'
    ];


    for (let i = 0; i < wishlistTitreArray.length; i++) {
        if (sessionStorage.getItem(wishlistTitreArray[i]) != null) {

            let container = document.getElementById("jeuxWishlist");

            let titre = JSON.parse(sessionStorage.getItem(titreArray[i]))[0].slice(2);
            let prix = JSON.parse(sessionStorage.getItem(titreArray[i]))[1];
            let src = JSON.parse(sessionStorage.getItem(titreArray[i]))[2];

            let divCarte = document.createElement("div");
            divCarte.classList.add("card", "mb-3", "jeuPanierDiv")

            let divRow = document.createElement("div");
            divRow.classList.add("row", "g-0");
            divCarte.appendChild(divRow);

            let colImg = document.createElement("div");
            colImg.classList.add("col-4", "col-lg-2");
            divRow.appendChild(colImg);

            let jeuImg = document.createElement("img");
            jeuImg.classList.add("img-fluid", "rounded-start");
            jeuImg.setAttribute("src", src);
            jeuImg.setAttribute("alt", titre);
            colImg.appendChild(jeuImg);

            let colContenu = document.createElement("div");
            colContenu.classList.add("col-8", "col-lg-10")
            divRow.appendChild(colContenu)

            let divCardBody = document.createElement("div");
            divCardBody.classList.add("card-body", "jeuPanierContenu");
            colContenu.appendChild(divCardBody);

            let titreJeu = document.createElement("h5");
            titreJeu.classList.add("card-title", "pb-2");
            titreJeu.innerText = titre;
            divCardBody.appendChild(titreJeu);

            let prixJeu = document.createElement("p");
            prixJeu.innerText = prix;
            divCardBody.appendChild(prixJeu);

            let buttonSupprimer = document.createElement("button");
            buttonSupprimer.setAttribute("type", "button");
            buttonSupprimer.setAttribute("onclick", "supprimerJeu('" + titre + "')");
            buttonSupprimer.classList.add("d-block");
            let spanTrash = document.createElement("span");
            spanTrash.classList.add("bi", "bi-trash3-fill");
            buttonSupprimer.appendChild(spanTrash);
            divCardBody.appendChild(buttonSupprimer);

            container.appendChild(divCarte);

        }
    }
}

function appliquerCode(element) {
    let textInput = document.getElementById("codePromo");
    let sousTotalValeurOriginale = document.getElementById("sousTotalValeur").innerText;
    let sousTotalValeur = document.getElementById("sousTotalValeur");
    let boutonAppliquer = element;
    let divReduction = document.getElementById("reduction")

    if (boutonAppliquer.innerText == "Appliquer") {
        if (textInput.value == "WELCOME10") {
            sousTotalValeur.innerText = "$" + Number(sousTotalValeur.innerText.slice(1) - 10).toFixed(2);
            textInput.value = "WELCOME10";
            textInput.style.border = "0.12rem solid #424242";
            textInput.style.outline = "0";
            textInput.disabled = true;
            textInput.style.fontWeight = "bold";
            boutonAppliquer.innerText = "Retirer";
            divReduction.classList.replace("d-none", "d-block");
            textInput.setAttribute("placeholder", "");
        } else {
            textInput.style.border = "0";
            textInput.style.outline = "0.15rem solid red";
            textInput.value = "";
            textInput.setAttribute("placeholder", "Code invalide");
        }
    } else if (boutonAppliquer.innerText == "Retirer") {
        sousTotalValeur.innerText = "$" + (Number(sousTotalValeur.innerText.slice(1)) + 10).toFixed(2);
        textInput.value = "";
        textInput.disabled = false;
        boutonAppliquer.innerText = "Appliquer";
        textInput.style.fontWeight = "normal";
        divReduction.classList.replace("d-block", "d-none");
        textInput.style.border = "0.12rem solid #424242";
        textInput.style.outline = "0";
        textInput.setAttribute("placeholder", "");
    }


}


function supprimerJeu(tag) {
    sessionStorage.removeItem(tag);
    location.reload()
}


function iconePanier(nbrItemsPanier) {
    let iconePanier = document.getElementById("iconePanier")
    for (let i = 0; i <= nbrItemsPanier; i++) {
        if (i == nbrItemsPanier) {
            if (i >= 10) {
                iconePanier.src = "img/cart-icons/11.svg";
            } else {
                iconePanier.src = "img/cart-icons/" + (i + 1) + ".svg";
            }

        }
    }
}

function cacherh1() {
    let h1 = document.getElementById("titreh1");
    let iconePanier = document.getElementById("iconePanier");
    if (document.documentElement.scrollTop > 40) {
        h1.style.zIndex = "-1";
        iconePanier.style.boxShadow = "0rem 0rem 2.5rem white";
        if (document.documentElement.scrollTop > 55) {
            h1.style.visibility = "hidden"
        }
    } else {
        h1.style.zIndex = "10";
        h1.style.visibility = "visible"
        iconePanier.style.boxShadow = "none";
    }
}

function saveSousTotal() {
    let sousTotal = document.getElementById("sousTotalValeur");
    sessionStorage.setItem("sousTotalValeur", sousTotal.innerText);
}

// function iconePanierJeux(element, titre) {
//     let titreArray = ['Outer Wilds', 'Outer Wilds: Echoes of the Eye', 'Black Myth Wukong',
//         'Metaphor: ReFantazio', 'Celeste', 'Star Wars Outlaws', 'Portal 2',
//         'Call of Duty: Black Ops 6', 'Dishonored', 'Stray', 'Road 96', 'Detroit: Become Human',
//         "Baldur's Gate 3", 'Subnautica', 'Red Dead Redemption 2', 'Balatro', 'Neva', 'Hades',
//         'Portal', 'Dishonored 2', 'The Last of Us: Part 1', 'Disco Elysium: The Final Cut',
//         'Hollow Knight', 'CyberPunk 2077'];


//     for (let i = 0; i < titreArray.length; i++) {
//         if (sessionStorage.getItem(titreArray[i]) == titre) {
//             let spanPanier = element.querySelector("span");
//             spanPanier.classList.replace("bi-cart-plus-fill", "bi-cart-check-fill");
//             element.style.outline = "0.18rem solid #1E1E2F";

//         } else {
//             let spanPanier = element.querySelector("span");
//             spanPanier.classList.replace("bi-cart-check-fill", "bi-cart-plus-fill");
//             element.style.outline = "0";
//         }

//     }
// }
