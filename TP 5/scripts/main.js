
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


    let iconePanier = document.getElementById("iconePanier")
    let nbrItemsPanier = 0;
    if (element.innerText == "") {

        let spanPanier = element.querySelector("span");

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

    } else if (element.innerText == "Ajouter au panier" || element.innerText == "Ajouté au panier") {
        if (element.innerText == "Ajouter au panier") {
            element.innerText = "Ajouté au panier";
            element.style.outline = "0.18rem solid #1E1E2F";
            sessionStorage.setItem(titre, JSON.stringify([titre, prix, src, selectValue]))
            iconePanier.classList.add("shake");

        } else if (element.innerText == "Ajouté au panier") {
            element.innerText = "Ajouter au panier";
            element.style.outline = "0";
            sessionStorage.removeItem(titre);
            iconePanier.classList.remove("shake");
        }
    }




    for (let i = 0; i < titreArray.length; i++) {
        if (sessionStorage.getItem(titreArray[i]) != null) {
            nbrItemsPanier++;
        }
    }

    sessionStorage.setItem("panierLongueur", nbrItemsPanier);

    if (element.innerText == "") {
        for (let i = 0; i <= nbrItemsPanier; i++) {
            if (i == nbrItemsPanier) {
                if (i >= 10) {
                    iconePanier.src = "img/cart-icons/11.svg";
                } else {
                    iconePanier.src = "img/cart-icons/" + (i + 1) + ".svg";
                }

            }
        }

    } else if (element.innerText == "Ajouter au panier" || element.innerText == "Ajouté au panier") {
        for (let i = 0; i <= nbrItemsPanier; i++) {
            if (i == nbrItemsPanier) {
                if (i >= 10) {
                    iconePanier.src = "../img/cart-icons/11.svg";
                } else {
                    iconePanier.src = "../img/cart-icons/" + (i + 1) + ".svg";
                }

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
            titreJeu.classList.add("card-title", "pb-2",);
            titreJeu.style.whiteSpace = "nowrap";
            titreJeu.style.overflow = "hidden";
            titreJeu.style.textOverflow = "ellipsis";

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
        'w-Baldurs Gate 3',
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

    let container = document.getElementById("jeuxWishlist");
    let titrePage = document.getElementById("resumeTitre");

    for (let i = 0; i < wishlistTitreArray.length; i++) {
        if (sessionStorage.getItem(wishlistTitreArray[i]) != null) {




            let titre = JSON.parse(sessionStorage.getItem(wishlistTitreArray[i]))[0];
            let prix = JSON.parse(sessionStorage.getItem(wishlistTitreArray[i]))[1];
            let src = JSON.parse(sessionStorage.getItem(wishlistTitreArray[i]))[2];

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

            // let buttonPageMagasin = document.createElement("a");
            // buttonPageMagasin.setAttribute("type", "button");
            // buttonPageMagasin.setAttribute("href", "pages jeux/" + titre.replaceAll(" ", "") + ".html")
            // buttonPageMagasin.classList.add("d-block");
            // buttonPageMagasin.innerText = "Page du magasin"
            // divCardBody.appendChild(buttonPageMagasin);


            let buttonSupprimer = document.createElement("button");
            buttonSupprimer.setAttribute("type", "button");
            buttonSupprimer.setAttribute("onclick", "supprimerJeuWishlist('" + titre + "')");
            buttonSupprimer.classList.add("d-block");
            let spanTrash = document.createElement("span");
            spanTrash.classList.add("bi", "bi-trash3-fill");
            buttonSupprimer.appendChild(spanTrash);
            divCardBody.appendChild(buttonSupprimer);

            container.appendChild(divCarte);

        }
    }

    if (container.children.length == 0) {
        titrePage.style.marginBottom = "12.5rem";
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

function supprimerJeuWishlist(tag) {
    sessionStorage.removeItem("w-" + tag);
    location.reload()
}


function iconePanier() {
    let iconePanier = document.getElementById("iconePanier");
    let nbrItemsPanier = sessionStorage.getItem("panierLongueur");
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

function iconePanierPageJeux() {
    let iconePanier = document.getElementById("iconePanier");
    let nbrItemsPanier = sessionStorage.getItem("panierLongueur");
    for (let i = 0; i <= nbrItemsPanier; i++) {
        if (i == nbrItemsPanier) {
            if (i >= 10) {
                iconePanier.src = "../img/cart-icons/11.svg";
            } else {
                iconePanier.src = "../img/cart-icons/" + (i + 1) + ".svg";
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
    sessionStorage.setItem("sousTotalValeur", sousTotal.innerText.slice(1));
}

function chargerPrix() {
    let sousTotal = document.getElementById("sousTotalValeurCheckout");
    sousTotal.innerText = "$" + Number(sessionStorage.getItem("sousTotalValeur"));

    let tps = document.getElementById("tpsValeur");
    tps.innerText = "$" + (Number(sessionStorage.getItem("sousTotalValeur")) * 0.05).toFixed(2);

    let tvq = document.getElementById("tvqValeur");
    tvq.innerText = "$" + (Number(sessionStorage.getItem("sousTotalValeur")) * 0.09975).toFixed(2);

    let total = document.getElementById("totalValeur");
    total.innerText = "CAD$" + (Number(sessionStorage.getItem("sousTotalValeur")) + (Number(sessionStorage.getItem("sousTotalValeur")) * 0.05) + (Number(sessionStorage.getItem("sousTotalValeur")) * 0.09975)).toFixed(2)
}


function validerPaiement() {

    let inputPrenom = document.getElementById("inputPrenom");
    let inputNom = document.getElementById("inputNom");
    let inputEmail = document.getElementById("inputEmail");
    let inputTel = document.getElementById("inputTel");
    let inputCardNo = document.getElementById("inputCardNo");
    let inputDateExp = document.getElementById("inputDateExp");
    let inputCcv = document.getElementById("inputCcv");
    let inputConditions = document.getElementById("conditionsUtilisation");

    let formValidite = 0;

    if (!inputPrenom.value.includes("  ") && inputPrenom.value.length >= 2) {
        formValidite++;
        inputPrenom.style.border = "0.15rem solid #564f6f";
    } else {
        inputPrenom.style.border = "0.15rem solid red";
    }

    if (!inputNom.value.includes("  ") && inputNom.value.length >= 2) {
        formValidite++;
        inputNom.style.border = "0.15rem solid #564f6f";
    } else {
        inputNom.style.border = "0.15rem solid red";
    }

    if (inputEmail.value.includes("@") && inputEmail.value.includes(".") && inputEmail.value.length >= 5) {
        formValidite++;
        inputEmail.style.border = "0.15rem solid #564f6f";
    } else {
        inputEmail.style.border = "0.15rem solid red";
    }

    if (inputTel.value.length == 10) {
        formValidite++;
        inputTel.style.border = "0.15rem solid #564f6f";
    } else {
        inputTel.style.border = "0.15rem solid red";
    }

    if (inputCardNo.value.length == 16) {
        formValidite++;
        inputCardNo.style.border = "0.15rem solid #564f6f";
    } else {
        inputCardNo.style.border = "0.15rem solid red";
    }

    if (inputDateExp.value.length == 4) {
        formValidite++;
        inputDateExp.style.border = "0.15rem solid #564f6f";
    } else {
        inputDateExp.style.border = "0.15rem solid red";
    }

    if (inputCcv.value.length == 3) {
        formValidite++;
        inputCcv.style.border = "0.15rem solid #564f6f";
    } else {
        inputCcv.style.border = "0.15rem solid red";
    }

    if (inputConditions.checked) {
        formValidite++;
        inputConditions.style.outline = "0";
    } else {
        inputConditions.style.outline = "0.12rem solid red";
    }


    if (formValidite == 8) {
        sessionStorage.setItem("prenom", inputPrenom);
        sessionStorage.setItem("nom", inputNom);
        window.location.href = "codeJeux.html";
    }
}


function iconesSpanPanier() {

    let titreArray = ['Outer Wilds', 'Outer Wilds: Echoes of the Eye', 'Black Myth Wukong',
        'Metaphor: ReFantazio', 'Celeste', 'Star Wars Outlaws', 'Portal 2',
        'Call of Duty: Black Ops 6', 'Dishonored', 'Stray', 'Road 96', 'Detroit: Become Human',
        "Baldur's Gate 3", 'Subnautica', 'Red Dead Redemption 2', 'Balatro', 'Neva', 'Hades',
        'Portal', 'Dishonored 2', 'The Last of Us: Part 1', 'Disco Elysium: The Final Cut',
        'Hollow Knight', 'CyberPunk 2077'];

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



    // panier

    for (let i = 0; i < titreArray.length; i++) {
        if (sessionStorage.getItem(titreArray[i]) != null) {
            let titre = JSON.parse(sessionStorage.getItem(titreArray[i]))[0];
            if (document.getElementById("w-" + titre.replaceAll(" ", "")) != null) {
                let icone = document.getElementById(titre.replaceAll(" ", ""));

                if (icone.innerText == "Ajouter au panier") {
                    icone.style.outline = "0.18rem solid #1E1E2F";
                    icone.innerText = "Ajouté au panier"
                } else if (icone.innerText == "") {
                    let span = icone.querySelector("span");
                    span.classList.replace("bi-cart-plus-fill", "bi-cart-check-fill");
                    icone.style.outline = "0.18rem solid #1E1E2F";
                }
            }

        }

        // wishlist

        for (let i = 0; i < wishlistTitreArray.length; i++) {
            if (sessionStorage.getItem(wishlistTitreArray[i]) != null) {
                let titre = JSON.parse(sessionStorage.getItem(wishlistTitreArray[i]))[0];
                if (document.getElementById("w-" + titre.replaceAll(" ", "")) != null) {
                    let icone = document.getElementById("w-" + titre.replaceAll(" ", ""));
                    let span = icone.querySelector("span");
                    span.classList.replace("bi-heart-fill", "bi-bookmark-heart-fill");
                    icone.style.outline = "0.18rem solid #1E1E2F";
                }

            }
        }

    }

}


function loadCodes() {
    let numeroCommande = document.getElementById("numeroCommande");
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let resultat = "";
    for (let i = 0; i < 14; i++) {
        let indexRandom = Math.floor(Math.random() * caracteres.length);
        resultat += caracteres[indexRandom];
    }
    numeroCommande.innerText = "No. de commande: #" + resultat;



    let colDroite = document.getElementById("colDroite")
    let colGauche = document.getElementById("colGauche")

    let largeurEcran = window.innerWidth;

    let nbrItem = 0

    let titreArray = ['Outer Wilds', 'Outer Wilds: Echoes of the Eye', 'Black Myth Wukong',
        'Metaphor: ReFantazio', 'Celeste', 'Star Wars Outlaws', 'Portal 2',
        'Call of Duty: Black Ops 6', 'Dishonored', 'Stray', 'Road 96', 'Detroit: Become Human',
        "Baldur's Gate 3", 'Subnautica', 'Red Dead Redemption 2', 'Balatro', 'Neva', 'Hades',
        'Portal', 'Dishonored 2', 'The Last of Us: Part 1', 'Disco Elysium: The Final Cut',
        'Hollow Knight', 'CyberPunk 2077'];


    for (let i = 0; i < titreArray.length; i++) {
        if (sessionStorage.getItem(titreArray[i]) != null) {
            nbrItem++;
            let titre = JSON.parse(sessionStorage.getItem(titreArray[i]))[0];
            let quantite = JSON.parse(sessionStorage.getItem(titreArray[i]))[3];

            let divInner = document.createElement("div");
            divInner.classList.add("codeDivItemInner");

            let h3 = document.createElement("h3");
            h3.innerText = titre;
            divInner.appendChild(h3);

            for (let j = 0; j < quantite; j++) {
                let formInput = document.createElement("form");
                formInput.classList.add("d-flex");
                
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.classList.add("me-2", "flex-grow-1", "codesInput")
                input.setAttribute("value", creerCode());
                input.setAttribute("id", titre + j);
                input.disabled = true;
                formInput.appendChild(input);

                let copyButton = document.createElement("button");
                copyButton.setAttribute("type", "button");
                copyButton.setAttribute("onclick", `copier(this, '${titre + j}')`);
                let span = document.createElement("span");
                span.classList.add("bi", "bi-clipboard-plus-fill");
                copyButton.appendChild(span);
                formInput.appendChild(copyButton);

                divInner.appendChild(formInput)
            }

            if (largeurEcran <= 991) {
                colGauche.appendChild(divInner);
                
            } else if (largeurEcran > 991) {
                if (sessionStorage.getItem("panierLongueur") == 1) {
                    let codesDiv = document.getElementById("codesDiv");
                    codesDiv.classList.replace("row-cols-lg-2", "row-cols-lg-1");
                    colGauche.appendChild(divInner);

                } else {
                    codesDiv.classList.replace("row-cols-lg-1", "row-cols-lg-2");
                    if (nbrItem % 2 == 0) {
                        colGauche.appendChild(divInner);
                    } else {
                        colDroite.appendChild(divInner);
                    }
                }

            }


        }

    }

    
}

function creerCode() {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let resultat = "";

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            let indexRandom = Math.floor(Math.random() * caracteres.length);
            resultat += caracteres[indexRandom];
        }
        if (i != 3) {
            resultat += "-";
        }

    }

    return resultat;
}

function copier(element, id) {
    let texte = document.getElementById(id);

    texte.select();
    texte.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(texte.value);

    let span = element.querySelector("span");
        span.classList.replace("bi-clipboard-plus-fill", "bi-clipboard-check-fill");
        element.style.border = "0.15rem solid #d1d7e0";

}

function adptationsPC() {

    let imgPromotions = document.getElementById("imgPromotions");
    let imgCodePromo = document.getElementById("imgCodePromo");
    let vendeurFiables = document.getElementById("vendeurFiables");
    let echoesOfTheEye = document.getElementById("echoesOfTheEye");
    let portal2 = document.getElementById("portal2");
    let dishonored2 = document.getElementById("dishonored2");
    let bg3 = document.getElementById("bg3");

    if (window.innerWidth > 991) {
        imgPromotions.src = "img/AdaptationsGrandEcran/promotions.png";
        imgCodePromo.src = "img/AdaptationsGrandEcran/Codepromo.png";
        vendeurFiables.src= "img/AdaptationsGrandEcran/vendeursFiables.png"
        echoesOfTheEye.src= "img/AdaptationsGrandEcran/eote.png"
        portal2.src= "img/AdaptationsGrandEcran/portal2.png"
        dishonored2.src= "img/AdaptationsGrandEcran/dishonored2.png"
        bg3.src= "img/AdaptationsGrandEcran/bg3.png"
    }
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

