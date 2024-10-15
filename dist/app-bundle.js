/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Model/Cargaison.ts":
/*!********************************!*\
  !*** ./src/Model/Cargaison.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CargaisonRoutiere = exports.CargaisonMaritime = exports.CargaisonAerienne = exports.Cargaison = void 0;
var Cargaison = /** @class */ (function () {
    function Cargaison(distance, type, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        this.produits = [];
        this.distance = distance;
        this.type = type;
        this.datedebut = datedebut;
        this.datefin = datefin;
        this.poidscargo = poidscargo;
        this.nomreproduit = nomreproduit;
        this.codeUnique = Cargaison.generateUniqueCode(); // Générer un code unique lors de la création
        this.lieu_depart = lieu_depart;
        this.lieu_arrive = lieu_arrive;
        this.status = 'fermer'; // Initialiser le statut à 'fermer'
        this.etatAvancement = 'en_attente'; // Initialiser l'état d'avancement à 'en_attente' par défaut   
    }
    Cargaison.prototype.ajouterProduit = function (produit) {
        if (this.produits.length >= 10) {
            this.produits = [];
            console.log("Cargaison pleine, impossible d'ajouter plus de produits.");
            return;
        }
        this.produits.push(produit);
        console.log("Produit ajout\u00E9. Montant total: ".concat(this.sommeTotaleC(), "F"));
    };
    Cargaison.prototype.nbProduits = function () {
        return this.produits.length;
    };
    Cargaison.prototype.calculerFrais = function (produit) {
        var frais = 0;
        switch (this.type) {
            case "maritime":
                frais = 100 * produit.getPoids() * this.distance;
                break;
            case "aerienne":
                frais = 300 * produit.getPoids() * this.distance;
                break;
            case "routiere":
                frais = 90 * produit.getPoids() * this.distance;
                break;
        }
        return frais;
    };
    Cargaison.prototype.sommeTotaleC = function () {
        var _this = this;
        return this.produits.reduce(function (acc, produit) { return acc + _this.calculerFrais(produit); }, 0);
    };
    Cargaison.prototype.toggleStatus = function () {
        this.status = this.status === 'fermer' ? 'ouvrir' : 'fermer';
    };
    Cargaison.prototype.updateStatus = function (newEtat) {
        if (['en_cours', 'en_attente', 'arrive'].includes(newEtat)) {
            this.etatAvancement = newEtat;
        }
        else {
            console.error("État d'avancement invalide");
        }
    };
    Cargaison.generateUniqueCode = function () {
        var randomCode = Math.random().toString(36).substr(2, 4); // Générer une chaîne aléatoire de longueur 7
        return "CO" + randomCode;
    };
    return Cargaison;
}());
exports.Cargaison = Cargaison;
var CargaisonAerienne = /** @class */ (function (_super) {
    __extends(CargaisonAerienne, _super);
    function CargaisonAerienne(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "aerienne", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonAerienne.prototype.info = function () {
        return "Cargaison A\u00E9rienne (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin, ", Statut: ").concat(this.status, " , \u00C9tat d'avancement: ").concat(this.etatAvancement);
    };
    return CargaisonAerienne;
}(Cargaison));
exports.CargaisonAerienne = CargaisonAerienne;
var CargaisonMaritime = /** @class */ (function (_super) {
    __extends(CargaisonMaritime, _super);
    function CargaisonMaritime(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "maritime", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonMaritime.prototype.info = function () {
        return "Cargaison Maritime (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin, ", Statut: ").concat(this.status, " , \u00C9tat d'avancement: ").concat(this.etatAvancement);
    };
    return CargaisonMaritime;
}(Cargaison));
exports.CargaisonMaritime = CargaisonMaritime;
var CargaisonRoutiere = /** @class */ (function (_super) {
    __extends(CargaisonRoutiere, _super);
    function CargaisonRoutiere(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "routiere", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonRoutiere.prototype.info = function () {
        return "Cargaison Routi\u00E8re (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin, ", Statut: ").concat(this.status, " , \u00C9tat d'avancement: ").concat(this.etatAvancement);
    };
    return CargaisonRoutiere;
}(Cargaison));
exports.CargaisonRoutiere = CargaisonRoutiere;


/***/ }),

/***/ "./src/Model/Produit.ts":
/*!******************************!*\
  !*** ./src/Model/Produit.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Incassable = exports.Fragile = exports.Chimique = exports.Alimentaire = exports.Produit = void 0;
var Produit = /** @class */ (function () {
    function Produit(Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        this.libelle = libelle;
        this.Typeproduit = Typeproduit;
        this.poids = poids;
        this.codeUnique = Produit.generateUniqueCode(); // Générer un code unique lors de la création
        this.nomClient = nomClient;
        this.prenomClient = prenomClient;
        this.telephoneClient = telephoneClient;
        this.adresseClient = adresseClient;
        this.nomDestinataire = nomDestinataire;
        this.prenomDestinataire = prenomDestinataire;
        this.adresseDestinataire = adresseDestinataire;
        this.emaildestinataire = emaildestinataire;
    }
    Produit.prototype.getLibelle = function () {
        return this.libelle;
    };
    Produit.prototype.setLibelle = function (libelle) {
        this.libelle = libelle;
    };
    Produit.prototype.getPoids = function () {
        return this.poids;
    };
    Produit.prototype.setPoids = function (poids) {
        this.poids = poids;
    };
    Produit.generateUniqueCode = function () {
        var randomCode = Math.random().toString(36).substr(2, 4); // Générer une chaîne aléatoire de longueur 7
        return "P" + randomCode;
    };
    return Produit;
}());
exports.Produit = Produit;
var Alimentaire = /** @class */ (function (_super) {
    __extends(Alimentaire, _super);
    function Alimentaire(Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    Alimentaire.prototype.info = function () {
        return "Alimentaire - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Alimentaire;
}(Produit));
exports.Alimentaire = Alimentaire;
var Chimique = /** @class */ (function (_super) {
    __extends(Chimique, _super);
    function Chimique(Typeproduit, libelle, poids, toxicite, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        var _this = _super.call(this, Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
        _this.toxicite = toxicite;
        return _this;
    }
    Chimique.prototype.getToxicite = function () {
        return this.toxicite;
    };
    Chimique.prototype.setToxicite = function (toxicite) {
        this.toxicite = toxicite;
    };
    Chimique.prototype.info = function () {
        return "Chimique - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg, Toxicit\u00E9: ").concat(this.toxicite);
    };
    return Chimique;
}(Produit));
exports.Chimique = Chimique;
var Materiel = /** @class */ (function (_super) {
    __extends(Materiel, _super);
    function Materiel(Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    return Materiel;
}(Produit));
var Fragile = /** @class */ (function (_super) {
    __extends(Fragile, _super);
    function Fragile(Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    Fragile.prototype.info = function () {
        return "Fragile - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Fragile;
}(Materiel));
exports.Fragile = Fragile;
var Incassable = /** @class */ (function (_super) {
    __extends(Incassable, _super);
    function Incassable(Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, Typeproduit, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    Incassable.prototype.info = function () {
        return "Incassable - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Incassable;
}(Materiel));
exports.Incassable = Incassable;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Produit_1 = __webpack_require__(/*! ./Model/Produit */ "./src/Model/Produit.ts");
var Cargaison_1 = __webpack_require__(/*! ./Model/Cargaison */ "./src/Model/Cargaison.ts");
var cargaisons = [];
var filteredCargaisons = [];
var produits = [];
/* function ajouterProduitLocalement(produit: Produit) {
    produitsAjoutes.push(produit);
}
 */
function showDetails(type, distance) {
    return __awaiter(this, void 0, void 0, function () {
        var cargaison, produits_1, response, data, produits_2, error_1, details_1, detailsContainer, modal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Type recherché:", type);
                    console.log("Distance recherchée:", distance);
                    cargaison = cargaisons.find(function (c) { return c.type === type && c.distance === distance; });
                    console.log("Cargaison trouvée:", cargaison);
                    if (!cargaison) return [3 /*break*/, 6];
                    produits_1 = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                            method: 'GET'
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    produits_2 = data.produits;
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Erreur lors du chargement des données des produits:', error_1);
                    return [3 /*break*/, 5];
                case 5:
                    details_1 = "\n            <p>Type: ".concat(cargaison.type, "</p>\n            <p>Distance: ").concat(cargaison.distance, " km</p>\n            <p>Lieu de d\u00E9part: ").concat(cargaison.lieu_depart, "</p>\n            <p>Lieu d'arriv\u00E9e: ").concat(cargaison.lieu_arrive, "</p>\n            <p>Date de d\u00E9but: ").concat(cargaison.datedebut, "</p>\n            <p>Date de fin: ").concat(cargaison.datefin, "</p>\n            <p>Produits:</p>\n            <table style=\"width: 50vw ;\">           \n                <tr>\n                    <th>Type de produit</th>\n                    <th>Libell\u00E9</th>\n                    <th>Poids</th>\n                    <th>nomClient</th> \n                    <th>prenomClient</th>\n                    <th>telephoneClient</th>\n                    <th>adresseClient</th>\n                    <th>nomDestinataire</th>\n                    <th>prenomDestinataire</th>\n                    <th>adresseDestinataire</th>\n                    <th>emaildestinataire</th>\n                    <th>code</th>\n            \n                </tr>\n        ");
                    // Afficher les détails des produits associés à la cargaison
                    cargaison.produits.forEach(function (produit) {
                        details_1 += "\n                <tr>\n                    <td>".concat(produit.Typeproduit, "</td>\n                    <td>").concat(produit.libelle, "</td>\n                    <td>").concat(produit.poids, "</td>\n                    <td>").concat(produit.nomClient, "</td>\n                    <td>").concat(produit.prenomClient, "</td>\n                    <td>").concat(produit.telephoneClient, "</td>\n                    <td>").concat(produit.adresseClient, "</td>\n                    <td>").concat(produit.nomDestinataire, "</td>\n                    <td>").concat(produit.prenomDestinataire, "</td>\n                    <td>").concat(produit.adresseDestinataire, "</td>\n                    <td>").concat(produit.emaildestinataire, "</td>\n                    <td>").concat(produit.codeUnique, "</td>\n\n                    \n                </tr>\n            ");
                    });
                    console.log(cargaison.produits);
                    details_1 += "</table>";
                    detailsContainer = document.getElementById('details-container');
                    if (detailsContainer) {
                        detailsContainer.innerHTML = details_1;
                        modal = document.getElementById('details-modal');
                        if (modal) {
                            modal.classList.remove('hidden');
                            modal.showModal();
                        }
                    }
                    return [3 /*break*/, 7];
                case 6:
                    console.log("Cargaison non trouvée.");
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
window.showDetails = showDetails;
function closeModal() {
    var modal = document.getElementById('details-modal');
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
var code;
function addProduct(numero) {
    // Rechercher la cargaison correspondant au numéro donné
    var cargaison = cargaisons.find(function (c) { return c.codeUnique === numero; });
    // Vérifier si la cargaison existe
    if (cargaison) {
        // Vérifier le nombre de produits dans la cargaison
        if (cargaison.produits.length >= 10) {
            alert("La cargaison est pleine (plus de 10 produits) !");
            return;
        }
        // Afficher le formulaire d'ajout de produit si la cargaison n'est pas pleine
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
    else {
        // Gérer le cas où la cargaison n'est pas trouvée (facultatif)
        alert("Cargaison non trouvée.");
    }
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
//fonction fermer ouvert cargaison
function toggleStatus(codeUnique) {
    return __awaiter(this, void 0, void 0, function () {
        var cargaison, newStatus, data, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cargaison = cargaisons.find(function (c) { return c.codeUnique === codeUnique; });
                    if (!cargaison) return [3 /*break*/, 7];
                    newStatus = cargaison.status === 'fermer' ? 'ouvrir' : 'fermer';
                    data = JSON.stringify({ codeUnique: codeUnique, status: newStatus });
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
                    if (result.status === "success") {
                        cargaison.status = newStatus;
                        document.getElementById("toggle-".concat(codeUnique)).textContent = newStatus; // Mise à jour du statut dans la table HTML
                    }
                    else {
                        console.error('Erreur lors de la mise à jour du statut:', result.message);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    console.error('Erreur lors de la requête:', response.statusText);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error('Erreur lors de l\'envoi:', error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
window.toggleStatus = toggleStatus;
//fonction pour pour l"etat d'avancement
function updateStatus(codeUnique) {
    return __awaiter(this, void 0, void 0, function () {
        var selectElement, newEtat, response, result, button, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectElement = document.getElementById("status-select-".concat(codeUnique));
                    newEtat = selectElement.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetcargaison/save.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ codeUnique: codeUnique, etatAvancement: newEtat })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    if (result.etatAvancement === "success") {
                        button = document.getElementById("toggle-".concat(codeUnique));
                        if (button) {
                            button.textContent = newEtat;
                        }
                    }
                    else {
                        console.error('Erreur lors de la mise à jour du statut:', result.message);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    console.error('Erreur lors de la requête:', response.statusText);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error('Erreur lors de l\'envoi:', error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
window.updateStatus = updateStatus;
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
                row.innerHTML = "\n                        <td >".concat(cargaison.codeUnique, "</td>\n                        <td>").concat(cargaison.type, "</td>\n                        <td>").concat(cargaison.distance, "</td>\n                        <td>").concat(cargaison.datedebut, "</td>\n                        <td style=\"width:100vw\">").concat(cargaison.datefin, "</td>\n                        <td>").concat(cargaison.lieu_depart, "</td>\n                        <td>").concat(cargaison.lieu_arrive, "</td>\n                        <td>\n                        <select id=\"status-select-").concat(cargaison.codeUnique, "\" onchange=\"updateStatus('").concat(cargaison.codeUnique, "')\">\n                            <option value=\"en attente\">En attente</option>\n                            <option value=\"en cours\">En cours</option>\n                            <option value=\"arriv\u00E9\">Arrive</option>\n                        </select>\n                    </td>                      \n                      <td id=\"status-").concat(cargaison.codeUnique, "\">\n                        <button id=\"toggle-").concat(cargaison.codeUnique, "\" onclick=\"toggleStatus('").concat(cargaison.codeUnique, "')\">").concat(cargaison.status, "</button>\n                        \n                        </td>\n                        <td style=\"display:flex !important\">\n                        <button  style=\"border:none\" class=\"text-blue-400 text-xl pr-3 font-bold rounded \" onclick=\"showDetails('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">D\u00E9tails</button>\n                        <button style=\"border:none\" class=\"products text-green-400 text-xl pr-3 font-bold rounded\" onclick=\"addProduct('").concat(cargaison.codeUnique, "')\" >Ajouter</button>\n                        </td>\n\n                    ");
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
function createNotification(message, type) {
    if (type === void 0) { type = 'success'; }
    // Add CSS for notifications
    var style = document.createElement('style');
    style.innerHTML = "\n    .notification-container {\n        position: relative;\n        z-index: 1000;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .notification {\n        background-color: #4caf50;\n        color: white;\n        padding: 15px;\n        border-radius: 5px;\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        animation: fadeIn 0.5s;\n        width: 80%;\n        max-width: 500px;\n    }\n\n    .notification .close-btn {\n        background: none;\n        border: none;\n        color: white;\n        font-size: 16px;\n        cursor: pointer;\n        margin-left: 15px;\n    }\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n            transform: translateY(-10px);\n        }\n        to {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n    ";
    document.head.appendChild(style);
    var form = document.getElementById('cargaisonForm');
    var container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.classList.add('notification-container');
        form.parentNode.insertBefore(container, form);
    }
    var notification = document.createElement('div');
    notification.classList.add('notification');
    if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
    }
    else if (type === 'warning') {
        notification.style.backgroundColor = '#ff9800';
    }
    notification.innerHTML = "\n        <span>".concat(message, "</span>\n        <button class=\"close-btn\">&times;</button>\n    ");
    container.appendChild(notification);
    notification.querySelector('.close-btn').addEventListener('click', function () {
        notification.remove();
    });
    setTimeout(function () {
        notification.remove();
    }, 3000);
}
afficherCargaisons(cargaisons);
var form = document.getElementById('cargaisonForm');
var envoie = document.getElementById('submit-cargaison');
envoie.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var distanceInput, typeInput, poidscargaison, nombreproduit, datedebutInput, datefinInput, lieudepartInput, lieuarriverInput, distance, type, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieuarrive, cargaison, cargaisonData, data, response, result, error_4;
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
                    status: cargaison.status,
                    etatAvancement: cargaison.etatAvancement
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
                error_4 = _a.sent();
                console.error('Erreur lors de l\'envoi:', error_4);
                return [3 /*break*/, 7];
            case 7:
                createNotification('cargaison ajouté', 'error');
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
//valider form produit
function createNotificationproduit(message, type) {
    if (type === void 0) { type = 'success'; }
    // Ajouter du CSS pour les notifications
    var style = document.createElement('style');
    style.innerHTML = "\n            .notification-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 1000;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n        \n            .notification {\n                background-color: green;\n                color: white;\n                padding: 15px;\n                border-radius: 5px;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                animation: fadeIn 0.5s;\n            }\n        \n            .notification .close-btn {\n                background: none;\n                border: none;\n                color: white;\n                font-size: 16px;\n                cursor: pointer;\n                margin-left: 15px;\n            }\n        \n            @keyframes fadeIn {\n                from {\n                    opacity: 0;\n                    transform: translateY(-10px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n            ";
    document.head.appendChild(style);
    var container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.classList.add('notification-container');
        document.body.appendChild(container);
    }
    var notification = document.createElement('div');
    notification.classList.add('notification');
    if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
    }
    else if (type === 'warning') {
        notification.style.backgroundColor = '#ff9800';
    }
    notification.innerHTML = "\n                <span>".concat(message, "</span>\n                <button class=\"close-btn\">&times;</button>\n            ");
    container.appendChild(notification);
    notification.querySelector('.close-btn').addEventListener('click', function () {
        notification.remove();
    });
    setTimeout(function () {
        notification.remove();
    }, 5000);
}
// Fonction de validation du formulaire
function validateProductForm() {
    var _a;
    var libelleProduit = document.getElementById('libelle-produit').value;
    var typeProduit = document.getElementById('type-produit').value;
    var poidsProduit = parseFloat(document.getElementById('poids-produit').value);
    var toxicite = ((_a = document.getElementById('toxicite')) === null || _a === void 0 ? void 0 : _a.valueAsNumber) || 0;
    var nomclient = document.getElementById('nom').value;
    var prenomclient = document.getElementById('prenom').value;
    var telephone = document.getElementById('telephone').value;
    var adresse = document.getElementById('adresse').value;
    var nomdestinataire = document.getElementById('nomd').value;
    var prenomdestinataire = document.getElementById('prenomd').value;
    var addressedestinataire = document.getElementById('adressed').value;
    var emaildestinataire = document.getElementById('email').value;
    // Vérifiez si les champs requis sont vides
    if (!libelleProduit) {
        alert('Veuillez remplir le champ Libellé Produit.');
        return false;
    }
    if (!typeProduit) {
        alert('Veuillez sélectionner un Type de Produit.');
        return false;
    }
    if (isNaN(poidsProduit)) {
        alert('Veuillez entrer un Poids valide.');
        return false;
    }
    if (typeProduit === 'Chimique' && isNaN(toxicite)) {
        alert('Veuillez entrer une Toxicité valide.');
        return false;
    }
    if (!nomclient) {
        alert('Veuillez remplir le champ Nom Client.');
        return false;
    }
    if (!prenomclient) {
        alert('Veuillez remplir le champ Prénom Client.');
        return false;
    }
    if (!telephone) {
        alert('Veuillez remplir le champ Téléphone.');
        return false;
    }
    if (!adresse) {
        alert('Veuillez remplir le champ Adresse.');
        return false;
    }
    if (!nomdestinataire) {
        alert('Veuillez remplir le champ Nom Destinataire.');
        return false;
    }
    if (!prenomdestinataire) {
        alert('Veuillez remplir le champ Prénom Destinataire.');
        return false;
    }
    if (!addressedestinataire) {
        alert('Veuillez remplir le champ Adresse Destinataire.');
        return false;
    }
    if (!emaildestinataire) {
        alert('Veuillez remplir le champ Email Destinataire.');
        return false;
    }
    return true;
}
// Modifiez votre gestionnaire d'événements pour appeler la fonction de validation avant d'envoyer le formulaire
//formulaire cargaison
var productform = document.getElementById('btn-envoyer');
productform.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                // Validation du formulaire
                return [4 /*yield*/, handleProductFormSubmit(event)];
            case 1:
                // Validation du formulaire
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function handleProductFormSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var libelleProduit, typeProduit, poidsProduit, toxicite, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire, produit, produitData, data, response, result, error_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    libelleProduit = document.getElementById('libelle-produit').value;
                    typeProduit = document.getElementById('type-produit').value;
                    poidsProduit = parseFloat(document.getElementById('poids-produit').value);
                    toxicite = ((_a = document.getElementById('toxicite')) === null || _a === void 0 ? void 0 : _a.valueAsNumber) || 0;
                    nomclient = document.getElementById('nom').value;
                    prenomclient = document.getElementById('prenom').value;
                    telephone = document.getElementById('telephone').value;
                    adresse = document.getElementById('adresse').value;
                    nomdestinataire = document.getElementById('nomd').value;
                    prenomdestinataire = document.getElementById('prenomd').value;
                    addressedestinataire = document.getElementById('adressed').value;
                    emaildestinataire = document.getElementById('email').value;
                    console.log("jjj", poidsProduit);
                    switch (typeProduit) {
                        case 'Alimentaire':
                            produit = new Produit_1.Alimentaire(typeProduit, libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Chimique':
                            produit = new Produit_1.Chimique(typeProduit, libelleProduit, poidsProduit, toxicite, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Fragile':
                            produit = new Produit_1.Fragile(typeProduit, libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Incassable':
                            produit = new Produit_1.Incassable(typeProduit, libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        default:
                            console.error('Type de produit non reconnu');
                            return [2 /*return*/, false];
                    }
                    produitData = {
                        type: typeProduit,
                        code: code,
                        product: produit,
                        codeUniques: produit.codeUnique,
                    };
                    data = JSON.stringify(produitData);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    produits.push(produit); // Ajouter le produit à la liste des produits
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
                    createNotificationproduit("produit ajouté");
                    return [3 /*break*/, 5];
                case 4:
                    console.error('Erreur lors de la requête:', response.statusText);
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_5 = _b.sent();
                    console.error('Erreur lors de l\'envoi:', error_5);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, false];
            }
        });
    });
}
/* function afficherProduits() {
    // Afficher les produits dans la console par exemple
    console.log("Produits ajoutés:", produitsAjoutes);
}
 */
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHckMsaUVBQWlFOzs7Ozs7O1VDeGxDckU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL01vZGVsL0NhcmdhaXNvbi50cyIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC8uL3NyYy9Nb2RlbC9Qcm9kdWl0LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSAnLi9Qcm9kdWl0JztcblxuYWJzdHJhY3QgY2xhc3MgQ2FyZ2Fpc29uIHtcbiAgICBwdWJsaWMgcHJvZHVpdHM6IFByb2R1aXRbXSA9IFtdO1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGRhdGVkZWJ1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkYXRlZmluOiBzdHJpbmc7XG4gICAgcHVibGljIHBvaWRzY2FyZ286IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tcmVwcm9kdWl0OiBudW1iZXI7XG4gICAgcHVibGljIGNvZGVVbmlxdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGlldV9kZXBhcnQ6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9kZXBhcnRcbiAgICBwdWJsaWMgbGlldV9hcnJpdmU6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9hcnJpdmVcbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmc7IC8vIEFqb3V0IGRlIGxhIHByb3ByacOpdMOpIHN0YXR1c1xuICAgIHB1YmxpYyBldGF0QXZhbmNlbWVudDogc3RyaW5nOyAvLyBBam91dCBkZSBsYSBwcm9wcmnDqXTDqSBldGF0QXZhbmNlbWVudFxuXG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlciwgdHlwZTogc3RyaW5nLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRhdGVkZWJ1dCA9IGRhdGVkZWJ1dDtcbiAgICAgICAgdGhpcy5kYXRlZmluID0gZGF0ZWZpbjtcbiAgICAgICAgdGhpcy5wb2lkc2NhcmdvID0gcG9pZHNjYXJnbztcbiAgICAgICAgdGhpcy5ub21yZXByb2R1aXQgPSBub21yZXByb2R1aXQ7XG4gICAgICAgIHRoaXMuY29kZVVuaXF1ZSA9IENhcmdhaXNvbi5nZW5lcmF0ZVVuaXF1ZUNvZGUoKTsgLy8gR8OpbsOpcmVyIHVuIGNvZGUgdW5pcXVlIGxvcnMgZGUgbGEgY3LDqWF0aW9uXG4gICAgICAgIHRoaXMubGlldV9kZXBhcnQgPSBsaWV1X2RlcGFydDtcbiAgICAgICAgdGhpcy5saWV1X2Fycml2ZSA9IGxpZXVfYXJyaXZlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICdmZXJtZXInOyAvLyBJbml0aWFsaXNlciBsZSBzdGF0dXQgw6AgJ2Zlcm1lcidcbiAgICAgICAgdGhpcy5ldGF0QXZhbmNlbWVudCA9ICdlbl9hdHRlbnRlJzsgLy8gSW5pdGlhbGlzZXIgbCfDqXRhdCBkJ2F2YW5jZW1lbnQgw6AgJ2VuX2F0dGVudGUnIHBhciBkw6lmYXV0ICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgYWpvdXRlclByb2R1aXQocHJvZHVpdDogUHJvZHVpdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWl0cy5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVpdHMgPSBbXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gcGxlaW5lLCBpbXBvc3NpYmxlIGQnYWpvdXRlciBwbHVzIGRlIHByb2R1aXRzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1aXRzLnB1c2gocHJvZHVpdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9kdWl0IGFqb3V0w6kuIE1vbnRhbnQgdG90YWw6ICR7dGhpcy5zb21tZVRvdGFsZUMoKX1GYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5iUHJvZHVpdHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVpdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjdWxlckZyYWlzKHByb2R1aXQ6IFByb2R1aXQpOiBudW1iZXIge1xuICAgICAgICBsZXQgZnJhaXM6IG51bWJlciA9IDA7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibWFyaXRpbWVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDEwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWVyaWVubmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDMwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicm91dGllcmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDkwICogcHJvZHVpdC5nZXRQb2lkcygpICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNvbW1lVG90YWxlQygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0cy5yZWR1Y2UoKGFjYywgcHJvZHVpdCkgPT4gYWNjICsgdGhpcy5jYWxjdWxlckZyYWlzKHByb2R1aXQpLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG4gICAgcHVibGljIHRvZ2dsZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PT0gJ2Zlcm1lcicgPyAnb3V2cmlyJyA6ICdmZXJtZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTdGF0dXMobmV3RXRhdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChbJ2VuX2NvdXJzJywgJ2VuX2F0dGVudGUnLCAnYXJyaXZlJ10uaW5jbHVkZXMobmV3RXRhdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXRhdEF2YW5jZW1lbnQgPSBuZXdFdGF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIsOJdGF0IGQnYXZhbmNlbWVudCBpbnZhbGlkZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCk7IC8vIEfDqW7DqXJlciB1bmUgY2hhw65uZSBhbMOpYXRvaXJlIGRlIGxvbmd1ZXVyIDdcbiAgICAgICAgcmV0dXJuIFwiQ09cIiArIHJhbmRvbUNvZGU7ICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uQWVyaWVubmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZywpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwiYWVyaWVubmVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIEHDqXJpZW5uZSAoQ29kZTogJHt0aGlzLmNvZGVVbmlxdWV9KSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9LCBQb2lkcyBkZSBsYSBjYXJnYWlzb246ICR7dGhpcy5wb2lkc2NhcmdvfSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubm9tcmVwcm9kdWl0fSwgRGF0ZSBkZSBkw6lidXQ6ICR7dGhpcy5kYXRlZGVidXR9LCBEYXRlIGRlIGZpbjogJHt0aGlzLmRhdGVmaW59LCBTdGF0dXQ6ICR7dGhpcy5zdGF0dXN9ICwgw4l0YXQgZCdhdmFuY2VtZW50OiAke3RoaXMuZXRhdEF2YW5jZW1lbnR9YDtcbiAgICB9XG59XG5cbmNsYXNzIENhcmdhaXNvbk1hcml0aW1lIGV4dGVuZHMgQ2FyZ2Fpc29uIHtcbiAgICBjb25zdHJ1Y3RvcihkaXN0YW5jZTogbnVtYmVyLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwibWFyaXRpbWVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIE1hcml0aW1lIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uUm91dGllcmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihkaXN0YW5jZSwgXCJyb3V0aWVyZVwiLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1X2RlcGFydCxsaWV1X2Fycml2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBDYXJnYWlzb24gUm91dGnDqHJlIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IENhcmdhaXNvbiwgQ2FyZ2Fpc29uQWVyaWVubmUsIENhcmdhaXNvbk1hcml0aW1lLCBDYXJnYWlzb25Sb3V0aWVyZSB9O1xuXG5cblxuIiwiYWJzdHJhY3QgY2xhc3MgUHJvZHVpdCB7XG4gICAgcHVibGljIFR5cGVwcm9kdWl0OiBzdHJpbmc7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgcG9pZHM6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tQ2xpZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHByZW5vbUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgYWRyZXNzZUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyBub21EZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgY29kZVVuaXF1ZTogc3RyaW5nO1xuXG5cblxuXG4gICAgY29uc3RydWN0b3IoVHlwZXByb2R1aXQ6IHN0cmluZyxsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIG5vbUNsaWVudDogc3RyaW5nLCBwcmVub21DbGllbnQ6IHN0cmluZywgdGVsZXBob25lQ2xpZW50OiBzdHJpbmcsIGFkcmVzc2VDbGllbnQ6IHN0cmluZywgbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIHByZW5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBhZHJlc3NlRGVzdGluYXRhaXJlOiBzdHJpbmcsIGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5saWJlbGxlID0gbGliZWxsZTtcbiAgICAgICAgdGhpcy5UeXBlcHJvZHVpdCA9IFR5cGVwcm9kdWl0O1xuICAgICAgICB0aGlzLnBvaWRzID0gcG9pZHM7XG4gICAgICAgIHRoaXMuY29kZVVuaXF1ZSA9IFByb2R1aXQuZ2VuZXJhdGVVbmlxdWVDb2RlKCk7IC8vIEfDqW7DqXJlciB1biBjb2RlIHVuaXF1ZSBsb3JzIGRlIGxhIGNyw6lhdGlvblxuICAgICAgICB0aGlzLm5vbUNsaWVudCA9IG5vbUNsaWVudDtcbiAgICAgICAgdGhpcy5wcmVub21DbGllbnQgPSBwcmVub21DbGllbnQ7XG4gICAgICAgIHRoaXMudGVsZXBob25lQ2xpZW50ID0gdGVsZXBob25lQ2xpZW50O1xuICAgICAgICB0aGlzLmFkcmVzc2VDbGllbnQgPSBhZHJlc3NlQ2xpZW50O1xuICAgICAgICB0aGlzLm5vbURlc3RpbmF0YWlyZSA9IG5vbURlc3RpbmF0YWlyZTtcbiAgICAgICAgdGhpcy5wcmVub21EZXN0aW5hdGFpcmUgPSBwcmVub21EZXN0aW5hdGFpcmU7XG4gICAgICAgIHRoaXMuYWRyZXNzZURlc3RpbmF0YWlyZSA9IGFkcmVzc2VEZXN0aW5hdGFpcmU7XG4gICAgICAgIHRoaXMuZW1haWxkZXN0aW5hdGFpcmUgPSBlbWFpbGRlc3RpbmF0YWlyZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMaWJlbGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpYmVsbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExpYmVsbGUobGliZWxsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvaWRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaWRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb2lkcyhwb2lkczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlVW5pcXVlQ29kZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByYW5kb21Db2RlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDQpOyAvLyBHw6luw6lyZXIgdW5lIGNoYcOubmUgYWzDqWF0b2lyZSBkZSBsb25ndWV1ciA3XG4gICAgICAgIHJldHVybiBcIlBcIiArIHJhbmRvbUNvZGU7ICAgIH1cbiAgICBcbn1cblxuXG5cbmNsYXNzIEFsaW1lbnRhaXJlIGV4dGVuZHMgUHJvZHVpdCB7XG4gICAgY29uc3RydWN0b3IoVHlwZXByb2R1aXQ6IHN0cmluZyxsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIG5vbUNsaWVudDogc3RyaW5nLCBwcmVub21DbGllbnQ6IHN0cmluZywgdGVsZXBob25lQ2xpZW50OiBzdHJpbmcsIGFkcmVzc2VDbGllbnQ6IHN0cmluZywgbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIHByZW5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBhZHJlc3NlRGVzdGluYXRhaXJlOiBzdHJpbmcsZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZ1xuXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFR5cGVwcm9kdWl0LGxpYmVsbGUsIHBvaWRzLCBub21DbGllbnQsIHByZW5vbUNsaWVudCwgdGVsZXBob25lQ2xpZW50LCBhZHJlc3NlQ2xpZW50LCBub21EZXN0aW5hdGFpcmUsIHByZW5vbURlc3RpbmF0YWlyZSwgYWRyZXNzZURlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBBbGltZW50YWlyZSAtIExpYmVsbMOpOiAke3RoaXMuZ2V0TGliZWxsZSgpfSwgUG9pZHM6ICR7dGhpcy5nZXRQb2lkcygpfWtnYDtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBDaGltaXF1ZSBleHRlbmRzIFByb2R1aXQge1xuICAgIHB1YmxpYyB0b3hpY2l0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoVHlwZXByb2R1aXQ6IHN0cmluZyxsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIHRveGljaXRlOiBudW1iZXIsIG5vbUNsaWVudDogc3RyaW5nLCBwcmVub21DbGllbnQ6IHN0cmluZywgdGVsZXBob25lQ2xpZW50OiBzdHJpbmcsIGFkcmVzc2VDbGllbnQ6IHN0cmluZywgbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIHByZW5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBhZHJlc3NlRGVzdGluYXRhaXJlOiBzdHJpbmcsZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihUeXBlcHJvZHVpdCxsaWJlbGxlLCBwb2lkcywgbm9tQ2xpZW50LCBwcmVub21DbGllbnQsIHRlbGVwaG9uZUNsaWVudCwgYWRyZXNzZUNsaWVudCwgbm9tRGVzdGluYXRhaXJlLCBwcmVub21EZXN0aW5hdGFpcmUsIGFkcmVzc2VEZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICB0aGlzLnRveGljaXRlID0gdG94aWNpdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRveGljaXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRveGljaXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUb3hpY2l0ZSh0b3hpY2l0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG94aWNpdGUgPSB0b3hpY2l0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYENoaW1pcXVlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2csIFRveGljaXTDqTogJHt0aGlzLnRveGljaXRlfWA7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBNYXRlcmllbCBleHRlbmRzIFByb2R1aXQge1xuICAgIGNvbnN0cnVjdG9yKFR5cGVwcm9kdWl0OiBzdHJpbmcsbGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoVHlwZXByb2R1aXQsbGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIEZyYWdpbGUgZXh0ZW5kcyBNYXRlcmllbCB7XG4gICAgY29uc3RydWN0b3IoVHlwZXByb2R1aXQ6IHN0cmluZyxsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIG5vbUNsaWVudDogc3RyaW5nLCBwcmVub21DbGllbnQ6IHN0cmluZywgdGVsZXBob25lQ2xpZW50OiBzdHJpbmcsIGFkcmVzc2VDbGllbnQ6IHN0cmluZywgbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIHByZW5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBhZHJlc3NlRGVzdGluYXRhaXJlOiBzdHJpbmcsZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihUeXBlcHJvZHVpdCxsaWJlbGxlLCBwb2lkcywgbm9tQ2xpZW50LCBwcmVub21DbGllbnQsIHRlbGVwaG9uZUNsaWVudCwgYWRyZXNzZUNsaWVudCwgbm9tRGVzdGluYXRhaXJlLCBwcmVub21EZXN0aW5hdGFpcmUsIGFkcmVzc2VEZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgRnJhZ2lsZSAtIExpYmVsbMOpOiAke3RoaXMuZ2V0TGliZWxsZSgpfSwgUG9pZHM6ICR7dGhpcy5nZXRQb2lkcygpfWtnYDtcbiAgICB9XG59XG5cbmNsYXNzIEluY2Fzc2FibGUgZXh0ZW5kcyBNYXRlcmllbCB7XG4gICAgY29uc3RydWN0b3IoVHlwZXByb2R1aXQ6IHN0cmluZyxsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIG5vbUNsaWVudDogc3RyaW5nLCBwcmVub21DbGllbnQ6IHN0cmluZywgdGVsZXBob25lQ2xpZW50OiBzdHJpbmcsIGFkcmVzc2VDbGllbnQ6IHN0cmluZywgbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIHByZW5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBhZHJlc3NlRGVzdGluYXRhaXJlOiBzdHJpbmcsZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihUeXBlcHJvZHVpdCxsaWJlbGxlLCBwb2lkcywgbm9tQ2xpZW50LCBwcmVub21DbGllbnQsIHRlbGVwaG9uZUNsaWVudCwgYWRyZXNzZUNsaWVudCwgbm9tRGVzdGluYXRhaXJlLCBwcmVub21EZXN0aW5hdGFpcmUsIGFkcmVzc2VEZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgSW5jYXNzYWJsZSAtIExpYmVsbMOpOiAke3RoaXMuZ2V0TGliZWxsZSgpfSwgUG9pZHM6ICR7dGhpcy5nZXRQb2lkcygpfWtnYDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2R1aXQsIEFsaW1lbnRhaXJlLCBDaGltaXF1ZSwgRnJhZ2lsZSwgSW5jYXNzYWJsZSB9O1xuIiwiaW1wb3J0IHsgUHJvZHVpdCwgQWxpbWVudGFpcmUsIENoaW1pcXVlLCBGcmFnaWxlLCBJbmNhc3NhYmxlIH0gZnJvbSAnLi9Nb2RlbC9Qcm9kdWl0JztcbmltcG9ydCB7IENhcmdhaXNvbiwgQ2FyZ2Fpc29uQWVyaWVubmUsIENhcmdhaXNvbk1hcml0aW1lLCBDYXJnYWlzb25Sb3V0aWVyZSB9IGZyb20gJy4vTW9kZWwvQ2FyZ2Fpc29uJztcblxubGV0IGNhcmdhaXNvbnM6IENhcmdhaXNvbltdID0gW107XG5sZXQgZmlsdGVyZWRDYXJnYWlzb25zOiBDYXJnYWlzb25bXSA9IFtdO1xubGV0IHByb2R1aXRzOiBQcm9kdWl0W10gPSBbXTtcblxuLyogZnVuY3Rpb24gYWpvdXRlclByb2R1aXRMb2NhbGVtZW50KHByb2R1aXQ6IFByb2R1aXQpIHtcbiAgICBwcm9kdWl0c0Fqb3V0ZXMucHVzaChwcm9kdWl0KTtcbn1cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dEZXRhaWxzKHR5cGU6IHN0cmluZywgZGlzdGFuY2U6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKFwiVHlwZSByZWNoZXJjaMOpOlwiLCB0eXBlKTtcbiAgICBjb25zb2xlLmxvZyhcIkRpc3RhbmNlIHJlY2hlcmNow6llOlwiLCBkaXN0YW5jZSk7XG5cbiAgICBjb25zdCBjYXJnYWlzb24gPSBjYXJnYWlzb25zLmZpbmQoYyA9PiBjLnR5cGUgPT09IHR5cGUgJiYgYy5kaXN0YW5jZSA9PT0gZGlzdGFuY2UpO1xuICAgIGNvbnNvbGUubG9nKFwiQ2FyZ2Fpc29uIHRyb3V2w6llOlwiLCBjYXJnYWlzb24pO1xuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgZG9ubsOpZXMgZGVzICAgcG9scG1yb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgbGV0IHByb2R1aXRzID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWl0cyA6YW55ID0gZGF0YS5wcm9kdWl0czsgLy8gUsOpY3Vww6lyZXIgbGVzIHByb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGRvbm7DqWVzIGRlcyBwcm9kdWl0czonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICBsZXQgZGV0YWlscyA9IGBcbiAgICAgICAgICAgIDxwPlR5cGU6ICR7Y2FyZ2Fpc29uLnR5cGV9PC9wPlxuICAgICAgICAgICAgPHA+RGlzdGFuY2U6ICR7Y2FyZ2Fpc29uLmRpc3RhbmNlfSBrbTwvcD5cbiAgICAgICAgICAgIDxwPkxpZXUgZGUgZMOpcGFydDogJHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC9wPlxuICAgICAgICAgICAgPHA+TGlldSBkJ2Fycml2w6llOiAke2NhcmdhaXNvbi5saWV1X2Fycml2ZX08L3A+XG4gICAgICAgICAgICA8cD5EYXRlIGRlIGTDqWJ1dDogJHtjYXJnYWlzb24uZGF0ZWRlYnV0fTwvcD5cbiAgICAgICAgICAgIDxwPkRhdGUgZGUgZmluOiAke2NhcmdhaXNvbi5kYXRlZmlufTwvcD5cbiAgICAgICAgICAgIDxwPlByb2R1aXRzOjwvcD5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT1cIndpZHRoOiA1MHZ3IDtcIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGUgZGUgcHJvZHVpdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5MaWJlbGzDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb2lkczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5ub21DbGllbnQ8L3RoPiBcbiAgICAgICAgICAgICAgICAgICAgPHRoPnByZW5vbUNsaWVudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD50ZWxlcGhvbmVDbGllbnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+YWRyZXNzZUNsaWVudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5ub21EZXN0aW5hdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+cHJlbm9tRGVzdGluYXRhaXJlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPmFkcmVzc2VEZXN0aW5hdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+ZW1haWxkZXN0aW5hdGFpcmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Y29kZTwvdGg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIEFmZmljaGVyIGxlcyBkw6l0YWlscyBkZXMgcHJvZHVpdHMgYXNzb2Npw6lzIMOgIGxhIGNhcmdhaXNvblxuICAgICAgICBjYXJnYWlzb24ucHJvZHVpdHMuZm9yRWFjaChwcm9kdWl0ID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gYFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5UeXBlcHJvZHVpdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LmxpYmVsbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5wb2lkc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0Lm5vbUNsaWVudH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LnByZW5vbUNsaWVudH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LnRlbGVwaG9uZUNsaWVudH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LmFkcmVzc2VDbGllbnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5ub21EZXN0aW5hdGFpcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5wcmVub21EZXN0aW5hdGFpcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5hZHJlc3NlRGVzdGluYXRhaXJlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Byb2R1aXQuZW1haWxkZXN0aW5hdGFpcmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5jb2RlVW5pcXVlfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJnYWlzb24ucHJvZHVpdHMpO1xuICAgICAgICBcblxuICAgICAgICBkZXRhaWxzICs9IGA8L3RhYmxlPmA7XG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGRldGFpbHNDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gZGV0YWlscztcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gbm9uIHRyb3V2w6llLlwiKTtcbiAgICB9XG59XG5cbih3aW5kb3cgYXMgYW55KS5zaG93RGV0YWlscyA9IHNob3dEZXRhaWxzO1xuXG5cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7IC8vIEZlcm1lciBsZSBtb2RhbFxuICAgIH1cbn1cblxuXG5sZXQgY29kZTpzdHJpbmdcblxuIFxuZnVuY3Rpb24gYWRkUHJvZHVjdChudW1lcm86IHN0cmluZykge1xuICAgIC8vIFJlY2hlcmNoZXIgbGEgY2FyZ2Fpc29uIGNvcnJlc3BvbmRhbnQgYXUgbnVtw6lybyBkb25uw6lcbiAgICBjb25zdCBjYXJnYWlzb24gPSBjYXJnYWlzb25zLmZpbmQoYyA9PiBjLmNvZGVVbmlxdWUgPT09IG51bWVybyk7XG5cbiAgICAvLyBWw6lyaWZpZXIgc2kgbGEgY2FyZ2Fpc29uIGV4aXN0ZVxuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgLy8gVsOpcmlmaWVyIGxlIG5vbWJyZSBkZSBwcm9kdWl0cyBkYW5zIGxhIGNhcmdhaXNvblxuICAgICAgICBpZiAoY2FyZ2Fpc29uLnByb2R1aXRzLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJMYSBjYXJnYWlzb24gZXN0IHBsZWluZSAocGx1cyBkZSAxMCBwcm9kdWl0cykgIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFmZmljaGVyIGxlIGZvcm11bGFpcmUgZCdham91dCBkZSBwcm9kdWl0IHNpIGxhIGNhcmdhaXNvbiBuJ2VzdCBwYXMgcGxlaW5lXG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWpvdXRlci1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGRldGFpbHNDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fqb3V0ZXItcHJvZHVjdCcpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7IC8vIEFmZmljaGVyIGxlIG1vZGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhudW1lcm8pO1xuICAgICAgICBjb2RlID0gbnVtZXJvO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEfDqXJlciBsZSBjYXMgb8O5IGxhIGNhcmdhaXNvbiBuJ2VzdCBwYXMgdHJvdXbDqWUgKGZhY3VsdGF0aWYpXG4gICAgICAgIGFsZXJ0KFwiQ2FyZ2Fpc29uIG5vbiB0cm91dsOpZS5cIik7XG4gICAgfVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gY2xvc2VNb2RhbHMoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1tb2RhbCcpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgICBtb2RhbC5jbG9zZSgpOyAvLyBGZXJtZXIgbGUgbW9kYWxcbiAgICB9XG59XG4od2luZG93IGFzIGFueSkuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdHlwZUlucHV0ID0gPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLWNhcmdhaXNvbicpO1xuICAgIGNvbnN0IG5icnByb2R1aXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTnByb2R1aXQnKTtcbiAgICBjb25zdCBuYnJwcm9kdWl0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTnByb2R1aXQtZXJyb3InKTtcbiAgICBjb25zdCBkYXRlZGVidXRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWRlYnV0Jyk7XG4gICAgY29uc3QgZGF0ZWZpbklucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZmluJyk7XG4gICAgY29uc3QgZGF0ZWRlYnV0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZWRlYnV0LWVycm9yJyk7XG4gICAgY29uc3QgZGF0ZWZpbkVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVmaW4tZXJyb3InKTtcblxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRhdGVkZWJ1dEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGF0ZWZpbkVycm9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoZGF0ZWRlYnV0SW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3IudGV4dENvbnRlbnQgPSBcIlZldWlsbGV6IHJlbXBsaXIgY2UgY2hhbXAuXCI7XG4gICAgICAgIGRhdGVkZWJ1dEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkYXRlZmluSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGF0ZWZpbkVycm9yLnRleHRDb250ZW50ID0gXCJWZXVpbGxleiByZW1wbGlyIGNlIGNoYW1wLlwiO1xuICAgICAgICBkYXRlZmluRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZURlYnV0ID0gbmV3IERhdGUoZGF0ZWRlYnV0SW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBpZiAoZGF0ZURlYnV0IDw9IHRvZGF5KSB7XG4gICAgICAgIGRhdGVkZWJ1dEVycm9yLnRleHRDb250ZW50ID0gXCJMYSBkYXRlIGRlIGTDqWJ1dCBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIGxhIGRhdGUgZCdhdWpvdXJkJ2h1aS5cIjtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUZpbiA9IG5ldyBEYXRlKGRhdGVmaW5JbnB1dC52YWx1ZSk7XG4gICAgaWYgKGRhdGVGaW4gPD0gZGF0ZURlYnV0KSB7XG4gICAgICAgIGRhdGVmaW5FcnJvci50ZXh0Q29udGVudCA9IFwiTGEgZGF0ZSBkZSBmaW4gZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCBsYSBkYXRlIGRlIGTDqWJ1dC5cIjtcbiAgICAgICAgZGF0ZWZpbkVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xufVxuXG5jb25zdCBwcmV2UGFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2UGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgbmV4dFBhZ2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFBhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGN1cnJlbnRQYWdlU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50UGFnZScpIGFzIEhUTUxTcGFuRWxlbWVudDtcblxubGV0IGN1cnJlbnRQYWdlID0gMTtcbmNvbnN0IGl0ZW1zUGVyUGFnZSA9IDQ7XG5cbnByZXZQYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgICAgY3VycmVudFBhZ2UtLTtcbiAgICAgICAgYWZmaWNoZXJDYXJnYWlzb25zKGZpbHRlcmVkQ2FyZ2Fpc29ucy5sZW5ndGggPiAwID8gZmlsdGVyZWRDYXJnYWlzb25zIDogY2FyZ2Fpc29ucyk7XG4gICAgfVxufSk7XG5cbm5leHRQYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBjYXJnYWlzb25zLmxlbmd0aDtcbiAgICBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgPCBsYXN0UGFnZSkge1xuICAgICAgICBjdXJyZW50UGFnZSsrO1xuICAgICAgICBhZmZpY2hlckNhcmdhaXNvbnMoZmlsdGVyZWRDYXJnYWlzb25zLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZENhcmdhaXNvbnMgOiBjYXJnYWlzb25zKTtcbiAgICB9XG59KTtcblxuXG4vL2ZvbmN0aW9uIGZlcm1lciBvdXZlcnQgY2FyZ2Fpc29uXG5hc3luYyBmdW5jdGlvbiB0b2dnbGVTdGF0dXMoY29kZVVuaXF1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FyZ2Fpc29uID0gY2FyZ2Fpc29ucy5maW5kKGMgPT4gYy5jb2RlVW5pcXVlID09PSBjb2RlVW5pcXVlKTtcbiAgICBpZiAoY2FyZ2Fpc29uKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXR1cyA9IGNhcmdhaXNvbi5zdGF0dXMgPT09ICdmZXJtZXInID8gJ291dnJpcicgOiAnZmVybWVyJztcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgY29kZVVuaXF1ZSwgc3RhdHVzOiBuZXdTdGF0dXMgfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZ2Fpc29uLnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZ2dsZS0ke2NvZGVVbmlxdWV9YCkudGV4dENvbnRlbnQgPSBuZXdTdGF0dXM7IC8vIE1pc2Ugw6Agam91ciBkdSBzdGF0dXQgZGFucyBsYSB0YWJsZSBIVE1MXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIGR1IHN0YXR1dDonLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSByZXF1w6p0ZTonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuKHdpbmRvdyBhcyBhbnkpLnRvZ2dsZVN0YXR1cyA9IHRvZ2dsZVN0YXR1cztcblxuXG4vL2ZvbmN0aW9uIHBvdXIgcG91ciBsXCJldGF0IGQnYXZhbmNlbWVudFxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTdGF0dXMoY29kZVVuaXF1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdGF0dXMtc2VsZWN0LSR7Y29kZVVuaXF1ZX1gKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCBuZXdFdGF0ID0gc2VsZWN0RWxlbWVudC52YWx1ZTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29kZVVuaXF1ZSwgZXRhdEF2YW5jZW1lbnQ6IG5ld0V0YXQgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmV0YXRBdmFuY2VtZW50ID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgIC8vIE1pc2Ugw6Agam91ciBsb2NhbGUgZGUgbCdhZmZpY2hhZ2Ugc2kgbsOpY2Vzc2FpcmVcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9nZ2xlLSR7Y29kZVVuaXF1ZX1gKTtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld0V0YXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBtaXNlIMOgIGpvdXIgZHUgc3RhdHV0OicsIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHJlcXXDqnRlOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuICAgIH1cbn1cbih3aW5kb3cgYXMgYW55KS51cGRhdGVTdGF0dXMgPSB1cGRhdGVTdGF0dXM7XG5cblxuXG5mdW5jdGlvbiBhZmZpY2hlckNhcmdhaXNvbnMoZGF0YTogQ2FyZ2Fpc29uW10pOiB2b2lkIHtcbiAgICBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRjYXJnYWlzb24vc2F2ZS5waHAnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgcsOpc2VhdScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VUZXh0ID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY2FyZ2Fpc29ucykgeyBcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb25uw6llcyBtYWwgc3RydWN0dXLDqWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29ucyA9IGRhdGEuY2FyZ2Fpc29ucztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmdhaXNvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJvZHljYXJnYWlzb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmdhaXNvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBhdmVjIElEIFwidGJvZHljYXJnYWlzb25cIiBub24gdHJvdXbDqScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FyZ2Fpc29ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdBdWN1bmUgY2FyZ2Fpc29uIG5lIGNvcnJlc3BvbmQgYXV4IGNyaXTDqHJlcyBkZSBmaWx0cmFnZS4nO1xuICAgICAgICAgICAgICAgICAgICBjYXJnYWlzb25MaXN0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGl0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0ZWRDYXJnYWlzb25zID0gKGZpbHRlcmVkQ2FyZ2Fpc29ucy5sZW5ndGggPiAwID8gZmlsdGVyZWRDYXJnYWlzb25zIDogY2FyZ2Fpc29ucykuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgcGFnaW5hdGVkQ2FyZ2Fpc29ucy5mb3JFYWNoKGNhcmdhaXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+JHtjYXJnYWlzb24uY29kZVVuaXF1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLnR5cGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5kaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLmRhdGVkZWJ1dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwid2lkdGg6MTAwdndcIj4ke2NhcmdhaXNvbi5kYXRlZmlufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5saWV1X2Fycml2ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1cy1zZWxlY3QtJHtjYXJnYWlzb24uY29kZVVuaXF1ZX1cIiBvbmNoYW5nZT1cInVwZGF0ZVN0YXR1cygnJHtjYXJnYWlzb24uY29kZVVuaXF1ZX0nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbiBhdHRlbnRlXCI+RW4gYXR0ZW50ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbiBjb3Vyc1wiPkVuIGNvdXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFycml2w6lcIj5BcnJpdmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJzdGF0dXMtJHtjYXJnYWlzb24uY29kZVVuaXF1ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGUtJHtjYXJnYWlzb24uY29kZVVuaXF1ZX1cIiBvbmNsaWNrPVwidG9nZ2xlU3RhdHVzKCcke2NhcmdhaXNvbi5jb2RlVW5pcXVlfScpXCI+JHtjYXJnYWlzb24uc3RhdHVzfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiZGlzcGxheTpmbGV4ICFpbXBvcnRhbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIHN0eWxlPVwiYm9yZGVyOm5vbmVcIiBjbGFzcz1cInRleHQtYmx1ZS00MDAgdGV4dC14bCBwci0zIGZvbnQtYm9sZCByb3VuZGVkIFwiIG9uY2xpY2s9XCJzaG93RGV0YWlscygnJHtjYXJnYWlzb24udHlwZX0nLCAke2NhcmdhaXNvbi5kaXN0YW5jZX0pXCI+RMOpdGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJib3JkZXI6bm9uZVwiIGNsYXNzPVwicHJvZHVjdHMgdGV4dC1ncmVlbi00MDAgdGV4dC14bCBwci0zIGZvbnQtYm9sZCByb3VuZGVkXCIgb25jbGljaz1cImFkZFByb2R1Y3QoJyR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9JylcIiA+QWpvdXRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBjYXJnYWlzb25MaXN0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGNhcmdhaXNvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcHJldlBhZ2VCdXR0b24uZGlzYWJsZWQgPSBjdXJyZW50UGFnZSA9PT0gMTtcbiAgICAgICAgICAgICAgICBuZXh0UGFnZUJ1dHRvbi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSBsYXN0UGFnZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgcGFyc2luZyBKU09OOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF3IHJlc3BvbnNlIHRleHQ6JywgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGZldGNoOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAvKiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHMnKS5mb3JFYWNoKHByb2R1aXQgPT57XG4gICAgICAgICAgICBwcm9kdWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldD1ldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtZXJvPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW51bWVybycpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobnVtZXJvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB9KSAqL1xuXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGZpbHRlckNhcmdhaXNvbnMoKSB7XG4gICAgY29uc3QgY29kZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkYXRlZGVidXRJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1kZWJ1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZGF0ZWZpbklucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGlldURlcGFydElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1LWRlcGFydCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGlldUFycml2ZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1LWFycml2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb2RlSW5wdXQgPSBjb2RlSW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICBjb25zdCBkYXRlZGVidXRJbnB1dCA9IGRhdGVkZWJ1dElucHV0RWxlbWVudD8udmFsdWUudHJpbSgpIHx8ICcnO1xuICAgIGNvbnN0IGRhdGVmaW5JbnB1dCA9IGRhdGVmaW5JbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKSB8fCAnJztcbiAgICBjb25zdCBsaWV1RGVwYXJ0SW5wdXQgPSBsaWV1RGVwYXJ0SW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICBjb25zdCBsaWV1QXJyaXZlSW5wdXQgPSBsaWV1QXJyaXZlSW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcblxuXG4gICAgZmlsdGVyZWRDYXJnYWlzb25zID0gY2FyZ2Fpc29ucy5maWx0ZXIoY2FyZ2Fpc29uID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hDb2RlID0gY29kZUlucHV0ID8gY2FyZ2Fpc29uLmNvZGVVbmlxdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb2RlSW5wdXQpIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hEYXRlRGVidXQgPSBkYXRlZGVidXRJbnB1dCA/IGNhcmdhaXNvbi5kYXRlZGVidXQgPT09IGRhdGVkZWJ1dElucHV0IDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hEYXRlRmluID0gZGF0ZWZpbklucHV0ID8gY2FyZ2Fpc29uLmRhdGVmaW4gPT09IGRhdGVmaW5JbnB1dCA6IHRydWU7XG4gICAgICAgIGNvbnN0IG1hdGNoTGlldURlcGFydCA9IGxpZXVEZXBhcnRJbnB1dCA/IGNhcmdhaXNvbi5saWV1X2RlcGFydC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxpZXVEZXBhcnRJbnB1dCkgOiB0cnVlO1xuICAgICAgICBjb25zdCBtYXRjaExpZXVBcnJpdmUgPSBsaWV1QXJyaXZlSW5wdXQgPyBjYXJnYWlzb24ubGlldV9hcnJpdmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsaWV1QXJyaXZlSW5wdXQpIDogdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG1hdGNoQ29kZSAmJiBtYXRjaERhdGVEZWJ1dCAmJiBtYXRjaERhdGVGaW4gJiYgbWF0Y2hMaWV1RGVwYXJ0ICYmXG4gICAgICAgIG1hdGNoTGlldUFycml2ZTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRQYWdlID0gMTtcbiAgICBhZmZpY2hlckNhcmdhaXNvbnMoZmlsdGVyZWRDYXJnYWlzb25zKTtcbn1cblxuY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmlmIChmaWx0ZXJCdXR0b24pIHtcbiAgICBmaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlsdGVyQ2FyZ2Fpc29ucygpO1xuICAgIH0pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xufSk7XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbihtZXNzYWdlOnN0cmluZywgdHlwZSA9ICdzdWNjZXNzJykge1xuICAgIC8vIEFkZCBDU1MgZm9yIG5vdGlmaWNhdGlvbnNcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgIC5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIC5jbG9zZS1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdhaXNvbkZvcm0nKTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgZm9ybS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24nKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmNDQzMzYnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgfVxuXG4gICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cbiAgICBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgIH0sIDMwMDApO1xuXG5cblxufVxuXG5hZmZpY2hlckNhcmdhaXNvbnMoY2FyZ2Fpc29ucyk7XG5cblxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdhaXNvbkZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBlbnZvaWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNhcmdhaXNvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuZW52b2llLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcblxuICAgICAgICBjb25zdCBkaXN0YW5jZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3RhbmNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdHlwZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtY2FyZ2Fpc29uJykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBvaWRzY2FyZ2Fpc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3Qgbm9tYnJlcHJvZHVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOcHJvZHVpdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRhdGVkZWJ1dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZGVidXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBkYXRlZmluSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1maW4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBsaWV1ZGVwYXJ0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9kZXBhcnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBsaWV1YXJyaXZlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZXVfYXJyaXZlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBwYXJzZUludChkaXN0YW5jZUlucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZWRlYnV0ID0gZGF0ZWRlYnV0SW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGVmaW4gPSBkYXRlZmluSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHBvaWRzY2FyZ28gPSBwYXJzZUZsb2F0KHBvaWRzY2FyZ2Fpc29uLnZhbHVlKTtcbiAgICAgICAgY29uc3Qgbm9tcmVwcm9kdWl0ID0gcGFyc2VJbnQobm9tYnJlcHJvZHVpdC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGxpZXVkZXBhcnQ9bGlldWRlcGFydElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBsaWV1YXJyaXZlPWxpZXVhcnJpdmVySW5wdXQudmFsdWVcblxuICAgICAgICBsZXQgY2FyZ2Fpc29uOiBDYXJnYWlzb24gfCBudWxsID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhZXJpZW5uZSc6XG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29uID0gbmV3IENhcmdhaXNvbkFlcmllbm5lKGRpc3RhbmNlLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1ZGVwYXJ0LGxpZXVhcnJpdmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFyaXRpbWUnOlxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbiA9IG5ldyBDYXJnYWlzb25NYXJpdGltZShkaXN0YW5jZSwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldWRlcGFydCxsaWV1ZGVwYXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JvdXRpZXJlJzpcbiAgICAgICAgICAgICAgICBjYXJnYWlzb24gPSBuZXcgQ2FyZ2Fpc29uUm91dGllcmUoZGlzdGFuY2UsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVhcnJpdmUsbGlldWRlcGFydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmdhaXNvbikge1xuICAgICAgICAgICAgY2FyZ2Fpc29ucy5wdXNoKGNhcmdhaXNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmdhaXNvbkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29kZVVuaXF1ZTpjYXJnYWlzb24uY29kZVVuaXF1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBjYXJnYWlzb24udHlwZSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogY2FyZ2Fpc29uLmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgIHByb2R1aXRzOiBjYXJnYWlzb24ucHJvZHVpdHMsXG4gICAgICAgICAgICAgICAgZGF0ZWRlYnV0OiBjYXJnYWlzb24uZGF0ZWRlYnV0LFxuICAgICAgICAgICAgICAgIGRhdGVmaW46IGNhcmdhaXNvbi5kYXRlZmluLFxuICAgICAgICAgICAgICAgIHBvaWRzY2FyZ286Y2FyZ2Fpc29uLnBvaWRzY2FyZ28sXG4gICAgICAgICAgICAgICAgbm9tcmVwcm9kdWl0OmNhcmdhaXNvbi5ub21yZXByb2R1aXQsXG4gICAgICAgICAgICAgICAgbGlldV9kZXBhcnQ6Y2FyZ2Fpc29uLmxpZXVfZGVwYXJ0LFxuICAgICAgICAgICAgICAgIGxpZXVfYXJyaXZlOmNhcmdhaXNvbi5saWV1X2Fycml2ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6Y2FyZ2Fpc29uLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBldGF0QXZhbmNlbWVudDpjYXJnYWlzb24uZXRhdEF2YW5jZW1lbnRcblxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNhcmdhaXNvbkRhdGEpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY8OoczonLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBhZmZpY2hlckNhcmdhaXNvbnMoY2FyZ2Fpc29ucyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSByZXF1w6p0ZTonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaTonLCBlcnJvcik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZU5vdGlmaWNhdGlvbignY2FyZ2Fpc29uIGFqb3V0w6knLCAnZXJyb3InKTtcblxuXG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy9wYWdpbmF0aW9uXG5cblxuXG4vL29wdGlvbiBkXCJhZmZpY2hhZ2UgcG9pZHMgb3UgbmIgZGUgcHJvcXVpdCBkYW5zIGxlIHRhYmxlYXVcbmNvbnN0IG5icnByb2R1Y3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iJyk7XG5jb25zdCBwb2lkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZCcpOyBcbiAgICBcbi8qICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgXG4gICAgICAgIGlmIChtb2RhbCAmJiBjbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gKi9cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAvL3ZhbGlkZXIgZm9ybSBwcm9kdWl0XG4gICAgIFxuXG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9ucHJvZHVpdChtZXNzYWdlOiBzdHJpbmcsIHR5cGUgPSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgZHUgQ1NTIHBvdXIgbGVzIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y0NDMzNic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgIC8vIEZvbmN0aW9uIGRlIHZhbGlkYXRpb24gZHUgZm9ybXVsYWlyZVxuZnVuY3Rpb24gdmFsaWRhdGVQcm9kdWN0Rm9ybSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBsaWJlbGxlUHJvZHVpdCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGliZWxsZS1wcm9kdWl0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdHlwZVByb2R1aXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtcHJvZHVpdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBwb2lkc1Byb2R1aXQgPSBwYXJzZUZsb2F0KChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMtcHJvZHVpdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICBjb25zdCB0b3hpY2l0ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG94aWNpdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8udmFsdWVBc051bWJlciB8fCAwO1xuICAgIGNvbnN0IG5vbWNsaWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcHJlbm9tY2xpZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbGVwaG9uZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGFkcmVzc2UgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkcmVzc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBub21kZXN0aW5hdGFpcmUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBwcmVub21kZXN0aW5hdGFpcmU9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbm9tZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGFkZHJlc3NlZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuXG5cbiAgICBcbiAgICAvLyBWw6lyaWZpZXogc2kgbGVzIGNoYW1wcyByZXF1aXMgc29udCB2aWRlc1xuICAgIGlmICghbGliZWxsZVByb2R1aXQpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgTGliZWxsw6kgUHJvZHVpdC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXR5cGVQcm9kdWl0KSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiBzw6lsZWN0aW9ubmVyIHVuIFR5cGUgZGUgUHJvZHVpdC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNOYU4ocG9pZHNQcm9kdWl0KSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogZW50cmVyIHVuIFBvaWRzIHZhbGlkZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZVByb2R1aXQgPT09ICdDaGltaXF1ZScgJiYgaXNOYU4odG94aWNpdGUpKSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiBlbnRyZXIgdW5lIFRveGljaXTDqSB2YWxpZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFub21jbGllbnQpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgTm9tIENsaWVudC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXByZW5vbWNsaWVudCkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBQcsOpbm9tIENsaWVudC4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRlbGVwaG9uZSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBUw6lsw6lwaG9uZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWFkcmVzc2UpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgQWRyZXNzZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW5vbWRlc3RpbmF0YWlyZSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBOb20gRGVzdGluYXRhaXJlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghcHJlbm9tZGVzdGluYXRhaXJlKSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIFByw6lub20gRGVzdGluYXRhaXJlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghYWRkcmVzc2VkZXN0aW5hdGFpcmUpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgQWRyZXNzZSBEZXN0aW5hdGFpcmUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFlbWFpbGRlc3RpbmF0YWlyZSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBFbWFpbCBEZXN0aW5hdGFpcmUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gTW9kaWZpZXogdm90cmUgZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzIHBvdXIgYXBwZWxlciBsYSBmb25jdGlvbiBkZSB2YWxpZGF0aW9uIGF2YW50IGQnZW52b3llciBsZSBmb3JtdWxhaXJlXG5cblxuIC8vZm9ybXVsYWlyZSBjYXJnYWlzb25cbiBjb25zdCBwcm9kdWN0Zm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZW52b3llcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuIHByb2R1Y3Rmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBWYWxpZGF0aW9uIGR1IGZvcm11bGFpcmVcblxuICAgICAgICBhd2FpdCBoYW5kbGVQcm9kdWN0Rm9ybVN1Ym1pdChldmVudCk7XG4gICAgXG59KTtcblxuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RGb3JtU3VibWl0KGV2ZW50OiBFdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgdmFsZXVycyBkZXMgY2hhbXBzIGR1IGZvcm11bGFpcmVcbiAgICBjb25zdCBsaWJlbGxlUHJvZHVpdCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGliZWxsZS1wcm9kdWl0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdHlwZVByb2R1aXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtcHJvZHVpdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiBjb25zdCBwb2lkc1Byb2R1aXQ6bnVtYmVyID0gcGFyc2VGbG9hdCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgY29uc3QgdG94aWNpdGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveGljaXRlJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlQXNOdW1iZXIgfHwgMDtcbiAgICBjb25zdCBub21jbGllbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHByZW5vbWNsaWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdGVsZXBob25lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlcGhvbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZHJlc3NlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3Qgbm9tZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21kJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcHJlbm9tZGVzdGluYXRhaXJlPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZW5vbWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZGRyZXNzZWRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbGRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcblxuY29uc29sZS5sb2coXCJqampcIixwb2lkc1Byb2R1aXQpO1xuXG4gICAgLy8gQ3LDqWF0aW9uIGRlIGwnb2JqZXQgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSB0eXBlIHPDqWxlY3Rpb25uw6lcbiAgICBsZXQgcHJvZHVpdDogUHJvZHVpdDtcblxuICAgIHN3aXRjaCAodHlwZVByb2R1aXQpIHtcbiAgICAgICAgY2FzZSAnQWxpbWVudGFpcmUnOlxuICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBBbGltZW50YWlyZSh0eXBlUHJvZHVpdCxsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCBub21jbGllbnQsIHByZW5vbWNsaWVudCwgdGVsZXBob25lLCBhZHJlc3NlLCBub21kZXN0aW5hdGFpcmUsIHByZW5vbWRlc3RpbmF0YWlyZSwgYWRkcmVzc2VkZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NoaW1pcXVlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgQ2hpbWlxdWUodHlwZVByb2R1aXQsbGliZWxsZVByb2R1aXQsIHBvaWRzUHJvZHVpdCwgdG94aWNpdGUsIG5vbWNsaWVudCwgcHJlbm9tY2xpZW50LCB0ZWxlcGhvbmUsIGFkcmVzc2UsIG5vbWRlc3RpbmF0YWlyZSwgcHJlbm9tZGVzdGluYXRhaXJlLCBhZGRyZXNzZWRlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRnJhZ2lsZSc6XG4gICAgICAgICAgICBwcm9kdWl0ID0gbmV3IEZyYWdpbGUodHlwZVByb2R1aXQsbGliZWxsZVByb2R1aXQsIHBvaWRzUHJvZHVpdCwgbm9tY2xpZW50LCBwcmVub21jbGllbnQsIHRlbGVwaG9uZSwgYWRyZXNzZSwgbm9tZGVzdGluYXRhaXJlLCBwcmVub21kZXN0aW5hdGFpcmUsIGFkZHJlc3NlZGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJbmNhc3NhYmxlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgSW5jYXNzYWJsZSh0eXBlUHJvZHVpdCxsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCBub21jbGllbnQsIHByZW5vbWNsaWVudCwgdGVsZXBob25lLCBhZHJlc3NlLCBub21kZXN0aW5hdGFpcmUsIHByZW5vbWRlc3RpbmF0YWlyZSwgYWRkcmVzc2VkZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUeXBlIGRlIHByb2R1aXQgbm9uIHJlY29ubnUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcsOpcGFyYXRpb24gZGVzIGRvbm7DqWVzIMOgIGVudm95ZXIgYXUgc2VydmV1clxuICAgIGNvbnN0IHByb2R1aXREYXRhID0ge1xuICAgICAgICB0eXBlOiB0eXBlUHJvZHVpdCxcbiAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVpdCxcbiAgICAgICAgY29kZVVuaXF1ZXM6cHJvZHVpdC5jb2RlVW5pcXVlLFxuXG4gICAgICAgIFxuXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9kdWl0RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgICBwcm9kdWl0cy5wdXNoKHByb2R1aXQpOyAvLyBBam91dGVyIGxlIHByb2R1aXQgw6AgbGEgbGlzdGUgZGVzIHByb2R1aXRzXG5cbiAgICAgICAgLy8gRW52b2kgZGVzIGRvbm7DqWVzIGF1IHNlcnZldXIgdmlhIHVuZSByZXF1w6p0ZSBQT1NUXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY8OoczonLCByZXN1bHQpO1xuICAgICAgICAgICAgY3JlYXRlTm90aWZpY2F0aW9ucHJvZHVpdChcInByb2R1aXQgYWpvdXTDqVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaTonLCBlcnJvcik7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qIGZ1bmN0aW9uIGFmZmljaGVyUHJvZHVpdHMoKSB7XG4gICAgLy8gQWZmaWNoZXIgbGVzIHByb2R1aXRzIGRhbnMgbGEgY29uc29sZSBwYXIgZXhlbXBsZVxuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVpdHMgYWpvdXTDqXM6XCIsIHByb2R1aXRzQWpvdXRlcyk7XG59XG4gKi9cblxuXG5cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBwcm9kdWN0IGZvcm0gc3VibWlzc2lvblxuXG4vLyBBdHRhY2hlIGwnw6l2w6luZW1lbnQgZGUgc291bWlzc2lvbiBhdSBmb3JtdWxhaXJlIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBkb2N1bWVudFxuXG4gICAgICAgIGNvbnN0IGNhcmdvcGxlaW5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgICAgIGlmIChjYXJnb3BsZWluU2VsZWN0KSB7XG4gICAgICAgICAgICBjYXJnb3BsZWluU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFibGVDb2x1bW5zKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAvLyBJbml0aWFsIHRvZ2dsZSBiYXNlZCBvbiB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgdG9nZ2xlVGFibGVDb2x1bW5zKGNhcmdvcGxlaW5TZWxlY3QudmFsdWUpO1xuICAgICAgICB9XG5cblxuICAgIGNvbnN0IHBvaWRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKTtcbiAgICBjb25zdCBuYlByb2R1aXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25icl9wcm9kdWl0Jyk7XG5cblxucG9pZHNDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxubmJQcm9kdWl0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy9jaG9peCBjYXJnYWlzb24gcGxlaW5lXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcG9pZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMtcHJvZHVpdCcpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgY29uc3QgbmJQcm9kdWl0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnJfcHJvZHVpdCcpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdwb2lkcycpIHtcbiAgICAgICAgICAgIGlmIChwb2lkc0NvbnRhaW5lcikgcG9pZHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBpZiAobmJQcm9kdWl0c0NvbnRhaW5lcikgbmJQcm9kdWl0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICduYnByb2R1aXQnKSB7XG4gICAgICAgICAgICBpZiAocG9pZHNDb250YWluZXIpIHBvaWRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBpZiAobmJQcm9kdWl0c0NvbnRhaW5lcikgbmJQcm9kdWl0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuXG5cbiAgXG5cbiBcblxuICAgXG5cblxuICAgIC8vIGFmZmljaGFnZSBvcHRpb25lZWxlIGRlcyB2YWxldXJzIHBvZHMgZXQgbmJwcm9kdWl0XG5cblxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFibGVDb2x1bW5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbmJDb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmInKSBhcyBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGRDb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGQnKSBhcyBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudDtcbiAgICBcbiAgICAgICAgY29uc3QgbmJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYi1jZWxsJykgYXMgTm9kZUxpc3RPZjxIVE1MVGFibGVDZWxsRWxlbWVudD47XG4gICAgICAgIGNvbnN0IHBkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGQtY2VsbCcpIGFzIE5vZGVMaXN0T2Y8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+O1xuICAgIFxuICAgICAgICBpZiAodmFsdWUgPT09ICdwb2lkcycpIHtcbiAgICAgICAgICAgIG5iQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwZENvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBuYkNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAgICAgICAgICAgcGRDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmJDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgcGRDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG5iQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICcnKTtcbiAgICAgICAgICAgIHBkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBtaWxsaWV1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGFjY3VlaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY3VlaWxcIik7XG4gICAgY29uc3QgYWNjZWNhcmdhaXNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuY2FyZ2Fpc29uXCIpO1xuICAgIFxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgYnVyZ2VyLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0yNTBweFwiO1xuICAgIGJ1cmdlci5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICBidXJnZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDEwMCUpXCI7XG4gICAgYnVyZ2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjNzIGFzZS1pbi1vdXRcIjtcbiAgICBcbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29udC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIzMzBweFwiO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBDYXJnYWlzb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJnYWlzb25cIik7XG4gICAgY29uc3QgcHJvZHVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVpdFwiKTtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbjFcIik7XG4gICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAvKiAgQ2FyZ2Fpc29ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtaWxsaWV1LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNTUwcHhcIjtcbiAgICB9KTtcbiAgICBcbiAgICBwcm9kdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCI0MyVcIjtcbiAgICB9KTtcbiAgICAgKi9cbiAgICBcbiAgIC8qICBhY2N1ZWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCIxJVwiO1xuICAgIH0pO1xuICAgIFxuICAgIGFjY2VjYXJnYWlzb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM1MHB4XCI7XG4gICAgfSk7ICovXG4gICAgXG4gICAgY29uc3QgaW1hZ2VzID0gWycuLi9wdWJsaWMvaW1nL2F2aW9ucy5qcGcnLCAnLi4vcHVibGljL2ltZy9iYXRlYXUuanBnJywgJy4uL3B1YmxpYy9pbWcvYXZpb25zcy5qcGcnXTtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBcbiAgICBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZXNbY3VycmVudEluZGV4XX0nKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGNoYW5nZUJhY2tncm91bmRJbWFnZSwgMjAwMCk7XG4gICAgXG4gICAgY29uc3QgbW9kYWxzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfbW9kYWxfNVwiKTtcbiAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgXG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbHNcIik7XG4gICAgbW9kYWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IG1vZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVybWVyJylcbiAgICBtb2Quc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGNvbnN0IGZlcm1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5udWxlclwiKTtcbiAgICBmZXJtZXIuc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGZlcm1lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpIS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAodGhpczogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbmJwcm9kdWl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnByb2R1aXRzJyk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnbmJwcm9kdWl0Jykge1xuICAgICAgICAgICAgaWYgKG5icHJvZHVpdHMpIHtcbiAgICAgICAgICAgICAgICBuYnByb2R1aXRzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5icHJvZHVpdHMpIHtcbiAgICAgICAgICAgICAgICBuYnByb2R1aXRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAvLyBtYXBcbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkdSBmb3JtdWxhaXJlXG4gICAgIFxuICAgIC8vIETDqWZpbml0aW9uIGRlcyBjbGFzc2VzIGRlIHByb2R1aXRzXG4gICBcblxuICAgIC8vIEFqb3V0ZXogY2V0IMOpY291dGV1ciBkJ8OpdsOpbmVtZW50cyBhcHLDqHMgcXVlIGxhIHBhZ2UgYWl0IGNoYXJnw6lcbiAgXG4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9