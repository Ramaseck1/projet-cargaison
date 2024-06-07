"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Produit_1 = require("./Model/Produit");
var Cargaison_1 = require("./Model/Cargaison");
var cargaisons = [];
var filteredCargaisons = [];
var produits = [];
function showDetails(type, distance) {
    console.log("Type recherché:", type);
    console.log("Distance recherchée:", distance);
    var cargaison = cargaisons.find(function (c) { return c.type === type && c.distance === distance; });
    console.log("Cargaison trouvée:", cargaison);
    if (cargaison) {
        var details = "\n            <p>Type: ".concat(cargaison.type, "</p>\n            <p>Distance: ").concat(cargaison.distance, " km</p>\n            <p>Lieu de d\u00E9part: ").concat(cargaison.lieu_depart, "</p>\n            <p>Lieu d'arriv\u00E9e: ").concat(cargaison.lieu_arrive, "</p>\n            <p>Date de d\u00E9but: ").concat(cargaison.datedebut, "</p>\n            <p>Date de fin: ").concat(cargaison.datefin, "</p>\n        ");
        var detailsContainer = document.getElementById('details-container');
        if (detailsContainer) {
            detailsContainer.innerHTML = details;
            var modal = document.getElementById('details-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.showModal();
            }
        }
    }
    else {
        console.log("Cargaison non trouvée.");
    }
}
function closeModal() {
    var modal = document.getElementById('details-modal');
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
window.showDetails = showDetails;
var code;
function addProduct(numero) {
    var detailsContainer = document.getElementById('ajouter-container');
    if (detailsContainer) {
        var modal = document.getElementById('ajouter-product');
        if (modal) {
            modal.classList.remove('hidden');
            modal.showModal(); // Afficher le modal
        }
    }
    console.log(numero);
    code = numero;
}
function closeModals() {
    var modal = document.getElementById('details-modal');
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
window.addProduct = addProduct;
function validateForm() {
    var typeInput = document.getElementById('type-cargaison');
    var nbrproduit = document.getElementById('Nproduit');
    var nbrproduitError = document.getElementById('Nproduit-error');
    var datedebutInput = document.getElementById('date-debut');
    var datefinInput = document.getElementById('date-fin');
    var datedebutError = document.getElementById('datedebut-error');
    var datefinError = document.getElementById('datefin-error');
    var isValid = true;
    if (typeInput.value === "") {
        isValid = false;
    }
    datedebutError.textContent = '';
    datefinError.textContent = '';
    if (datedebutInput.value === "") {
        datedebutError.textContent = "Veuillez remplir ce champ.";
        datedebutError.style.color = "red";
        isValid = false;
    }
    if (datefinInput.value === "") {
        datefinError.textContent = "Veuillez remplir ce champ.";
        datefinError.style.color = "red";
        isValid = false;
    }
    var dateDebut = new Date(datedebutInput.value);
    var today = new Date();
    if (dateDebut <= today) {
        datedebutError.textContent = "La date de début doit être supérieure à la date d'aujourd'hui.";
        datedebutError.style.color = "red";
        isValid = false;
    }
    var dateFin = new Date(datefinInput.value);
    if (dateFin <= dateDebut) {
        datefinError.textContent = "La date de fin doit être supérieure à la date de début.";
        datefinError.style.color = "red";
        isValid = false;
    }
    return isValid;
}
var prevPageButton = document.getElementById('prevPage');
var nextPageButton = document.getElementById('nextPage');
var currentPageSpan = document.getElementById('currentPage');
var currentPage = 1;
var itemsPerPage = 4;
prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});
nextPageButton.addEventListener('click', function () {
    var totalItems = cargaisons.length;
    var lastPage = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < lastPage) {
        currentPage++;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});
function afficherCargaisons(data) {
    fetch('http://www.rama.seck:9000/projetcargaison/save.php')
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        return response.text();
    })
        .then(function (responseText) {
        try {
            var data_1 = JSON.parse(responseText);
            if (!data_1.cargaisons) {
                throw new Error('Données mal structurées');
            }
            cargaisons = data_1.cargaisons;
            var cargaisonList_1 = document.getElementById('tbodycargaison');
            if (!cargaisonList_1) {
                console.error('Element avec ID "tbodycargaison" non trouvé');
                return;
            }
            cargaisonList_1.innerHTML = '';
            if (cargaisons.length === 0) {
                var message = document.createElement('p');
                message.textContent = 'Aucune cargaison ne correspond aux critères de filtrage.';
                cargaisonList_1.appendChild(message);
                return;
            }
            var startIndex = (currentPage - 1) * itemsPerPage;
            var endIndex = startIndex + itemsPerPage;
            var paginatedCargaisons = (filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons).slice(startIndex, endIndex);
            paginatedCargaisons.forEach(function (cargaison) {
                var row = document.createElement('tr');
                row.innerHTML = "\n                        <td>".concat(cargaison.codeUnique, "</td>\n                        <td>").concat(cargaison.type, "</td>\n                        <td>").concat(cargaison.distance, "</td>\n                        <td>").concat(cargaison.datedebut, "</td>\n                        <td>").concat(cargaison.datefin, "</td>\n                        <td>").concat(cargaison.lieu_depart, "</td>\n                        <td>").concat(cargaison.lieu_arrive, "</td>\n                        <td>en cour</td>\n                        <td>fermer</td>\n                        <td style=\"display:flex !important\">\n                        <button  style=\"border:none\" class=\"text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"showDetails('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">D\u00E9tails</button>\n                        <button style=\"border:none\" data-id=\"").concat(cargaison.codeUnique, "  class=\"products text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"addProduct('").concat(cargaison.codeUnique, "')\" >Ajouter</button>\n                        </td>\n\n                       \n\n                    ");
                cargaisonList_1.appendChild(row);
            });
            var totalItems = cargaisons.length;
            var lastPage = Math.ceil(totalItems / itemsPerPage);
            currentPageSpan.textContent = currentPage.toString();
            prevPageButton.disabled = currentPage === 1;
            nextPageButton.disabled = currentPage === lastPage;
        }
        catch (error) {
            console.error('Erreur lors du parsing JSON:', error);
            console.log('Raw response text:', responseText);
        }
    })
        .catch(function (error) {
        console.error('Erreur lors du fetch:', error);
    });
    /*    document.querySelectorAll('.products').forEach(produit =>{
           produit.addEventListener('click',(event)=>{
             
               const target=event.target as HTMLElement;
               const numero= target.getAttribute('data-numero')
               console.log(numero);
           })
       
       }) */
}
function filterCargaisons() {
    var codeInputElement = document.getElementById('code');
    var datedebutInputElement = document.getElementById('date-debut');
    var datefinInputElement = document.getElementById('date-fin');
    var lieuDepartInputElement = document.getElementById('lieu-depart');
    var lieuArriveInputElement = document.getElementById('lieu-arrive');
    var codeInput = (codeInputElement === null || codeInputElement === void 0 ? void 0 : codeInputElement.value.trim().toLowerCase()) || '';
    var datedebutInput = (datedebutInputElement === null || datedebutInputElement === void 0 ? void 0 : datedebutInputElement.value.trim()) || '';
    var datefinInput = (datefinInputElement === null || datefinInputElement === void 0 ? void 0 : datefinInputElement.value.trim()) || '';
    var lieuDepartInput = (lieuDepartInputElement === null || lieuDepartInputElement === void 0 ? void 0 : lieuDepartInputElement.value.trim().toLowerCase()) || '';
    var lieuArriveInput = (lieuArriveInputElement === null || lieuArriveInputElement === void 0 ? void 0 : lieuArriveInputElement.value.trim().toLowerCase()) || '';
    filteredCargaisons = cargaisons.filter(function (cargaison) {
        var matchCode = codeInput ? cargaison.codeUnique.toLowerCase().includes(codeInput) : true;
        var matchDateDebut = datedebutInput ? cargaison.datedebut === datedebutInput : true;
        var matchDateFin = datefinInput ? cargaison.datefin === datefinInput : true;
        var matchLieuDepart = lieuDepartInput ? cargaison.lieu_depart.toLowerCase().includes(lieuDepartInput) : true;
        var matchLieuArrive = lieuArriveInput ? cargaison.lieu_arrive.toLowerCase().includes(lieuArriveInput) : true;
        return matchCode && matchDateDebut && matchDateFin && matchLieuDepart &&
            matchLieuArrive;
    });
    currentPage = 1;
    afficherCargaisons(filteredCargaisons);
}
var filterButton = document.getElementById('filter-button');
if (filterButton) {
    filterButton.addEventListener('click', function (event) {
        event.preventDefault();
        filterCargaisons();
    });
}
document.addEventListener('DOMContentLoaded', function () {
    afficherCargaisons(cargaisons);
});
afficherCargaisons(cargaisons);
var form = document.getElementById('cargaisonForm');
var envoie = document.getElementById('submit-cargaison');
envoie.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var distanceInput, typeInput, poidscargaison, nombreproduit, datedebutInput, datefinInput, lieudepartInput, lieuarriverInput, distance, type, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieuarrive, cargaison, cargaisonData, data, response, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                if (!validateForm()) return [3 /*break*/, 8];
                distanceInput = document.getElementById('distance');
                typeInput = document.getElementById('type-cargaison');
                poidscargaison = document.getElementById('poids');
                nombreproduit = document.getElementById('Nproduit');
                datedebutInput = document.getElementById('date-debut');
                datefinInput = document.getElementById('date-fin');
                lieudepartInput = document.getElementById('lieu_depart');
                lieuarriverInput = document.getElementById('lieu_arrive');
                distance = parseInt(distanceInput.value);
                type = typeInput.value;
                datedebut = datedebutInput.value;
                datefin = datefinInput.value;
                poidscargo = parseFloat(poidscargaison.value);
                nomreproduit = parseInt(nombreproduit.value);
                lieudepart = lieudepartInput.value;
                lieuarrive = lieuarriverInput.value;
                cargaison = null;
                switch (type) {
                    case 'aerienne':
                        cargaison = new Cargaison_1.CargaisonAerienne(distance, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieuarrive);
                        break;
                    case 'maritime':
                        cargaison = new Cargaison_1.CargaisonMaritime(distance, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieudepart);
                        break;
                    case 'routiere':
                        cargaison = new Cargaison_1.CargaisonRoutiere(distance, datedebut, datefin, poidscargo, nomreproduit, lieuarrive, lieudepart);
                        break;
                }
                if (!cargaison) return [3 /*break*/, 8];
                cargaisons.push(cargaison);
                cargaisonData = {
                    codeUnique: cargaison.codeUnique,
                    type: cargaison.type,
                    distance: cargaison.distance,
                    produits: cargaison.produits,
                    datedebut: cargaison.datedebut,
                    datefin: cargaison.datefin,
                    poidscargo: cargaison.poidscargo,
                    nomreproduit: cargaison.nomreproduit,
                    lieu_depart: cargaison.lieu_depart,
                    lieu_arrive: cargaison.lieu_arrive,
                };
                data = JSON.stringify(cargaisonData);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: data
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                console.log('Succès:', result);
                afficherCargaisons(cargaisons);
                return [3 /*break*/, 5];
            case 4:
                console.error('Erreur lors de la requête:', response.statusText);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error('Erreur lors de l\'envoi:', error_1);
                return [3 /*break*/, 7];
            case 7:
                alert("cargaison ajouté");
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
//pagination
//option d"affichage poids ou nb de proquit dans le tableau
var nbrproduct = document.getElementById('nb');
var poid = document.getElementById('pd');
/*     document.addEventListener('DOMContentLoaded', (event) => {
        const modal = document.getElementById('details-modal');
        const closeButton = document.querySelector('.close-button');
    
        if (modal && closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
    
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
        } */
//formulaire cargaison
var productform = document.getElementById('btn-envoyer');
productform.addEventListener('click', function (event) {
    event.preventDefault();
    handleProductFormSubmit(event);
});
function handleProductFormSubmit(event) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var libelleProduit, typeProduit, poidsProduit, toxicite, produit, produitData, data, response, result, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    libelleProduit = document.getElementById('libelle-produit').value;
                    typeProduit = document.getElementById('type-produit').value;
                    poidsProduit = parseFloat(document.getElementById('poids-produit').value);
                    toxicite = ((_a = document.getElementById('toxicite')) === null || _a === void 0 ? void 0 : _a.valueAsNumber) || 0;
                    switch (typeProduit) {
                        case 'Alimentaire':
                            produit = new Produit_1.Alimentaire(libelleProduit, poidsProduit);
                            break;
                        case 'Chimique':
                            produit = new Produit_1.Chimique(libelleProduit, poidsProduit, toxicite);
                            break;
                        case 'Fragile':
                            produit = new Produit_1.Fragile(libelleProduit, poidsProduit);
                            break;
                        case 'Incassable':
                            produit = new Produit_1.Incassable(libelleProduit, poidsProduit);
                            break;
                        default:
                            console.error('Type de produit non reconnu');
                            return [2 /*return*/, false];
                    }
                    produitData = {
                        "libelle": libelleProduit,
                        "poids": poidsProduit,
                        "type": typeProduit,
                        "toxicite": toxicite,
                        "idCargaison": code // Remplacez 'idCargaison' par l'ID de la cargaison appropriée
                    };
                    data = JSON.stringify(produitData);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: data
                        })];
                case 2:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _b.sent();
                    console.log('Succès:', result);
                    // Affiche les produits après ajout
                    afficherProduits();
                    return [3 /*break*/, 5];
                case 4:
                    console.error('Erreur lors de la requête:', response.statusText);
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _b.sent();
                    console.error('Erreur lors de l\'envoi:', error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, false];
            }
        });
    });
}
/* function ajouterProduit(libelle: string, type: string, poids: number, toxicite: number) {
    const listeProduits = document.getElementById('liste-produits');

    // Créer un élément de liste pour afficher les détails du produit
    const nouvelElement = document.createElement('li');
    nouvelElement.textContent = `Libellé: ${libelle}, Type: ${type}, Poids: ${poids}, Toxicité: ${toxicite}`;
    
    // Ajouter l'élément à la liste des produits
    if (listeProduits) {
        listeProduits.appendChild(nouvelElement);
    } else {
        console.error('Liste des produits introuvable');
    }
}
 */
function afficherProduits() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, produits_1, listeProduits_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    produits_1 = data.produits;
                    listeProduits_1 = document.getElementById('liste-produits');
                    // Vider la liste actuelle
                    if (listeProduits_1) {
                        listeProduits_1.innerHTML = '';
                        produits_1.forEach(function (produit) {
                            var nouvelElement = document.createElement('li');
                            nouvelElement.textContent = "Libell\u00E9: ".concat(produit.libelle, ", Type: ").concat(produit.type, ", Poids: ").concat(produit.poids, ", Toxicit\u00E9: ").concat(produit.toxicite);
                            listeProduits_1.appendChild(nouvelElement);
                        });
                    }
                    else {
                        console.error('Liste des produits introuvable');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Erreur lors de la requête:', response.statusText);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error('Erreur lors de la récupération des produits:', error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Appeler la fonction afficherProduits au chargement de la page
// document.addEventListener('DOMContentLoaded', (event) => {
//     afficherProduits();
// }); 
// Event listener for product form submission
// Attache l'événement de soumission au formulaire lors du chargement du document
var cargopleinSelect = document.getElementById('cargoplein');
if (cargopleinSelect) {
    cargopleinSelect.addEventListener('change', function (e) {
        var selectedValue = e.target.value;
        toggleTableColumns(selectedValue);
    });
    // Initial toggle based on the default value
    toggleTableColumns(cargopleinSelect.value);
}
var poidsContainer = document.getElementById('poids-produit');
var nbProduitsContainer = document.getElementById('nbr_produit');
poidsContainer.style.display = "none";
nbProduitsContainer.style.display = "none";
//choix cargaison pleine
(_a = document.getElementById('cargoplein')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    var poidsContainer = document.getElementById('poids-produit');
    var nbProduitsContainer = document.getElementById('nbr_produit');
    if (this.value === 'poids') {
        if (poidsContainer)
            poidsContainer.style.display = 'block';
        if (nbProduitsContainer)
            nbProduitsContainer.style.display = 'none';
    }
    else if (this.value === 'nbproduit') {
        if (poidsContainer)
            poidsContainer.style.display = 'none';
        if (nbProduitsContainer)
            nbProduitsContainer.style.display = 'block';
    }
});
// affichage optioneele des valeurs pods et nbproduit
function toggleTableColumns(value) {
    var nbColumn = document.getElementById('nb');
    var pdColumn = document.getElementById('pd');
    var nbCells = document.querySelectorAll('.nb-cell');
    var pdCells = document.querySelectorAll('.pd-cell');
    if (value === 'poids') {
        nbColumn.style.display = 'none';
        pdColumn.style.display = '';
        nbCells.forEach(function (cell) { return cell.style.display = 'none'; });
        pdCells.forEach(function (cell) { return cell.style.display = ''; });
    }
    else {
        nbColumn.style.display = '';
        pdColumn.style.display = 'none';
        nbCells.forEach(function (cell) { return cell.style.display = ''; });
        pdCells.forEach(function (cell) { return cell.style.display = 'none'; });
    }
}
var burger = document.getElementById('burger');
var sidebar = document.getElementById('sidebar');
var millieu = document.getElementById("main");
var accueil = document.getElementById("accueil");
var accecargaison = document.getElementById("btncargaison");
burger.addEventListener('click', function () {
    sidebar.classList.toggle('show');
});
burger.style.marginLeft = "-250px";
burger.style.zIndex = "1";
burger.style.transform = "translateX(100%)";
burger.style.transition = "transform 0.3s ase-in-out";
var cont = document.getElementById("container");
cont.style.marginLeft = "330px";
var container = document.getElementById("section");
var Cargaisons = document.getElementById("cargaison");
var produit = document.getElementById("produit");
var section1 = document.getElementById("section1");
section1.style.display = "none";
container.style.display = "none";
/*  Cargaisons.addEventListener("click", () => {
     container.style.display = "block";
     section1.style.display = "none";
     millieu.style.display = "none";
     footer.style.marginTop = "550px";
 });
 
 produit.addEventListener("click", () => {
     section1.style.display = "block";
     container.style.display = "none";
     millieu.style.display = "none";
     footer.style.marginTop = "43%";
 });
  */
/*  accueil.addEventListener("click", () => {
     millieu.style.display = "block";
     section1.style.display = "none";
     container.style.display = "none";
     footer.style.marginTop = "1%";
 });
 
 accecargaison.addEventListener("click", () => {
     container.style.display = "block";
     millieu.style.display = "none";
     section1.style.display = "none";
     footer.style.marginTop = "350px";
 }); */
var images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/avionss.jpg'];
var currentIndex = 0;
function changeBackgroundImage() {
    document.getElementById('main').style.backgroundImage = "url('".concat(images[currentIndex], "')");
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 2000);
var modalss = document.getElementById("my_modal_5");
var body = document.querySelector("body");
var modals = document.getElementById("modals");
modals.addEventListener("click", function () {
    modalss.style.display = "block";
});
var mod = document.getElementById('fermer');
mod.style.color = "red";
var fermer = document.getElementById("annuler");
fermer.style.color = "red";
fermer.addEventListener("click", function () {
    mod.style.display = "none";
    form.reset();
});
document.getElementById('cargoplein').addEventListener('change', function () {
    var nbproduits = document.getElementById('nbproduits');
    if (this.value === 'nbproduit') {
        if (nbproduits) {
            nbproduits.style.display = 'block';
        }
    }
    else {
        if (nbproduits) {
            nbproduits.style.display = 'none';
        }
    }
});
// map
// Récupération du formulaire
// Définition des classes de produits
// Ajoutez cet écouteur d'événements après que la page ait chargé
//# sourceMappingURL=index.js.map