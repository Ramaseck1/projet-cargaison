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
    function Produit(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        this.libelle = libelle;
        this.poids = poids;
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
    return Produit;
}());
exports.Produit = Produit;
var Alimentaire = /** @class */ (function (_super) {
    __extends(Alimentaire, _super);
    function Alimentaire(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    Alimentaire.prototype.info = function () {
        return "Alimentaire - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Alimentaire;
}(Produit));
exports.Alimentaire = Alimentaire;
var Chimique = /** @class */ (function (_super) {
    __extends(Chimique, _super);
    function Chimique(libelle, poids, toxicite, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        var _this = _super.call(this, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
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
    function Materiel(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    return Materiel;
}(Produit));
var Fragile = /** @class */ (function (_super) {
    __extends(Fragile, _super);
    function Fragile(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
    }
    Fragile.prototype.info = function () {
        return "Fragile - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Fragile;
}(Materiel));
exports.Fragile = Fragile;
var Incassable = /** @class */ (function (_super) {
    __extends(Incassable, _super);
    function Incassable(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) {
        return _super.call(this, libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire, emaildestinataire) || this;
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
        var cargaison, response, data, produits_1, error_1, details_1, detailsContainer, modal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Type recherché:", type);
                    console.log("Distance recherchée:", distance);
                    cargaison = cargaisons.find(function (c) { return c.type === type && c.distance === distance; });
                    console.log("Cargaison trouvée:", cargaison);
                    if (!cargaison) return [3 /*break*/, 6];
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
                    produits_1 = data.produits;
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Erreur lors du chargement des données des produits:', error_1);
                    return [3 /*break*/, 5];
                case 5:
                    details_1 = "\n            <p>Type: ".concat(cargaison.type, "</p>\n            <p>Distance: ").concat(cargaison.distance, " km</p>\n            <p>Lieu de d\u00E9part: ").concat(cargaison.lieu_depart, "</p>\n            <p>Lieu d'arriv\u00E9e: ").concat(cargaison.lieu_arrive, "</p>\n            <p>Date de d\u00E9but: ").concat(cargaison.datedebut, "</p>\n            <p>Date de fin: ").concat(cargaison.datefin, "</p>\n            <p>Produits:</p>\n            <table style=\"width: 50vw;\">           \n                <tr>\n                    <th>Type de produit</th>\n                    <th>Libell\u00E9</th>\n                    <th>Poids</th>\n                </tr>\n        ");
                    // Afficher les détails des produits associés à la cargaison
                    cargaison.produits.forEach(function (produit) {
                        details_1 += "\n                <tr>\n                    <td>".concat(produit.constructor.name, "</td>\n                    <td>").concat(produit.libelle, "</td>\n                    <td>").concat(produit.poids, "</td>\n                </tr>\n            ");
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
                if (!validateProductForm()) return [3 /*break*/, 2];
                return [4 /*yield*/, handleProductFormSubmit(event)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
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
                    switch (typeProduit) {
                        case 'Alimentaire':
                            produit = new Produit_1.Alimentaire(libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Chimique':
                            produit = new Produit_1.Chimique(libelleProduit, poidsProduit, toxicite, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Fragile':
                            produit = new Produit_1.Fragile(libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        case 'Incassable':
                            produit = new Produit_1.Incassable(libelleProduit, poidsProduit, nomclient, prenomclient, telephone, adresse, nomdestinataire, prenomdestinataire, addressedestinataire, emaildestinataire);
                            break;
                        default:
                            console.error('Type de produit non reconnu');
                            return [2 /*return*/, false];
                    }
                    produitData = {
                        type: typeProduit,
                        code: code,
                        product: produit,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFjSSxtQkFBWSxRQUFnQixFQUFFLElBQVksRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUMsV0FBbUIsRUFBRSxXQUFtQjtRQWIxSixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBYzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7UUFFL0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxtQ0FBbUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyw0REFBNEQ7SUFJcEcsQ0FBQztJQUVNLGtDQUFjLEdBQXJCLFVBQXNCLE9BQWdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ3hFLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBa0MsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFHLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxpQ0FBYSxHQUFwQixVQUFxQixPQUFnQjtRQUNqQyxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsS0FBSyxVQUFVO2dCQUNYLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pELE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakQsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxLQUFLLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoRCxNQUFNO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUFBLGlCQUVDO1FBREcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxPQUFPLElBQUssVUFBRyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQWpDLENBQWlDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUdNLGdDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDakUsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLE9BQWU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDbEMsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFFYSw0QkFBa0IsR0FBaEM7UUFDSSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2Q0FBNkM7UUFDekcsT0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQUksQ0FBQztJQUN0QyxnQkFBQztBQUFELENBQUM7QUFrQ1EsOEJBQVM7QUFoQ2xCO0lBQWdDLHFDQUFTO0lBQ3JDLDJCQUFZLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxZQUFvQixFQUFDLFdBQW1CLEVBQUUsV0FBbUI7UUFDL0ksYUFBSyxZQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsU0FBQztJQUN0RyxDQUFDO0lBRU0sZ0NBQUksR0FBWDtRQUNJLE9BQU8seUNBQTZCLElBQUksQ0FBQyxVQUFVLDJCQUFpQixJQUFJLENBQUMsUUFBUSxzQ0FBNEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxzQ0FBNEIsSUFBSSxDQUFDLFVBQVUsbUNBQXlCLElBQUksQ0FBQyxZQUFZLG1DQUFvQixJQUFJLENBQUMsU0FBUyw0QkFBa0IsSUFBSSxDQUFDLE9BQU8sdUJBQWEsSUFBSSxDQUFDLE1BQU0sd0NBQXlCLElBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQztJQUM5VixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLENBUitCLFNBQVMsR0FReEM7QUF3Qm1CLDhDQUFpQjtBQXRCckM7SUFBZ0MscUNBQVM7SUFDckMsMkJBQVksUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUMsV0FBbUIsRUFBRSxXQUFtQjtRQUMvSSxhQUFLLFlBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxTQUFDO0lBQ3RHLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0ksT0FBTyxvQ0FBNkIsSUFBSSxDQUFDLFVBQVUsMkJBQWlCLElBQUksQ0FBQyxRQUFRLHNDQUE0QixJQUFJLENBQUMsVUFBVSxFQUFFLHNDQUE0QixJQUFJLENBQUMsVUFBVSxtQ0FBeUIsSUFBSSxDQUFDLFlBQVksbUNBQW9CLElBQUksQ0FBQyxTQUFTLDRCQUFrQixJQUFJLENBQUMsT0FBTyx1QkFBYSxJQUFJLENBQUMsTUFBTSx3Q0FBeUIsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO0lBQzlWLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FSK0IsU0FBUyxHQVF4QztBQWNzQyw4Q0FBaUI7QUFaeEQ7SUFBZ0MscUNBQVM7SUFDckMsMkJBQVksUUFBZ0IsRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUMsV0FBbUIsRUFBRSxXQUFtQjtRQUMvSSxhQUFLLFlBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxTQUFDO0lBQ3RHLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0ksT0FBTyx5Q0FBNkIsSUFBSSxDQUFDLFVBQVUsMkJBQWlCLElBQUksQ0FBQyxRQUFRLHNDQUE0QixJQUFJLENBQUMsVUFBVSxFQUFFLHNDQUE0QixJQUFJLENBQUMsVUFBVSxtQ0FBeUIsSUFBSSxDQUFDLFlBQVksbUNBQW9CLElBQUksQ0FBQyxTQUFTLDRCQUFrQixJQUFJLENBQUMsT0FBTyx1QkFBYSxJQUFJLENBQUMsTUFBTSx3Q0FBeUIsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO0lBQzlWLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FSK0IsU0FBUyxHQVF4QztBQUl5RCw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkgzRTtJQWFJLGlCQUFZLE9BQWUsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxZQUFvQixFQUFFLGVBQXVCLEVBQUUsYUFBcUIsRUFBRSxlQUF1QixFQUFFLGtCQUEwQixFQUFFLG1CQUEyQixFQUFFLGlCQUF5QjtRQUM1TyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUUvQyxDQUFDO0lBRU0sNEJBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLDRCQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVNLDBCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLDBCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBR0wsY0FBQztBQUFELENBQUM7QUErRFEsMEJBQU87QUE3RGhCO0lBQTBCLCtCQUFPO0lBQzdCLHFCQUFZLE9BQWUsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxZQUFvQixFQUFFLGVBQXVCLEVBQUUsYUFBcUIsRUFBRSxlQUF1QixFQUFFLGtCQUEwQixFQUFFLG1CQUEyQixFQUFDLGlCQUF5QjtRQUczTyxhQUFLLFlBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLFNBQUM7SUFDL0osQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDSSxPQUFPLHNDQUEwQixJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBSSxDQUFDO0lBQ3RGLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0FWeUIsT0FBTyxHQVVoQztBQW1EaUIsa0NBQVc7QUFqRDdCO0lBQXVCLDRCQUFPO0lBRzFCLGtCQUFZLE9BQWUsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFlBQW9CLEVBQUUsZUFBdUIsRUFBRSxhQUFxQixFQUFFLGVBQXVCLEVBQUUsa0JBQTBCLEVBQUUsbUJBQTJCLEVBQUMsaUJBQXlCO1FBQzdQLGtCQUFLLFlBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLFNBQUM7UUFDM0osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0lBQzdCLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxPQUFPLG1DQUF1QixJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0NBQWlCLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztJQUMvRyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQ0FuQnNCLE9BQU8sR0FtQjdCO0FBOEI4Qiw0QkFBUTtBQTVCdkM7SUFBZ0MsNEJBQU87SUFDbkMsa0JBQVksT0FBZSxFQUFFLEtBQWEsRUFBRSxTQUFpQixFQUFFLFlBQW9CLEVBQUUsZUFBdUIsRUFBRSxhQUFxQixFQUFFLGVBQXVCLEVBQUUsa0JBQTBCLEVBQUUsbUJBQTJCLEVBQUMsaUJBQXlCO1FBQzNPLGFBQUssWUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsU0FBQztJQUMvSixDQUFDO0lBR0wsZUFBQztBQUFELENBQUMsQ0FOK0IsT0FBTyxHQU10QztBQUVEO0lBQXNCLDJCQUFRO0lBQzFCLGlCQUFZLE9BQWUsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxZQUFvQixFQUFFLGVBQXVCLEVBQUUsYUFBcUIsRUFBRSxlQUF1QixFQUFFLGtCQUEwQixFQUFFLG1CQUEyQixFQUFDLGlCQUF5QjtRQUMzTyxhQUFLLFlBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLFNBQUM7SUFDL0osQ0FBQztJQUVNLHNCQUFJLEdBQVg7UUFDSSxPQUFPLGtDQUFzQixJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBSSxDQUFDO0lBQ2xGLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQVJxQixRQUFRLEdBUTdCO0FBWXdDLDBCQUFPO0FBVmhEO0lBQXlCLDhCQUFRO0lBQzdCLG9CQUFZLE9BQWUsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxZQUFvQixFQUFFLGVBQXVCLEVBQUUsYUFBcUIsRUFBRSxlQUF1QixFQUFFLGtCQUEwQixFQUFFLG1CQUEyQixFQUFDLGlCQUF5QjtRQUMzTyxhQUFLLFlBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLGlCQUFpQixDQUFDLFNBQUM7SUFDL0osQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxPQUFPLHFDQUF5QixJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBSSxDQUFDO0lBQ3JGLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQ0FSd0IsUUFBUSxHQVFoQztBQUVpRCxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRzVELHFGQUFzRjtBQUN0RiwyRkFBdUc7QUFFdkcsSUFBSSxVQUFVLEdBQWdCLEVBQUUsQ0FBQztBQUNqQyxJQUFJLGtCQUFrQixHQUFnQixFQUFFLENBQUM7QUFDekMsSUFBSSxRQUFRLEdBQWMsRUFBRSxDQUFDO0FBRTdCOzs7R0FHRztBQUNILFNBQWUsV0FBVyxDQUFDLElBQVksRUFBRSxRQUFnQjs7Ozs7O29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUV4QyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQTFDLENBQTBDLENBQUMsQ0FBQztvQkFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQzt5QkFFekMsU0FBUyxFQUFULHdCQUFTOzs7O29CQUdZLHFCQUFNLEtBQUssQ0FBQyxvREFBb0QsRUFBRTs0QkFDL0UsTUFBTSxFQUFFLEtBQUs7eUJBQ2hCLENBQUM7O29CQUZJLFFBQVEsR0FBRyxTQUVmO29CQUNXLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O29CQUE1QixJQUFJLEdBQUcsU0FBcUI7b0JBQzVCLGFBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7OztvQkFFL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxREFBcUQsRUFBRSxPQUFLLENBQUMsQ0FBQzs7O29CQUc1RSxZQUFVLGlDQUNDLFNBQVMsQ0FBQyxJQUFJLDRDQUNWLFNBQVMsQ0FBQyxRQUFRLDBEQUNaLFNBQVMsQ0FBQyxXQUFXLHVEQUNyQixTQUFTLENBQUMsV0FBVyxzREFDdEIsU0FBUyxDQUFDLFNBQVMsK0NBQ3JCLFNBQVMsQ0FBQyxPQUFPLGtSQVF0QyxDQUFDO29CQUVGLDREQUE0RDtvQkFDNUQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQU87d0JBQzlCLFNBQU8sSUFBSSwwREFFRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksNENBQ3hCLE9BQU8sQ0FBQyxPQUFPLDRDQUNmLE9BQU8sQ0FBQyxLQUFLLCtDQUUxQixDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUdoQyxTQUFPLElBQUksVUFBVSxDQUFDO29CQUNoQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3RFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDbkIsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQU8sQ0FBQzt3QkFDL0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFzQixDQUFDO3dCQUM1RSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUNSLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNqQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ3RCLENBQUM7b0JBQ0wsQ0FBQzs7O29CQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7Ozs7O0NBRTdDO0FBRUEsTUFBYyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFJMUMsU0FBUyxVQUFVO0lBQ2YsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXNCLENBQUM7SUFDNUUsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtJQUNyQyxDQUFDO0FBQ0wsQ0FBQztBQUdELElBQUksSUFBUTtBQUNaLFNBQVMsVUFBVSxDQUFDLE1BQVU7SUFFdEIsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQXNCLENBQUM7UUFDOUUsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtRQUMzQyxDQUFDO0lBRUwsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEIsSUFBSSxHQUFDLE1BQU07QUFFZCxDQUFDO0FBTUwsU0FBUyxXQUFXO0lBQ2hCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFzQixDQUFDO0lBQzVFLElBQUksS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxrQkFBa0I7SUFDckMsQ0FBQztBQUNMLENBQUM7QUFDQSxNQUFjLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUd4QyxTQUFTLFlBQVk7SUFDakIsSUFBTSxTQUFTLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRSxJQUFNLFVBQVUsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RSxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEUsSUFBTSxjQUFjLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0UsSUFBTSxZQUFZLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0UsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFOUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRW5CLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN6QixPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxZQUFZLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUU5QixJQUFJLGNBQWMsQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDOUIsY0FBYyxDQUFDLFdBQVcsR0FBRyw0QkFBNEIsQ0FBQztRQUMxRCxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQzVCLFlBQVksQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUM7UUFDeEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLElBQUksU0FBUyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3JCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0VBQWdFLENBQUM7UUFDOUYsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25DLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN2QixZQUFZLENBQUMsV0FBVyxHQUFHLHlEQUF5RCxDQUFDO1FBQ3JGLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUM7QUFDaEYsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUM7QUFDaEYsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQW9CLENBQUM7QUFFbEYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUV2QixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3JDLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2xCLFdBQVcsRUFBRSxDQUFDO1FBQ2Qsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDckMsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUN0RCxJQUFJLFdBQVcsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixXQUFXLEVBQUUsQ0FBQztRQUNkLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFHSCxrQ0FBa0M7QUFDbEMsU0FBZSxZQUFZLENBQUMsVUFBa0I7Ozs7OztvQkFDcEMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUEzQixDQUEyQixDQUFDLENBQUM7eUJBQ2hFLFNBQVMsRUFBVCx3QkFBUztvQkFDSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUNoRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsY0FBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzs7OztvQkFHMUMscUJBQU0sS0FBSyxDQUFDLG9EQUFvRCxFQUFFOzRCQUMvRSxNQUFNLEVBQUUsTUFBTTs0QkFDZCxPQUFPLEVBQUU7Z0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjs2QkFDckM7NEJBQ0QsSUFBSSxFQUFFLElBQUk7eUJBQ2IsQ0FBQzs7b0JBTkksUUFBUSxHQUFHLFNBTWY7eUJBRUUsUUFBUSxDQUFDLEVBQUUsRUFBWCx3QkFBVztvQkFDSSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFOztvQkFBOUIsTUFBTSxHQUFHLFNBQXFCO29CQUNwQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7d0JBQzlCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO3dCQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFVLFVBQVUsQ0FBRSxDQUFDLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLDJDQUEyQztvQkFDeEgsQ0FBQzt5QkFBTSxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5RSxDQUFDOzs7b0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O29CQUdyRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLE9BQUssQ0FBQyxDQUFDOzs7Ozs7Q0FHNUQ7QUFHQSxNQUFjLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUc1Qyx3Q0FBd0M7QUFFeEMsU0FBZSxZQUFZLENBQUMsVUFBa0I7Ozs7OztvQkFDcEMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQWlCLFVBQVUsQ0FBRSxDQUFzQixDQUFDO29CQUM1RixPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7OztvQkFHZixxQkFBTSxLQUFLLENBQUMsb0RBQW9ELEVBQUU7NEJBQy9FLE1BQU0sRUFBRSxNQUFNOzRCQUNkLE9BQU8sRUFBRTtnQ0FDTCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNyQzs0QkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsY0FBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ2hFLENBQUM7O29CQU5JLFFBQVEsR0FBRyxTQU1mO3lCQUVFLFFBQVEsQ0FBQyxFQUFFLEVBQVgsd0JBQVc7b0JBQ0kscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTs7b0JBQTlCLE1BQU0sR0FBRyxTQUFxQjtvQkFDcEMsSUFBSSxNQUFNLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRSxDQUFDO3dCQUVoQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBVSxVQUFVLENBQUUsQ0FBQyxDQUFDO3dCQUMvRCxJQUFJLE1BQU0sRUFBRSxDQUFDOzRCQUNULE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO3dCQUNqQyxDQUFDO29CQUNMLENBQUM7eUJBQU0sQ0FBQzt3QkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUUsQ0FBQzs7O29CQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztvQkFHckUsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7O0NBRXhEO0FBQ0EsTUFBYyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFJNUMsU0FBUyxrQkFBa0IsQ0FBQyxJQUFpQjtJQUN6QyxLQUFLLENBQUMsb0RBQW9ELENBQUM7U0FDdEQsSUFBSSxDQUFDLGtCQUFRO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxzQkFBWTtRQUNkLElBQUksQ0FBQztZQUNELElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFFRCxVQUFVLEdBQUcsTUFBSSxDQUFDLFVBQVUsQ0FBQztZQUU3QixJQUFNLGVBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGVBQWEsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQzdELE9BQU87WUFDWCxDQUFDO1lBQ0QsZUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFN0IsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMxQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsV0FBVyxHQUFHLDBEQUEwRCxDQUFDO2dCQUNqRixlQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO1lBQ1gsQ0FBQztZQUVELElBQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNwRCxJQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzNDLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUUxSCxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQVM7Z0JBQ2pDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcseUNBQ0wsU0FBUyxDQUFDLFVBQVUsZ0RBQ3JCLFNBQVMsQ0FBQyxJQUFJLGdEQUNkLFNBQVMsQ0FBQyxRQUFRLGdEQUNsQixTQUFTLENBQUMsU0FBUyxzRUFDQyxTQUFTLENBQUMsT0FBTyxnREFDckMsU0FBUyxDQUFDLFdBQVcsZ0RBQ3JCLFNBQVMsQ0FBQyxXQUFXLHFHQUVDLFNBQVMsQ0FBQyxVQUFVLHlDQUE2QixTQUFTLENBQUMsVUFBVSxpWEFNbEYsU0FBUyxDQUFDLFVBQVUsOERBQ2QsU0FBUyxDQUFDLFVBQVUsd0NBQTRCLFNBQVMsQ0FBQyxVQUFVLGtCQUFPLFNBQVMsQ0FBQyxNQUFNLHVSQUlMLFNBQVMsQ0FBQyxJQUFJLGdCQUFNLFNBQVMsQ0FBQyxRQUFRLHFMQUMvQixTQUFTLENBQUMsVUFBVSxrRkFHekksQ0FBQztnQkFDRixlQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUN0RCxlQUFlLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxjQUFjLENBQUMsUUFBUSxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDNUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxXQUFXLEtBQUssUUFBUSxDQUFDO1FBQ3ZELENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsZUFBSztRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFNTjs7Ozs7Ozs7WUFRUTtBQUdiLENBQUM7QUFJRCxTQUFTLGdCQUFnQjtJQUNyQixJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFxQixDQUFDO0lBQzdFLElBQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXFCLENBQUM7SUFDeEYsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBcUIsQ0FBQztJQUNwRixJQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBQzFGLElBQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7SUFFMUYsSUFBTSxTQUFTLEdBQUcsaUJBQWdCLGFBQWhCLGdCQUFnQix1QkFBaEIsZ0JBQWdCLENBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLEVBQUUsS0FBSSxFQUFFLENBQUM7SUFDckUsSUFBTSxjQUFjLEdBQUcsc0JBQXFCLGFBQXJCLHFCQUFxQix1QkFBckIscUJBQXFCLENBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFJLEVBQUUsQ0FBQztJQUNqRSxJQUFNLFlBQVksR0FBRyxvQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUksRUFBRSxDQUFDO0lBQzdELElBQU0sZUFBZSxHQUFHLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFLEtBQUksRUFBRSxDQUFDO0lBQ2pGLElBQU0sZUFBZSxHQUFHLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFLEtBQUksRUFBRSxDQUFDO0lBR2pGLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQVM7UUFDNUMsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVGLElBQU0sY0FBYyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RixJQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUUsSUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9HLElBQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvRyxPQUFPLFNBQVMsSUFBSSxjQUFjLElBQUksWUFBWSxJQUFJLGVBQWU7WUFDckUsZUFBZSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNoQixrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztBQUNuRixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2YsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7UUFDekMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFnQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBS0gsU0FBUyxrQkFBa0IsQ0FBQyxPQUFjLEVBQUUsSUFBZ0I7SUFBaEIsdUNBQWdCO0lBQ3hELDRCQUE0QjtJQUM1QixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcscytCQTJDakIsQ0FBQztJQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNiLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNDLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1FBQ25CLFlBQVksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO1NBQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDNUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxZQUFZLENBQUMsU0FBUyxHQUFHLDBCQUNiLE9BQU8sd0VBRWxCLENBQUM7SUFFRixTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9ELFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQztRQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFJYixDQUFDO0FBRUQsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFJL0IsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFDekUsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBc0IsQ0FBQztBQUNoRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQU8sQ0FBQzs7Ozs7Z0JBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFFZixZQUFZLEVBQUUsRUFBZCx3QkFBYztnQkFFUixhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7Z0JBQ3hFLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDO2dCQUMzRSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7Z0JBQ3RFLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBcUIsQ0FBQztnQkFDeEUsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFxQixDQUFDO2dCQUMzRSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7Z0JBQ3ZFLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztnQkFDN0UsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7Z0JBQzlFLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDdkIsU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUM3QixVQUFVLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLFVBQVUsR0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxVQUFVLEdBQUMsZ0JBQWdCLENBQUMsS0FBSztnQkFFbkMsU0FBUyxHQUFxQixJQUFJLENBQUM7Z0JBQ3ZDLFFBQVEsSUFBSSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxVQUFVO3dCQUNYLFNBQVMsR0FBRyxJQUFJLDZCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNoSCxNQUFNO29CQUNWLEtBQUssVUFBVTt3QkFDWCxTQUFTLEdBQUcsSUFBSSw2QkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQzt3QkFDaEgsTUFBTTtvQkFDVixLQUFLLFVBQVU7d0JBQ1gsU0FBUyxHQUFHLElBQUksNkJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2hILE1BQU07Z0JBQ2QsQ0FBQztxQkFDRyxTQUFTLEVBQVQsd0JBQVM7Z0JBQ1QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFckIsYUFBYSxHQUFHO29CQUNsQixVQUFVLEVBQUMsU0FBUyxDQUFDLFVBQVU7b0JBQy9CLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtvQkFDcEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO29CQUM1QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7b0JBQzVCLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztvQkFDOUIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO29CQUMxQixVQUFVLEVBQUMsU0FBUyxDQUFDLFVBQVU7b0JBQy9CLFlBQVksRUFBQyxTQUFTLENBQUMsWUFBWTtvQkFDbkMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxXQUFXO29CQUNqQyxXQUFXLEVBQUMsU0FBUyxDQUFDLFdBQVc7b0JBQ2pDLE1BQU0sRUFBQyxTQUFTLENBQUMsTUFBTTtvQkFDdkIsY0FBYyxFQUFDLFNBQVMsQ0FBQyxjQUFjO2lCQUcxQyxDQUFDO2dCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7O2dCQUd0QixxQkFBTSxLQUFLLENBQUMsb0RBQW9ELEVBQUU7d0JBQy9FLE1BQU0sRUFBRSxNQUFNO3dCQUNkLE9BQU8sRUFBRTs0QkFDTCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNyQzt3QkFDRCxJQUFJLEVBQUUsSUFBSTtxQkFDYixDQUFDOztnQkFOSSxRQUFRLEdBQUcsU0FNZjtxQkFFRSxRQUFRLENBQUMsRUFBRSxFQUFYLHdCQUFXO2dCQUNJLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O2dCQUE5QixNQUFNLEdBQUcsU0FBcUI7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7O2dCQUcvQixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Z0JBR3JFLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsT0FBSyxDQUFDLENBQUM7OztnQkFHckQsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7O0tBSzNELENBQUMsQ0FBQztBQUVILFlBQVk7QUFJWiwyREFBMkQ7QUFDM0QsSUFBTSxVQUFVLEdBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFNLElBQUksR0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpDOzs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JZO0FBV0osc0JBQXNCO0FBSXRCLFNBQVMseUJBQXlCLENBQUMsT0FBZSxFQUFFLElBQWdCO0lBQWhCLHVDQUFnQjtJQUNoRSx3Q0FBd0M7SUFDeEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLGt3Q0EwQ2pCLENBQUM7SUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbEUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUNuQixZQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztTQUFNLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQzVCLFlBQVksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxrQ0FDYixPQUFPLHdGQUVsQixDQUFDO0lBRUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVwQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvRCxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUM7UUFDUCxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVdELHVDQUF1QztBQUMvQyxTQUFTLG1CQUFtQjs7SUFDeEIsSUFBTSxjQUFjLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDOUYsSUFBTSxXQUFXLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXVCLENBQUMsS0FBSyxDQUFDO0lBQ3pGLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RyxJQUFNLFFBQVEsR0FBRyxPQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQiwwQ0FBRSxhQUFhLEtBQUksQ0FBQyxDQUFDO0lBQy9GLElBQU0sU0FBUyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUM3RSxJQUFNLFlBQVksR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDbkYsSUFBTSxTQUFTLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQ25GLElBQU0sT0FBTyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUMvRSxJQUFNLGVBQWUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDcEYsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDekYsSUFBTSxvQkFBb0IsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDN0YsSUFBTSxpQkFBaUIsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFJdkYsMkNBQTJDO0lBQzNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNwRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDdEIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksV0FBVyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNoRCxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUM5QyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2IsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDL0MsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQixLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNsRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2IsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNYLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUN6RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxnSEFBZ0g7QUFHL0csc0JBQXNCO0FBQ3RCLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDO0FBQ2hGLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBTyxLQUFLOzs7O2dCQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBR25CLG1CQUFtQixFQUFFLEVBQXJCLHdCQUFxQjtnQkFDckIscUJBQU0sdUJBQXVCLENBQUMsS0FBSyxDQUFDOztnQkFBcEMsU0FBb0MsQ0FBQzs7Ozs7S0FFNUMsQ0FBQyxDQUFDO0FBRUYsU0FBZSx1QkFBdUIsQ0FBQyxLQUFZOzs7Ozs7O29CQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBR2pCLGNBQWMsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFzQixDQUFDLEtBQUssQ0FBQztvQkFDeEYsV0FBVyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUF1QixDQUFDLEtBQUssQ0FBQztvQkFDbkYsWUFBWSxHQUFHLFVBQVUsQ0FBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEcsUUFBUSxHQUFHLE9BQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLDBDQUFFLGFBQWEsS0FBSSxDQUFDLENBQUM7b0JBQ3pGLFNBQVMsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBQ3ZFLFlBQVksR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBQzdFLFNBQVMsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBQzdFLE9BQU8sR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBQ3pFLGVBQWUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBQzlFLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQixDQUFDLEtBQUssQ0FBQztvQkFDbkYsb0JBQW9CLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUMsS0FBSyxDQUFDO29CQUN2RixpQkFBaUIsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQyxLQUFLLENBQUM7b0JBTXZGLFFBQVEsV0FBVyxFQUFFLENBQUM7d0JBQ2xCLEtBQUssYUFBYTs0QkFDZCxPQUFPLEdBQUcsSUFBSSxxQkFBVyxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDOzRCQUNsTCxNQUFNO3dCQUNWLEtBQUssVUFBVTs0QkFDWCxPQUFPLEdBQUcsSUFBSSxrQkFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDekwsTUFBTTt3QkFDVixLQUFLLFNBQVM7NEJBQ1YsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDOUssTUFBTTt3QkFDVixLQUFLLFlBQVk7NEJBQ2IsT0FBTyxHQUFHLElBQUksb0JBQVUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDakwsTUFBTTt3QkFDVjs0QkFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7NEJBQzdDLHNCQUFPLEtBQUssRUFBQztvQkFDckIsQ0FBQztvQkFHSyxXQUFXLEdBQUc7d0JBQ2hCLElBQUksRUFBRSxXQUFXO3dCQUNqQixJQUFJLEVBQUUsSUFBSTt3QkFDVixPQUFPLEVBQUUsT0FBTztxQkFFbkIsQ0FBQztvQkFFSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7OztvQkFHckMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDZDQUE2QztvQkFHcEQscUJBQU0sS0FBSyxDQUFDLG9EQUFvRCxFQUFFOzRCQUMvRSxNQUFNLEVBQUUsTUFBTTs0QkFDZCxPQUFPLEVBQUU7Z0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjs2QkFDckM7NEJBQ0QsSUFBSSxFQUFFLElBQUk7eUJBQ2IsQ0FBQzs7b0JBTkksUUFBUSxHQUFHLFNBTWY7eUJBRUUsUUFBUSxDQUFDLEVBQUUsRUFBWCx3QkFBVztvQkFDSSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFOztvQkFBOUIsTUFBTSxHQUFHLFNBQXFCO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDL0IseUJBQXlCLENBQUMsZ0JBQWdCLENBQUM7OztvQkFFM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O29CQUlyRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLE9BQUssQ0FBQyxDQUFDOzt3QkFJckQsc0JBQU8sS0FBSyxFQUFDOzs7O0NBQ2hCO0FBRUQ7Ozs7R0FJRztBQU9ILDZDQUE2QztBQUU3QyxpRkFBaUY7QUFFekUsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQztBQUVwRixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztRQUMxQyxJQUFNLGFBQWEsR0FBSSxDQUFDLENBQUMsTUFBNEIsQ0FBQyxLQUFLLENBQUM7UUFDNUQsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCw0Q0FBNEM7SUFDNUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUdMLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDaEUsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3ZFLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLE1BQU07QUFDbkMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxNQUFNO0FBWXBDLHdCQUF3QjtBQUN4QixjQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDOUQsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXVCLENBQUM7SUFDdEYsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBdUIsQ0FBQztJQUV6RixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxjQUFjO1lBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNELElBQUksbUJBQW1CO1lBQUUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEUsQ0FBQztTQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLGNBQWM7WUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDMUQsSUFBSSxtQkFBbUI7WUFBRSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6RSxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFXSCxxREFBcUQ7QUFJckQsU0FBUyxrQkFBa0IsQ0FBQyxLQUFhO0lBQ3JDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUErQixDQUFDO0lBQzdFLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUErQixDQUFDO0lBRTdFLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQXFDLENBQUM7SUFDMUYsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBcUMsQ0FBQztJQUUxRixJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDaEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7U0FBTSxDQUFDO1FBQ0osUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0FBQ0wsQ0FBQztBQWlGRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFOUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM3QixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUM7QUFFdEQsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFFaEMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyRCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRCxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBRWxDOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFFSjs7Ozs7Ozs7Ozs7O09BWU87QUFFTixJQUFNLE1BQU0sR0FBRyxDQUFDLDBCQUEwQixFQUFFLDBCQUEwQixFQUFFLDJCQUEyQixDQUFDLENBQUM7QUFDckcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLFNBQVMscUJBQXFCO0lBQzFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxlQUFRLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBSSxDQUFDO0lBQ3pGLFlBQVksR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3RELENBQUM7QUFFRCxXQUFXLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFekMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RCxJQUFNLElBQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUV6QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBRXBDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBTSxHQUFHLEdBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsS0FBSztBQUNyQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLEtBQUs7QUFDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM3QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBSUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDOUQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztTQUFNLENBQUM7UUFDSixJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBR0YsTUFBTTtBQUNOLDZCQUE2QjtBQUU3QixxQ0FBcUM7QUFHckMsaUVBQWlFOzs7Ozs7O1VDcG5DckU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL01vZGVsL0NhcmdhaXNvbi50cyIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC8uL3NyYy9Nb2RlbC9Qcm9kdWl0LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSAnLi9Qcm9kdWl0JztcblxuYWJzdHJhY3QgY2xhc3MgQ2FyZ2Fpc29uIHtcbiAgICBwdWJsaWMgcHJvZHVpdHM6IFByb2R1aXRbXSA9IFtdO1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGRhdGVkZWJ1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkYXRlZmluOiBzdHJpbmc7XG4gICAgcHVibGljIHBvaWRzY2FyZ286IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tcmVwcm9kdWl0OiBudW1iZXI7XG4gICAgcHVibGljIGNvZGVVbmlxdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGlldV9kZXBhcnQ6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9kZXBhcnRcbiAgICBwdWJsaWMgbGlldV9hcnJpdmU6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9hcnJpdmVcbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmc7IC8vIEFqb3V0IGRlIGxhIHByb3ByacOpdMOpIHN0YXR1c1xuICAgIHB1YmxpYyBldGF0QXZhbmNlbWVudDogc3RyaW5nOyAvLyBBam91dCBkZSBsYSBwcm9wcmnDqXTDqSBldGF0QXZhbmNlbWVudFxuXG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlciwgdHlwZTogc3RyaW5nLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRhdGVkZWJ1dCA9IGRhdGVkZWJ1dDtcbiAgICAgICAgdGhpcy5kYXRlZmluID0gZGF0ZWZpbjtcbiAgICAgICAgdGhpcy5wb2lkc2NhcmdvID0gcG9pZHNjYXJnbztcbiAgICAgICAgdGhpcy5ub21yZXByb2R1aXQgPSBub21yZXByb2R1aXQ7XG4gICAgICAgIHRoaXMuY29kZVVuaXF1ZSA9IENhcmdhaXNvbi5nZW5lcmF0ZVVuaXF1ZUNvZGUoKTsgLy8gR8OpbsOpcmVyIHVuIGNvZGUgdW5pcXVlIGxvcnMgZGUgbGEgY3LDqWF0aW9uXG5cbiAgICAgICAgdGhpcy5saWV1X2RlcGFydCA9IGxpZXVfZGVwYXJ0O1xuICAgICAgICB0aGlzLmxpZXVfYXJyaXZlID0gbGlldV9hcnJpdmU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ2Zlcm1lcic7IC8vIEluaXRpYWxpc2VyIGxlIHN0YXR1dCDDoCAnZmVybWVyJ1xuICAgICAgICB0aGlzLmV0YXRBdmFuY2VtZW50ID0gJ2VuX2F0dGVudGUnOyAvLyBJbml0aWFsaXNlciBsJ8OpdGF0IGQnYXZhbmNlbWVudCDDoCAnZW5fYXR0ZW50ZScgcGFyIGTDqWZhdXRcblxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgYWpvdXRlclByb2R1aXQocHJvZHVpdDogUHJvZHVpdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWl0cy5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVpdHMgPSBbXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gcGxlaW5lLCBpbXBvc3NpYmxlIGQnYWpvdXRlciBwbHVzIGRlIHByb2R1aXRzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1aXRzLnB1c2gocHJvZHVpdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9kdWl0IGFqb3V0w6kuIE1vbnRhbnQgdG90YWw6ICR7dGhpcy5zb21tZVRvdGFsZUMoKX1GYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5iUHJvZHVpdHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVpdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjdWxlckZyYWlzKHByb2R1aXQ6IFByb2R1aXQpOiBudW1iZXIge1xuICAgICAgICBsZXQgZnJhaXM6IG51bWJlciA9IDA7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibWFyaXRpbWVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDEwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWVyaWVubmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDMwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicm91dGllcmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDkwICogcHJvZHVpdC5nZXRQb2lkcygpICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNvbW1lVG90YWxlQygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0cy5yZWR1Y2UoKGFjYywgcHJvZHVpdCkgPT4gYWNjICsgdGhpcy5jYWxjdWxlckZyYWlzKHByb2R1aXQpLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG4gICAgcHVibGljIHRvZ2dsZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PT0gJ2Zlcm1lcicgPyAnb3V2cmlyJyA6ICdmZXJtZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTdGF0dXMobmV3RXRhdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChbJ2VuX2NvdXJzJywgJ2VuX2F0dGVudGUnLCAnYXJyaXZlJ10uaW5jbHVkZXMobmV3RXRhdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXRhdEF2YW5jZW1lbnQgPSBuZXdFdGF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIsOJdGF0IGQnYXZhbmNlbWVudCBpbnZhbGlkZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCk7IC8vIEfDqW7DqXJlciB1bmUgY2hhw65uZSBhbMOpYXRvaXJlIGRlIGxvbmd1ZXVyIDdcbiAgICAgICAgcmV0dXJuIFwiQ09cIiArIHJhbmRvbUNvZGU7ICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uQWVyaWVubmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZywpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwiYWVyaWVubmVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIEHDqXJpZW5uZSAoQ29kZTogJHt0aGlzLmNvZGVVbmlxdWV9KSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9LCBQb2lkcyBkZSBsYSBjYXJnYWlzb246ICR7dGhpcy5wb2lkc2NhcmdvfSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubm9tcmVwcm9kdWl0fSwgRGF0ZSBkZSBkw6lidXQ6ICR7dGhpcy5kYXRlZGVidXR9LCBEYXRlIGRlIGZpbjogJHt0aGlzLmRhdGVmaW59LCBTdGF0dXQ6ICR7dGhpcy5zdGF0dXN9ICwgw4l0YXQgZCdhdmFuY2VtZW50OiAke3RoaXMuZXRhdEF2YW5jZW1lbnR9YDtcbiAgICB9XG59XG5cbmNsYXNzIENhcmdhaXNvbk1hcml0aW1lIGV4dGVuZHMgQ2FyZ2Fpc29uIHtcbiAgICBjb25zdHJ1Y3RvcihkaXN0YW5jZTogbnVtYmVyLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwibWFyaXRpbWVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIE1hcml0aW1lIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uUm91dGllcmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihkaXN0YW5jZSwgXCJyb3V0aWVyZVwiLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1X2RlcGFydCxsaWV1X2Fycml2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBDYXJnYWlzb24gUm91dGnDqHJlIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IENhcmdhaXNvbiwgQ2FyZ2Fpc29uQWVyaWVubmUsIENhcmdhaXNvbk1hcml0aW1lLCBDYXJnYWlzb25Sb3V0aWVyZSB9O1xuXG5cblxuIiwiYWJzdHJhY3QgY2xhc3MgUHJvZHVpdCB7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgcG9pZHM6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tQ2xpZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHByZW5vbUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgYWRyZXNzZUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyBub21EZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLCBlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICAgICAgdGhpcy5ub21DbGllbnQgPSBub21DbGllbnQ7XG4gICAgICAgIHRoaXMucHJlbm9tQ2xpZW50ID0gcHJlbm9tQ2xpZW50O1xuICAgICAgICB0aGlzLnRlbGVwaG9uZUNsaWVudCA9IHRlbGVwaG9uZUNsaWVudDtcbiAgICAgICAgdGhpcy5hZHJlc3NlQ2xpZW50ID0gYWRyZXNzZUNsaWVudDtcbiAgICAgICAgdGhpcy5ub21EZXN0aW5hdGFpcmUgPSBub21EZXN0aW5hdGFpcmU7XG4gICAgICAgIHRoaXMucHJlbm9tRGVzdGluYXRhaXJlID0gcHJlbm9tRGVzdGluYXRhaXJlO1xuICAgICAgICB0aGlzLmFkcmVzc2VEZXN0aW5hdGFpcmUgPSBhZHJlc3NlRGVzdGluYXRhaXJlO1xuICAgICAgICB0aGlzLmVtYWlsZGVzdGluYXRhaXJlID0gZW1haWxkZXN0aW5hdGFpcmU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGliZWxsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5saWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMaWJlbGxlKGxpYmVsbGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpYmVsbGUgPSBsaWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb2lkcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2lkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pZHMocG9pZHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvaWRzID0gcG9pZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluZm8oKTogc3RyaW5nO1xufVxuXG5jbGFzcyBBbGltZW50YWlyZSBleHRlbmRzIFByb2R1aXQge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nXG5cbiAgICApIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYEFsaW1lbnRhaXJlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2dgO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hpbWlxdWUgZXh0ZW5kcyBQcm9kdWl0IHtcbiAgICBwdWJsaWMgdG94aWNpdGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgdG94aWNpdGU6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGxpYmVsbGUsIHBvaWRzLCBub21DbGllbnQsIHByZW5vbUNsaWVudCwgdGVsZXBob25lQ2xpZW50LCBhZHJlc3NlQ2xpZW50LCBub21EZXN0aW5hdGFpcmUsIHByZW5vbURlc3RpbmF0YWlyZSwgYWRyZXNzZURlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgIHRoaXMudG94aWNpdGUgPSB0b3hpY2l0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG94aWNpdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG94aWNpdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFRveGljaXRlKHRveGljaXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3hpY2l0ZSA9IHRveGljaXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2hpbWlxdWUgLSBMaWJlbGzDqTogJHt0aGlzLmdldExpYmVsbGUoKX0sIFBvaWRzOiAke3RoaXMuZ2V0UG9pZHMoKX1rZywgVG94aWNpdMOpOiAke3RoaXMudG94aWNpdGV9YDtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE1hdGVyaWVsIGV4dGVuZHMgUHJvZHVpdCB7XG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIEZyYWdpbGUgZXh0ZW5kcyBNYXRlcmllbCB7XG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYEZyYWdpbGUgLSBMaWJlbGzDqTogJHt0aGlzLmdldExpYmVsbGUoKX0sIFBvaWRzOiAke3RoaXMuZ2V0UG9pZHMoKX1rZ2A7XG4gICAgfVxufVxuXG5jbGFzcyBJbmNhc3NhYmxlIGV4dGVuZHMgTWF0ZXJpZWwge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGxpYmVsbGUsIHBvaWRzLCBub21DbGllbnQsIHByZW5vbUNsaWVudCwgdGVsZXBob25lQ2xpZW50LCBhZHJlc3NlQ2xpZW50LCBub21EZXN0aW5hdGFpcmUsIHByZW5vbURlc3RpbmF0YWlyZSwgYWRyZXNzZURlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBJbmNhc3NhYmxlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2dgO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvZHVpdCwgQWxpbWVudGFpcmUsIENoaW1pcXVlLCBGcmFnaWxlLCBJbmNhc3NhYmxlIH07XG4iLCJpbXBvcnQgeyBQcm9kdWl0LCBBbGltZW50YWlyZSwgQ2hpbWlxdWUsIEZyYWdpbGUsIEluY2Fzc2FibGUgfSBmcm9tICcuL01vZGVsL1Byb2R1aXQnO1xuaW1wb3J0IHsgQ2FyZ2Fpc29uLCBDYXJnYWlzb25BZXJpZW5uZSwgQ2FyZ2Fpc29uTWFyaXRpbWUsIENhcmdhaXNvblJvdXRpZXJlIH0gZnJvbSAnLi9Nb2RlbC9DYXJnYWlzb24nO1xuXG5sZXQgY2FyZ2Fpc29uczogQ2FyZ2Fpc29uW10gPSBbXTtcbmxldCBmaWx0ZXJlZENhcmdhaXNvbnM6IENhcmdhaXNvbltdID0gW107XG5sZXQgcHJvZHVpdHM6IFByb2R1aXRbXSA9IFtdO1xuXG4vKiBmdW5jdGlvbiBham91dGVyUHJvZHVpdExvY2FsZW1lbnQocHJvZHVpdDogUHJvZHVpdCkge1xuICAgIHByb2R1aXRzQWpvdXRlcy5wdXNoKHByb2R1aXQpO1xufVxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93RGV0YWlscyh0eXBlOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlR5cGUgcmVjaGVyY2jDqTpcIiwgdHlwZSk7XG4gICAgY29uc29sZS5sb2coXCJEaXN0YW5jZSByZWNoZXJjaMOpZTpcIiwgZGlzdGFuY2UpO1xuXG4gICAgY29uc3QgY2FyZ2Fpc29uID0gY2FyZ2Fpc29ucy5maW5kKGMgPT4gYy50eXBlID09PSB0eXBlICYmIGMuZGlzdGFuY2UgPT09IGRpc3RhbmNlKTtcbiAgICBjb25zb2xlLmxvZyhcIkNhcmdhaXNvbiB0cm91dsOpZTpcIiwgY2FyZ2Fpc29uKTtcblxuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgZG9ubsOpZXMgZGVzIHByb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1aXRzID0gZGF0YS5wcm9kdWl0czsgLy8gUsOpY3Vww6lyZXIgbGVzIHByb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGRvbm7DqWVzIGRlcyBwcm9kdWl0czonLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGV0YWlscyA9IGBcbiAgICAgICAgICAgIDxwPlR5cGU6ICR7Y2FyZ2Fpc29uLnR5cGV9PC9wPlxuICAgICAgICAgICAgPHA+RGlzdGFuY2U6ICR7Y2FyZ2Fpc29uLmRpc3RhbmNlfSBrbTwvcD5cbiAgICAgICAgICAgIDxwPkxpZXUgZGUgZMOpcGFydDogJHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC9wPlxuICAgICAgICAgICAgPHA+TGlldSBkJ2Fycml2w6llOiAke2NhcmdhaXNvbi5saWV1X2Fycml2ZX08L3A+XG4gICAgICAgICAgICA8cD5EYXRlIGRlIGTDqWJ1dDogJHtjYXJnYWlzb24uZGF0ZWRlYnV0fTwvcD5cbiAgICAgICAgICAgIDxwPkRhdGUgZGUgZmluOiAke2NhcmdhaXNvbi5kYXRlZmlufTwvcD5cbiAgICAgICAgICAgIDxwPlByb2R1aXRzOjwvcD5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT1cIndpZHRoOiA1MHZ3O1wiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZSBkZSBwcm9kdWl0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkxpYmVsbMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvaWRzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIEFmZmljaGVyIGxlcyBkw6l0YWlscyBkZXMgcHJvZHVpdHMgYXNzb2Npw6lzIMOgIGxhIGNhcmdhaXNvblxuICAgICAgICBjYXJnYWlzb24ucHJvZHVpdHMuZm9yRWFjaChwcm9kdWl0ID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gYFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5jb25zdHJ1Y3Rvci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Byb2R1aXQubGliZWxsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LnBvaWRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJnYWlzb24ucHJvZHVpdHMpO1xuICAgICAgICBcblxuICAgICAgICBkZXRhaWxzICs9IGA8L3RhYmxlPmA7XG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGRldGFpbHNDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gZGV0YWlscztcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gbm9uIHRyb3V2w6llLlwiKTtcbiAgICB9XG59XG5cbih3aW5kb3cgYXMgYW55KS5zaG93RGV0YWlscyA9IHNob3dEZXRhaWxzO1xuXG5cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7IC8vIEZlcm1lciBsZSBtb2RhbFxuICAgIH1cbn1cblxuXG5sZXQgY29kZTphbnlcbmZ1bmN0aW9uIGFkZFByb2R1Y3QobnVtZXJvOmFueSkge1xuICBcbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdham91dGVyLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoZGV0YWlsc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWpvdXRlci1wcm9kdWN0JykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTsgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2cobnVtZXJvKTtcblxuICAgICAgIGNvZGU9bnVtZXJvXG4gICAgICAgXG4gICAgfVxuXG5cblxuXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWxzKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTsgLy8gRmVybWVyIGxlIG1vZGFsXG4gICAgfVxufVxuKHdpbmRvdyBhcyBhbnkpLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB0eXBlSW5wdXQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtY2FyZ2Fpc29uJyk7XG4gICAgY29uc3QgbmJycHJvZHVpdCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOcHJvZHVpdCcpO1xuICAgIGNvbnN0IG5icnByb2R1aXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOcHJvZHVpdC1lcnJvcicpO1xuICAgIGNvbnN0IGRhdGVkZWJ1dElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZGVidXQnKTtcbiAgICBjb25zdCBkYXRlZmluSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1maW4nKTtcbiAgICBjb25zdCBkYXRlZGVidXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlZGVidXQtZXJyb3InKTtcbiAgICBjb25zdCBkYXRlZmluRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZWZpbi1lcnJvcicpO1xuXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGF0ZWRlYnV0RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBkYXRlZmluRXJyb3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChkYXRlZGVidXRJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkYXRlZGVidXRFcnJvci50ZXh0Q29udGVudCA9IFwiVmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIjtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVmaW5JbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkYXRlZmluRXJyb3IudGV4dENvbnRlbnQgPSBcIlZldWlsbGV6IHJlbXBsaXIgY2UgY2hhbXAuXCI7XG4gICAgICAgIGRhdGVmaW5FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRGVidXQgPSBuZXcgRGF0ZShkYXRlZGVidXRJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChkYXRlRGVidXQgPD0gdG9kYXkpIHtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3IudGV4dENvbnRlbnQgPSBcIkxhIGRhdGUgZGUgZMOpYnV0IGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgbGEgZGF0ZSBkJ2F1am91cmQnaHVpLlwiO1xuICAgICAgICBkYXRlZGVidXRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRmluID0gbmV3IERhdGUoZGF0ZWZpbklucHV0LnZhbHVlKTtcbiAgICBpZiAoZGF0ZUZpbiA8PSBkYXRlRGVidXQpIHtcbiAgICAgICAgZGF0ZWZpbkVycm9yLnRleHRDb250ZW50ID0gXCJMYSBkYXRlIGRlIGZpbiBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIGxhIGRhdGUgZGUgZMOpYnV0LlwiO1xuICAgICAgICBkYXRlZmluRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG5cbmNvbnN0IHByZXZQYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBuZXh0UGFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0UGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgY3VycmVudFBhZ2VTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRQYWdlJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG5sZXQgY3VycmVudFBhZ2UgPSAxO1xuY29uc3QgaXRlbXNQZXJQYWdlID0gNDtcblxucHJldlBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgICAgICBjdXJyZW50UGFnZS0tO1xuICAgICAgICBhZmZpY2hlckNhcmdhaXNvbnMoZmlsdGVyZWRDYXJnYWlzb25zLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZENhcmdhaXNvbnMgOiBjYXJnYWlzb25zKTtcbiAgICB9XG59KTtcblxubmV4dFBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGNhcmdhaXNvbnMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpO1xuICAgIGlmIChjdXJyZW50UGFnZSA8IGxhc3RQYWdlKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhmaWx0ZXJlZENhcmdhaXNvbnMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQ2FyZ2Fpc29ucyA6IGNhcmdhaXNvbnMpO1xuICAgIH1cbn0pO1xuXG5cbi8vZm9uY3Rpb24gZmVybWVyIG91dmVydCBjYXJnYWlzb25cbmFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVN0YXR1cyhjb2RlVW5pcXVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYXJnYWlzb24gPSBjYXJnYWlzb25zLmZpbmQoYyA9PiBjLmNvZGVVbmlxdWUgPT09IGNvZGVVbmlxdWUpO1xuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdHVzID0gY2FyZ2Fpc29uLnN0YXR1cyA9PT0gJ2Zlcm1lcicgPyAnb3V2cmlyJyA6ICdmZXJtZXInO1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBjb2RlVW5pcXVlLCBzdGF0dXM6IG5ld1N0YXR1cyB9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRjYXJnYWlzb24vc2F2ZS5waHAnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICBjYXJnYWlzb24uc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9nZ2xlLSR7Y29kZVVuaXF1ZX1gKS50ZXh0Q29udGVudCA9IG5ld1N0YXR1czsgLy8gTWlzZSDDoCBqb3VyIGR1IHN0YXR1dCBkYW5zIGxhIHRhYmxlIEhUTUxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBtaXNlIMOgIGpvdXIgZHUgc3RhdHV0OicsIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHJlcXXDqnRlOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2Vudm9pOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4od2luZG93IGFzIGFueSkudG9nZ2xlU3RhdHVzID0gdG9nZ2xlU3RhdHVzO1xuXG5cbi8vZm9uY3Rpb24gcG91ciBwb3VyIGxcImV0YXQgZCdhdmFuY2VtZW50XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhjb2RlVW5pcXVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0YXR1cy1zZWxlY3QtJHtjb2RlVW5pcXVlfWApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGNvbnN0IG5ld0V0YXQgPSBzZWxlY3RFbGVtZW50LnZhbHVlO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRjYXJnYWlzb24vc2F2ZS5waHAnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb2RlVW5pcXVlLCBldGF0QXZhbmNlbWVudDogbmV3RXRhdCB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXRhdEF2YW5jZW1lbnQgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gTWlzZSDDoCBqb3VyIGxvY2FsZSBkZSBsJ2FmZmljaGFnZSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2dnbGUtJHtjb2RlVW5pcXVlfWApO1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gbmV3RXRhdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ciBkdSBzdGF0dXQ6JywgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuICAgIH1cbn1cbih3aW5kb3cgYXMgYW55KS51cGRhdGVTdGF0dXMgPSB1cGRhdGVTdGF0dXM7XG5cblxuXG5mdW5jdGlvbiBhZmZpY2hlckNhcmdhaXNvbnMoZGF0YTogQ2FyZ2Fpc29uW10pOiB2b2lkIHtcbiAgICBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRjYXJnYWlzb24vc2F2ZS5waHAnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgcsOpc2VhdScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VUZXh0ID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY2FyZ2Fpc29ucykgeyBcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb25uw6llcyBtYWwgc3RydWN0dXLDqWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29ucyA9IGRhdGEuY2FyZ2Fpc29ucztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmdhaXNvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJvZHljYXJnYWlzb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmdhaXNvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBhdmVjIElEIFwidGJvZHljYXJnYWlzb25cIiBub24gdHJvdXbDqScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FyZ2Fpc29ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdBdWN1bmUgY2FyZ2Fpc29uIG5lIGNvcnJlc3BvbmQgYXV4IGNyaXTDqHJlcyBkZSBmaWx0cmFnZS4nO1xuICAgICAgICAgICAgICAgICAgICBjYXJnYWlzb25MaXN0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGl0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0ZWRDYXJnYWlzb25zID0gKGZpbHRlcmVkQ2FyZ2Fpc29ucy5sZW5ndGggPiAwID8gZmlsdGVyZWRDYXJnYWlzb25zIDogY2FyZ2Fpc29ucykuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgcGFnaW5hdGVkQ2FyZ2Fpc29ucy5mb3JFYWNoKGNhcmdhaXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgPiR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24uZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5kYXRlZGVidXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cIndpZHRoOjEwMHZ3XCI+JHtjYXJnYWlzb24uZGF0ZWZpbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLmxpZXVfZGVwYXJ0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24ubGlldV9hcnJpdmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXMtc2VsZWN0LSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCIgb25jaGFuZ2U9XCJ1cGRhdGVTdGF0dXMoJyR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9JylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gYXR0ZW50ZVwiPkVuIGF0dGVudGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gY291cnNcIj5FbiBjb3Vyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcnJpdsOpXCI+QXJyaXZlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwic3RhdHVzLSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCIgb25jbGljaz1cInRvZ2dsZVN0YXR1cygnJHtjYXJnYWlzb24uY29kZVVuaXF1ZX0nKVwiPiR7Y2FyZ2Fpc29uLnN0YXR1c308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImRpc3BsYXk6ZmxleCAhaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBzdHlsZT1cImJvcmRlcjpub25lXCIgY2xhc3M9XCJ0ZXh0LWJsdWUtNDAwIHRleHQteGwgcHItMyBmb250LWJvbGQgcm91bmRlZCBcIiBvbmNsaWNrPVwic2hvd0RldGFpbHMoJyR7Y2FyZ2Fpc29uLnR5cGV9JywgJHtjYXJnYWlzb24uZGlzdGFuY2V9KVwiPkTDqXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiYm9yZGVyOm5vbmVcIiBjbGFzcz1cInByb2R1Y3RzIHRleHQtZ3JlZW4tNDAwIHRleHQteGwgcHItMyBmb250LWJvbGQgcm91bmRlZFwiIG9uY2xpY2s9XCJhZGRQcm9kdWN0KCcke2NhcmdhaXNvbi5jb2RlVW5pcXVlfScpXCIgPkFqb3V0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgY2FyZ2Fpc29uTGlzdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBjYXJnYWlzb25zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UGFnZSA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVNwYW4udGV4dENvbnRlbnQgPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHByZXZQYWdlQnV0dG9uLmRpc2FibGVkID0gY3VycmVudFBhZ2UgPT09IDE7XG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VCdXR0b24uZGlzYWJsZWQgPSBjdXJyZW50UGFnZSA9PT0gbGFzdFBhZ2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IHBhcnNpbmcgSlNPTjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JhdyByZXNwb25zZSB0ZXh0OicsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBmZXRjaDonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgLyogICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzJykuZm9yRWFjaChwcm9kdWl0ID0+e1xuICAgICAgICAgICAgcHJvZHVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQ9ZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWVybz0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1udW1lcm8nKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG51bWVybyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgfSkgKi9cblxuXG59XG5cblxuXG5mdW5jdGlvbiBmaWx0ZXJDYXJnYWlzb25zKCkge1xuICAgIGNvbnN0IGNvZGVJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZGF0ZWRlYnV0SW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZGVidXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGRhdGVmaW5JbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1maW4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpZXVEZXBhcnRJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldS1kZXBhcnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpZXVBcnJpdmVJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldS1hcnJpdmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3QgY29kZUlucHV0ID0gY29kZUlucHV0RWxlbWVudD8udmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJyc7XG4gICAgY29uc3QgZGF0ZWRlYnV0SW5wdXQgPSBkYXRlZGVidXRJbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKSB8fCAnJztcbiAgICBjb25zdCBkYXRlZmluSW5wdXQgPSBkYXRlZmluSW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkgfHwgJyc7XG4gICAgY29uc3QgbGlldURlcGFydElucHV0ID0gbGlldURlcGFydElucHV0RWxlbWVudD8udmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJyc7XG4gICAgY29uc3QgbGlldUFycml2ZUlucHV0ID0gbGlldUFycml2ZUlucHV0RWxlbWVudD8udmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgJyc7XG5cblxuICAgIGZpbHRlcmVkQ2FyZ2Fpc29ucyA9IGNhcmdhaXNvbnMuZmlsdGVyKGNhcmdhaXNvbiA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoQ29kZSA9IGNvZGVJbnB1dCA/IGNhcmdhaXNvbi5jb2RlVW5pcXVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29kZUlucHV0KSA6IHRydWU7XG4gICAgICAgIGNvbnN0IG1hdGNoRGF0ZURlYnV0ID0gZGF0ZWRlYnV0SW5wdXQgPyBjYXJnYWlzb24uZGF0ZWRlYnV0ID09PSBkYXRlZGVidXRJbnB1dCA6IHRydWU7XG4gICAgICAgIGNvbnN0IG1hdGNoRGF0ZUZpbiA9IGRhdGVmaW5JbnB1dCA/IGNhcmdhaXNvbi5kYXRlZmluID09PSBkYXRlZmluSW5wdXQgOiB0cnVlO1xuICAgICAgICBjb25zdCBtYXRjaExpZXVEZXBhcnQgPSBsaWV1RGVwYXJ0SW5wdXQgPyBjYXJnYWlzb24ubGlldV9kZXBhcnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsaWV1RGVwYXJ0SW5wdXQpIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hMaWV1QXJyaXZlID0gbGlldUFycml2ZUlucHV0ID8gY2FyZ2Fpc29uLmxpZXVfYXJyaXZlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobGlldUFycml2ZUlucHV0KSA6IHRydWU7XG4gICAgICAgIHJldHVybiBtYXRjaENvZGUgJiYgbWF0Y2hEYXRlRGVidXQgJiYgbWF0Y2hEYXRlRmluICYmIG1hdGNoTGlldURlcGFydCAmJlxuICAgICAgICBtYXRjaExpZXVBcnJpdmU7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50UGFnZSA9IDE7XG4gICAgYWZmaWNoZXJDYXJnYWlzb25zKGZpbHRlcmVkQ2FyZ2Fpc29ucyk7XG59XG5cbmNvbnN0IGZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5pZiAoZmlsdGVyQnV0dG9uKSB7XG4gICAgZmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZpbHRlckNhcmdhaXNvbnMoKTtcbiAgICB9KTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhjYXJnYWlzb25zKTtcbn0pO1xuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24obWVzc2FnZTpzdHJpbmcsIHR5cGUgPSAnc3VjY2VzcycpIHtcbiAgICAvLyBBZGQgQ1NTIGZvciBub3RpZmljYXRpb25zXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnYWlzb25Gb3JtJyk7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24tY29udGFpbmVyJyk7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24tY29udGFpbmVyJyk7XG4gICAgICAgIGZvcm0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBmb3JtKTtcbiAgICB9XG5cbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJyk7XG4gICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjQ0MzM2JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjk4MDAnO1xuICAgIH1cblxuICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj4mdGltZXM7PC9idXR0b24+XG4gICAgYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuXG4gICAgbm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgICB9LCAzMDAwKTtcblxuXG5cbn1cblxuYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xuXG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnYWlzb25Gb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgZW52b2llID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1jYXJnYWlzb24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmVudm9pZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXN0YW5jZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHR5cGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLWNhcmdhaXNvbicpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBjb25zdCBwb2lkc2NhcmdhaXNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG5vbWJyZXByb2R1aXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTnByb2R1aXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBkYXRlZGVidXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWRlYnV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZGF0ZWZpbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZmluJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGlldWRlcGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZXVfZGVwYXJ0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGlldWFycml2ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1X2Fycml2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGVkZWJ1dCA9IGRhdGVkZWJ1dElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlZmluID0gZGF0ZWZpbklucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBwb2lkc2NhcmdvID0gcGFyc2VGbG9hdChwb2lkc2NhcmdhaXNvbi52YWx1ZSk7XG4gICAgICAgIGNvbnN0IG5vbXJlcHJvZHVpdCA9IHBhcnNlSW50KG5vbWJyZXByb2R1aXQudmFsdWUpO1xuICAgICAgICBjb25zdCBsaWV1ZGVwYXJ0PWxpZXVkZXBhcnRJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGlldWFycml2ZT1saWV1YXJyaXZlcklucHV0LnZhbHVlXG5cbiAgICAgICAgbGV0IGNhcmdhaXNvbjogQ2FyZ2Fpc29uIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYWVyaWVubmUnOlxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbiA9IG5ldyBDYXJnYWlzb25BZXJpZW5uZShkaXN0YW5jZSwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldWRlcGFydCxsaWV1YXJyaXZlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hcml0aW1lJzpcbiAgICAgICAgICAgICAgICBjYXJnYWlzb24gPSBuZXcgQ2FyZ2Fpc29uTWFyaXRpbWUoZGlzdGFuY2UsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVkZXBhcnQsbGlldWRlcGFydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyb3V0aWVyZSc6XG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29uID0gbmV3IENhcmdhaXNvblJvdXRpZXJlKGRpc3RhbmNlLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1YXJyaXZlLGxpZXVkZXBhcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgICAgIGNhcmdhaXNvbnMucHVzaChjYXJnYWlzb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJnYWlzb25EYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvZGVVbmlxdWU6Y2FyZ2Fpc29uLmNvZGVVbmlxdWUsXG4gICAgICAgICAgICAgICAgdHlwZTogY2FyZ2Fpc29uLnR5cGUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IGNhcmdhaXNvbi5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBwcm9kdWl0czogY2FyZ2Fpc29uLnByb2R1aXRzLFxuICAgICAgICAgICAgICAgIGRhdGVkZWJ1dDogY2FyZ2Fpc29uLmRhdGVkZWJ1dCxcbiAgICAgICAgICAgICAgICBkYXRlZmluOiBjYXJnYWlzb24uZGF0ZWZpbixcbiAgICAgICAgICAgICAgICBwb2lkc2NhcmdvOmNhcmdhaXNvbi5wb2lkc2NhcmdvLFxuICAgICAgICAgICAgICAgIG5vbXJlcHJvZHVpdDpjYXJnYWlzb24ubm9tcmVwcm9kdWl0LFxuICAgICAgICAgICAgICAgIGxpZXVfZGVwYXJ0OmNhcmdhaXNvbi5saWV1X2RlcGFydCxcbiAgICAgICAgICAgICAgICBsaWV1X2Fycml2ZTpjYXJnYWlzb24ubGlldV9hcnJpdmUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOmNhcmdhaXNvbi5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZXRhdEF2YW5jZW1lbnQ6Y2FyZ2Fpc29uLmV0YXRBdmFuY2VtZW50XG5cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShjYXJnYWlzb25EYXRhKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2PDqHM6JywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVOb3RpZmljYXRpb24oJ2NhcmdhaXNvbiBham91dMOpJywgJ2Vycm9yJyk7XG5cblxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vcGFnaW5hdGlvblxuXG5cblxuLy9vcHRpb24gZFwiYWZmaWNoYWdlIHBvaWRzIG91IG5iIGRlIHByb3F1aXQgZGFucyBsZSB0YWJsZWF1XG5jb25zdCBuYnJwcm9kdWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYicpO1xuY29uc3QgcG9pZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGQnKTsgXG4gICAgXG4vKiAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuICAgIFxuICAgICAgICBpZiAobW9kYWwgJiYgY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICovXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgLy92YWxpZGVyIGZvcm0gcHJvZHVpdFxuICAgICBcblxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbnByb2R1aXQobWVzc2FnZTogc3RyaW5nLCB0eXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAvLyBBam91dGVyIGR1IENTUyBwb3VyIGxlcyBub3RpZmljYXRpb25zXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb24gLmNsb3NlLWJ0biB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbicpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmNDQzMzYnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjk4MDAnO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbiAgICAgICAgXG4gICAgICAgICAgICBub3RpZmljYXRpb24ucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICB9XG4gICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAvLyBGb25jdGlvbiBkZSB2YWxpZGF0aW9uIGR1IGZvcm11bGFpcmVcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvZHVjdEZvcm0oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbGliZWxsZVByb2R1aXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpYmVsbGUtcHJvZHVpdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHR5cGVQcm9kdWl0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXByb2R1aXQnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcG9pZHNQcm9kdWl0ID0gcGFyc2VGbG9hdCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgY29uc3QgdG94aWNpdGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveGljaXRlJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlQXNOdW1iZXIgfHwgMDtcbiAgICBjb25zdCBub21jbGllbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHByZW5vbWNsaWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdGVsZXBob25lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlcGhvbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZHJlc3NlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3Qgbm9tZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21kJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcHJlbm9tZGVzdGluYXRhaXJlPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZW5vbWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZGRyZXNzZWRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbGRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcblxuXG4gICAgXG4gICAgLy8gVsOpcmlmaWV6IHNpIGxlcyBjaGFtcHMgcmVxdWlzIHNvbnQgdmlkZXNcbiAgICBpZiAoIWxpYmVsbGVQcm9kdWl0KSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIExpYmVsbMOpIFByb2R1aXQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0eXBlUHJvZHVpdCkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogc8OpbGVjdGlvbm5lciB1biBUeXBlIGRlIFByb2R1aXQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzTmFOKHBvaWRzUHJvZHVpdCkpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IGVudHJlciB1biBQb2lkcyB2YWxpZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVQcm9kdWl0ID09PSAnQ2hpbWlxdWUnICYmIGlzTmFOKHRveGljaXRlKSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogZW50cmVyIHVuZSBUb3hpY2l0w6kgdmFsaWRlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghbm9tY2xpZW50KSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIE5vbSBDbGllbnQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFwcmVub21jbGllbnQpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgUHLDqW5vbSBDbGllbnQuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0ZWxlcGhvbmUpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgVMOpbMOpcGhvbmUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFhZHJlc3NlKSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIEFkcmVzc2UuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFub21kZXN0aW5hdGFpcmUpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgTm9tIERlc3RpbmF0YWlyZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXByZW5vbWRlc3RpbmF0YWlyZSkge1xuICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCBQcsOpbm9tIERlc3RpbmF0YWlyZS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWFkZHJlc3NlZGVzdGluYXRhaXJlKSB7XG4gICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIEFkcmVzc2UgRGVzdGluYXRhaXJlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZW1haWxkZXN0aW5hdGFpcmUpIHtcbiAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHJlbXBsaXIgbGUgY2hhbXAgRW1haWwgRGVzdGluYXRhaXJlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIE1vZGlmaWV6IHZvdHJlIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50cyBwb3VyIGFwcGVsZXIgbGEgZm9uY3Rpb24gZGUgdmFsaWRhdGlvbiBhdmFudCBkJ2Vudm95ZXIgbGUgZm9ybXVsYWlyZVxuXG5cbiAvL2Zvcm11bGFpcmUgY2FyZ2Fpc29uXG4gY29uc3QgcHJvZHVjdGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVudm95ZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiBwcm9kdWN0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gVmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXG4gICAgaWYgKHZhbGlkYXRlUHJvZHVjdEZvcm0oKSkge1xuICAgICAgICBhd2FpdCBoYW5kbGVQcm9kdWN0Rm9ybVN1Ym1pdChldmVudCk7XG4gICAgfVxufSk7XG5cbiBhc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0Rm9ybVN1Ym1pdChldmVudDogRXZlbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIHZhbGV1cnMgZGVzIGNoYW1wcyBkdSBmb3JtdWxhaXJlXG4gICAgY29uc3QgbGliZWxsZVByb2R1aXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpYmVsbGUtcHJvZHVpdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHR5cGVQcm9kdWl0ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXByb2R1aXQnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcG9pZHNQcm9kdWl0ID0gcGFyc2VGbG9hdCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgY29uc3QgdG94aWNpdGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RveGljaXRlJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlQXNOdW1iZXIgfHwgMDtcbiAgICBjb25zdCBub21jbGllbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IHByZW5vbWNsaWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdGVsZXBob25lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlcGhvbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZHJlc3NlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3Qgbm9tZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21kJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcHJlbm9tZGVzdGluYXRhaXJlPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZW5vbWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBhZGRyZXNzZWRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbGRlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcblxuXG4gICAgLy8gQ3LDqWF0aW9uIGRlIGwnb2JqZXQgcHJvZHVpdCBlbiBmb25jdGlvbiBkdSB0eXBlIHPDqWxlY3Rpb25uw6lcbiAgICBsZXQgcHJvZHVpdDogUHJvZHVpdDtcblxuICAgIHN3aXRjaCAodHlwZVByb2R1aXQpIHtcbiAgICAgICAgY2FzZSAnQWxpbWVudGFpcmUnOlxuICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBBbGltZW50YWlyZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCBub21jbGllbnQsIHByZW5vbWNsaWVudCwgdGVsZXBob25lLCBhZHJlc3NlLCBub21kZXN0aW5hdGFpcmUsIHByZW5vbWRlc3RpbmF0YWlyZSwgYWRkcmVzc2VkZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NoaW1pcXVlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgQ2hpbWlxdWUobGliZWxsZVByb2R1aXQsIHBvaWRzUHJvZHVpdCwgdG94aWNpdGUsIG5vbWNsaWVudCwgcHJlbm9tY2xpZW50LCB0ZWxlcGhvbmUsIGFkcmVzc2UsIG5vbWRlc3RpbmF0YWlyZSwgcHJlbm9tZGVzdGluYXRhaXJlLCBhZGRyZXNzZWRlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRnJhZ2lsZSc6XG4gICAgICAgICAgICBwcm9kdWl0ID0gbmV3IEZyYWdpbGUobGliZWxsZVByb2R1aXQsIHBvaWRzUHJvZHVpdCwgbm9tY2xpZW50LCBwcmVub21jbGllbnQsIHRlbGVwaG9uZSwgYWRyZXNzZSwgbm9tZGVzdGluYXRhaXJlLCBwcmVub21kZXN0aW5hdGFpcmUsIGFkZHJlc3NlZGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJbmNhc3NhYmxlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgSW5jYXNzYWJsZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCBub21jbGllbnQsIHByZW5vbWNsaWVudCwgdGVsZXBob25lLCBhZHJlc3NlLCBub21kZXN0aW5hdGFpcmUsIHByZW5vbWRlc3RpbmF0YWlyZSwgYWRkcmVzc2VkZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUeXBlIGRlIHByb2R1aXQgbm9uIHJlY29ubnUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcsOpcGFyYXRpb24gZGVzIGRvbm7DqWVzIMOgIGVudm95ZXIgYXUgc2VydmV1clxuICAgIGNvbnN0IHByb2R1aXREYXRhID0ge1xuICAgICAgICB0eXBlOiB0eXBlUHJvZHVpdCxcbiAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgcHJvZHVjdDogcHJvZHVpdCxcblxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkocHJvZHVpdERhdGEpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcHJvZHVpdHMucHVzaChwcm9kdWl0KTsgLy8gQWpvdXRlciBsZSBwcm9kdWl0IMOgIGxhIGxpc3RlIGRlcyBwcm9kdWl0c1xuXG4gICAgICAgIC8vIEVudm9pIGRlcyBkb25uw6llcyBhdSBzZXJ2ZXVyIHZpYSB1bmUgcmVxdcOqdGUgUE9TVFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2PDqHM6JywgcmVzdWx0KTtcbiAgICAgICAgICAgIGNyZWF0ZU5vdGlmaWNhdGlvbnByb2R1aXQoXCJwcm9kdWl0IGFqb3V0w6lcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHJlcXXDqnRlOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiBmdW5jdGlvbiBhZmZpY2hlclByb2R1aXRzKCkge1xuICAgIC8vIEFmZmljaGVyIGxlcyBwcm9kdWl0cyBkYW5zIGxhIGNvbnNvbGUgcGFyIGV4ZW1wbGVcbiAgICBjb25zb2xlLmxvZyhcIlByb2R1aXRzIGFqb3V0w6lzOlwiLCBwcm9kdWl0c0Fqb3V0ZXMpO1xufVxuICovXG5cblxuXG5cblxuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgcHJvZHVjdCBmb3JtIHN1Ym1pc3Npb25cblxuLy8gQXR0YWNoZSBsJ8OpdsOpbmVtZW50IGRlIHNvdW1pc3Npb24gYXUgZm9ybXVsYWlyZSBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgZG9jdW1lbnRcblxuICAgICAgICBjb25zdCBjYXJnb3BsZWluU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgICAgICBpZiAoY2FyZ29wbGVpblNlbGVjdCkge1xuICAgICAgICAgICAgY2FyZ29wbGVpblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbCB0b2dnbGUgYmFzZWQgb24gdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhjYXJnb3BsZWluU2VsZWN0LnZhbHVlKTtcbiAgICAgICAgfVxuXG5cbiAgICBjb25zdCBwb2lkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcy1wcm9kdWl0Jyk7XG4gICAgY29uc3QgbmJQcm9kdWl0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnJfcHJvZHVpdCcpO1xuXG5cbnBvaWRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbm5iUHJvZHVpdHNDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvL2Nob2l4IGNhcmdhaXNvbiBwbGVpbmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpPy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBwb2lkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcy1wcm9kdWl0JykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICBjb25zdCBuYlByb2R1aXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25icl9wcm9kdWl0JykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIFxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ3BvaWRzJykge1xuICAgICAgICAgICAgaWYgKHBvaWRzQ29udGFpbmVyKSBwb2lkc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGlmIChuYlByb2R1aXRzQ29udGFpbmVyKSBuYlByb2R1aXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJ25icHJvZHVpdCcpIHtcbiAgICAgICAgICAgIGlmIChwb2lkc0NvbnRhaW5lcikgcG9pZHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChuYlByb2R1aXRzQ29udGFpbmVyKSBuYlByb2R1aXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICBcblxuIFxuXG4gICBcblxuXG4gICAgLy8gYWZmaWNoYWdlIG9wdGlvbmVlbGUgZGVzIHZhbGV1cnMgcG9kcyBldCBuYnByb2R1aXRcblxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUYWJsZUNvbHVtbnModmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBuYkNvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYicpIGFzIEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xuICAgICAgICBjb25zdCBwZENvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZCcpIGFzIEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xuICAgIFxuICAgICAgICBjb25zdCBuYkNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5iLWNlbGwnKSBhcyBOb2RlTGlzdE9mPEhUTUxUYWJsZUNlbGxFbGVtZW50PjtcbiAgICAgICAgY29uc3QgcGRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZC1jZWxsJykgYXMgTm9kZUxpc3RPZjxIVE1MVGFibGVDZWxsRWxlbWVudD47XG4gICAgXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ3BvaWRzJykge1xuICAgICAgICAgICAgbmJDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHBkQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIG5iQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICAgICAgICAgICBwZENlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYkNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBwZENvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbmJDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xuICAgICAgICAgICAgcGRDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBtaWxsaWV1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGFjY3VlaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY3VlaWxcIik7XG4gICAgY29uc3QgYWNjZWNhcmdhaXNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuY2FyZ2Fpc29uXCIpO1xuICAgIFxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgYnVyZ2VyLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0yNTBweFwiO1xuICAgIGJ1cmdlci5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICBidXJnZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDEwMCUpXCI7XG4gICAgYnVyZ2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjNzIGFzZS1pbi1vdXRcIjtcbiAgICBcbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29udC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIzMzBweFwiO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBDYXJnYWlzb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJnYWlzb25cIik7XG4gICAgY29uc3QgcHJvZHVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVpdFwiKTtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbjFcIik7XG4gICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAvKiAgQ2FyZ2Fpc29ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtaWxsaWV1LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNTUwcHhcIjtcbiAgICB9KTtcbiAgICBcbiAgICBwcm9kdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCI0MyVcIjtcbiAgICB9KTtcbiAgICAgKi9cbiAgICBcbiAgIC8qICBhY2N1ZWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCIxJVwiO1xuICAgIH0pO1xuICAgIFxuICAgIGFjY2VjYXJnYWlzb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM1MHB4XCI7XG4gICAgfSk7ICovXG4gICAgXG4gICAgY29uc3QgaW1hZ2VzID0gWycuLi9wdWJsaWMvaW1nL2F2aW9ucy5qcGcnLCAnLi4vcHVibGljL2ltZy9iYXRlYXUuanBnJywgJy4uL3B1YmxpYy9pbWcvYXZpb25zcy5qcGcnXTtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBcbiAgICBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZXNbY3VycmVudEluZGV4XX0nKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGNoYW5nZUJhY2tncm91bmRJbWFnZSwgMjAwMCk7XG4gICAgXG4gICAgY29uc3QgbW9kYWxzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfbW9kYWxfNVwiKTtcbiAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgXG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbHNcIik7XG4gICAgbW9kYWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IG1vZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVybWVyJylcbiAgICBtb2Quc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGNvbnN0IGZlcm1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5udWxlclwiKTtcbiAgICBmZXJtZXIuc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGZlcm1lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5icHJvZHVpdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJwcm9kdWl0cycpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ25icHJvZHVpdCcpIHtcbiAgICAgICAgICAgIGlmIChuYnByb2R1aXRzKSB7XG4gICAgICAgICAgICAgICAgbmJwcm9kdWl0cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChuYnByb2R1aXRzKSB7XG4gICAgICAgICAgICAgICAgbmJwcm9kdWl0cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgLy8gbWFwXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZHUgZm9ybXVsYWlyZVxuICAgICBcbiAgICAvLyBEw6lmaW5pdGlvbiBkZXMgY2xhc3NlcyBkZSBwcm9kdWl0c1xuICAgXG5cbiAgICAvLyBBam91dGV6IGNldCDDqWNvdXRldXIgZCfDqXbDqW5lbWVudHMgYXByw6hzIHF1ZSBsYSBwYWdlIGFpdCBjaGFyZ8OpXG4gIFxuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==