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
                row.innerHTML = "\n                        <td>".concat(cargaison.codeUnique, "</td>\n                        <td>").concat(cargaison.type, "</td>\n                        <td>").concat(cargaison.distance, "</td>\n                        <td>").concat(cargaison.datedebut, "</td>\n                        <td>").concat(cargaison.datefin, "</td>\n                        <td>").concat(cargaison.lieu_depart, "</td>\n                        <td>").concat(cargaison.lieu_arrive, "</td>\n                        <td>\n                        <select id=\"status-select-").concat(cargaison.codeUnique, "\" onchange=\"updateStatus('").concat(cargaison.codeUnique, "')\">\n                            <option value=\"en attente\">En attente</option>\n                            <option value=\"en cours\">En cours</option>\n                            <option value=\"arriv\u00E9\">Arrive</option>\n                        </select>\n                    </td>                      \n                      <td id=\"status-").concat(cargaison.codeUnique, "\">\n                        <button id=\"toggle-").concat(cargaison.codeUnique, "\" onclick=\"toggleStatus('").concat(cargaison.codeUnique, "')\">").concat(cargaison.status, "</button>\n                        \n                        </td>\n                        <td style=\"display:flex !important\">\n                        <button  style=\"border:none\" class=\"text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"showDetails('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">D\u00E9tails</button>\n                        <button style=\"border:none\" class=\"products text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"addProduct('").concat(cargaison.codeUnique, "')\" >Ajouter</button>\n                        </td>\n\n                    ");
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
function validateForms() {
    var isValid = true;
    var errors = [];
    var fieldsToValidate = [
        { id: 'libelle-produit', message: 'Le libellé du produit est requis.' },
        { id: 'type-produit', message: 'Le type de produit est requis.' },
        { id: 'poids-produit', message: 'Le poids du produit doit être un nombre positif.' },
        { id: 'nom', message: 'Le nom du client doit contenir au moins 10 caractères.' },
        { id: 'prenom', message: 'Le prénom du client doit contenir au moins 10 caractères.' },
        { id: 'telephone', message: 'Le numéro de téléphone doit comporter 9 chiffres.' },
        { id: 'adresse', message: 'L\'adresse doit contenir au moins 10 caractères.' },
        { id: 'nomd', message: 'Le nom du destinataire doit contenir au moins 10 caractères.' },
        { id: 'prenomd', message: 'Le prénom du destinataire doit contenir au moins 10 caractères.' },
        { id: 'adressed', message: 'L\'adresse du destinataire doit contenir au moins 10 caractères.' },
    ];
    fieldsToValidate.forEach(function (field) {
        var value = document.getElementById(field.id).value.trim();
        if (value.length === 0 || (field.id === 'poids-produit' && (isNaN(parseFloat(value)) || parseFloat(value) <= 0))) {
            errors.push(field.message);
            isValid = false;
        }
    });
    var emailDestinataire = document.getElementById('email').value.trim();
    if (emailDestinataire.length > 0 && !isValidEmail(emailDestinataire)) {
        errors.push('L\'email du destinataire est invalide.');
        isValid = false;
    }
    var errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '';
    if (errors.length > 0) {
        var errorList_1 = document.createElement('ul');
        errors.forEach(function (error) {
            var listItem = document.createElement('li');
            listItem.textContent = error;
            errorList_1.appendChild(listItem);
        });
        errorContainer.appendChild(errorList_1);
    }
    return isValid;
}
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function createNotificationproduit(message, type) {
    if (type === void 0) { type = 'success'; }
    // Ajouter du CSS pour les notifications
    var style = document.createElement('style');
    style.innerHTML = "\n            .notification-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 1000;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n        \n            .notification {\n                background-color: #4caf50;\n                color: white;\n                padding: 15px;\n                border-radius: 5px;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                animation: fadeIn 0.5s;\n            }\n        \n            .notification .close-btn {\n                background: none;\n                border: none;\n                color: white;\n                font-size: 16px;\n                cursor: pointer;\n                margin-left: 15px;\n            }\n        \n            @keyframes fadeIn {\n                from {\n                    opacity: 0;\n                    transform: translateY(-10px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n            ";
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
//formulaire cargaison
var productform = document.getElementById('btn-envoyer');
productform.addEventListener('click', function (event) {
    event.preventDefault();
    handleProductFormSubmit(event);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDOUQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztTQUFNLENBQUM7UUFDSixJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBR0YsTUFBTTtBQUNOLDZCQUE2QjtBQUU3QixxQ0FBcUM7QUFHckMsaUVBQWlFOzs7Ozs7O1VDNWxDckU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL01vZGVsL0NhcmdhaXNvbi50cyIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC8uL3NyYy9Nb2RlbC9Qcm9kdWl0LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSAnLi9Qcm9kdWl0JztcblxuYWJzdHJhY3QgY2xhc3MgQ2FyZ2Fpc29uIHtcbiAgICBwdWJsaWMgcHJvZHVpdHM6IFByb2R1aXRbXSA9IFtdO1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGRhdGVkZWJ1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkYXRlZmluOiBzdHJpbmc7XG4gICAgcHVibGljIHBvaWRzY2FyZ286IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tcmVwcm9kdWl0OiBudW1iZXI7XG4gICAgcHVibGljIGNvZGVVbmlxdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGlldV9kZXBhcnQ6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9kZXBhcnRcbiAgICBwdWJsaWMgbGlldV9hcnJpdmU6IHN0cmluZzsgLy8gQWpvdXQgZGUgbGEgcHJvcHJpw6l0w6kgbGlldV9hcnJpdmVcbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmc7IC8vIEFqb3V0IGRlIGxhIHByb3ByacOpdMOpIHN0YXR1c1xuICAgIHB1YmxpYyBldGF0QXZhbmNlbWVudDogc3RyaW5nOyAvLyBBam91dCBkZSBsYSBwcm9wcmnDqXTDqSBldGF0QXZhbmNlbWVudFxuXG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlciwgdHlwZTogc3RyaW5nLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRhdGVkZWJ1dCA9IGRhdGVkZWJ1dDtcbiAgICAgICAgdGhpcy5kYXRlZmluID0gZGF0ZWZpbjtcbiAgICAgICAgdGhpcy5wb2lkc2NhcmdvID0gcG9pZHNjYXJnbztcbiAgICAgICAgdGhpcy5ub21yZXByb2R1aXQgPSBub21yZXByb2R1aXQ7XG4gICAgICAgIHRoaXMuY29kZVVuaXF1ZSA9IENhcmdhaXNvbi5nZW5lcmF0ZVVuaXF1ZUNvZGUoKTsgLy8gR8OpbsOpcmVyIHVuIGNvZGUgdW5pcXVlIGxvcnMgZGUgbGEgY3LDqWF0aW9uXG5cbiAgICAgICAgdGhpcy5saWV1X2RlcGFydCA9IGxpZXVfZGVwYXJ0O1xuICAgICAgICB0aGlzLmxpZXVfYXJyaXZlID0gbGlldV9hcnJpdmU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ2Zlcm1lcic7IC8vIEluaXRpYWxpc2VyIGxlIHN0YXR1dCDDoCAnZmVybWVyJ1xuICAgICAgICB0aGlzLmV0YXRBdmFuY2VtZW50ID0gJ2VuX2F0dGVudGUnOyAvLyBJbml0aWFsaXNlciBsJ8OpdGF0IGQnYXZhbmNlbWVudCDDoCAnZW5fYXR0ZW50ZScgcGFyIGTDqWZhdXRcblxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgYWpvdXRlclByb2R1aXQocHJvZHVpdDogUHJvZHVpdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWl0cy5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVpdHMgPSBbXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gcGxlaW5lLCBpbXBvc3NpYmxlIGQnYWpvdXRlciBwbHVzIGRlIHByb2R1aXRzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2R1aXRzLnB1c2gocHJvZHVpdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9kdWl0IGFqb3V0w6kuIE1vbnRhbnQgdG90YWw6ICR7dGhpcy5zb21tZVRvdGFsZUMoKX1GYCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5iUHJvZHVpdHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVpdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjdWxlckZyYWlzKHByb2R1aXQ6IFByb2R1aXQpOiBudW1iZXIge1xuICAgICAgICBsZXQgZnJhaXM6IG51bWJlciA9IDA7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibWFyaXRpbWVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDEwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWVyaWVubmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDMwMCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicm91dGllcmVcIjpcbiAgICAgICAgICAgICAgICBmcmFpcyA9IDkwICogcHJvZHVpdC5nZXRQb2lkcygpICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNvbW1lVG90YWxlQygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0cy5yZWR1Y2UoKGFjYywgcHJvZHVpdCkgPT4gYWNjICsgdGhpcy5jYWxjdWxlckZyYWlzKHByb2R1aXQpLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG4gICAgcHVibGljIHRvZ2dsZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyA9PT0gJ2Zlcm1lcicgPyAnb3V2cmlyJyA6ICdmZXJtZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTdGF0dXMobmV3RXRhdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChbJ2VuX2NvdXJzJywgJ2VuX2F0dGVudGUnLCAnYXJyaXZlJ10uaW5jbHVkZXMobmV3RXRhdCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXRhdEF2YW5jZW1lbnQgPSBuZXdFdGF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIsOJdGF0IGQnYXZhbmNlbWVudCBpbnZhbGlkZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvZGUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNCk7IC8vIEfDqW7DqXJlciB1bmUgY2hhw65uZSBhbMOpYXRvaXJlIGRlIGxvbmd1ZXVyIDdcbiAgICAgICAgcmV0dXJuIFwiQ09cIiArIHJhbmRvbUNvZGU7ICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uQWVyaWVubmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZywpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwiYWVyaWVubmVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIEHDqXJpZW5uZSAoQ29kZTogJHt0aGlzLmNvZGVVbmlxdWV9KSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9LCBQb2lkcyBkZSBsYSBjYXJnYWlzb246ICR7dGhpcy5wb2lkc2NhcmdvfSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubm9tcmVwcm9kdWl0fSwgRGF0ZSBkZSBkw6lidXQ6ICR7dGhpcy5kYXRlZGVidXR9LCBEYXRlIGRlIGZpbjogJHt0aGlzLmRhdGVmaW59LCBTdGF0dXQ6ICR7dGhpcy5zdGF0dXN9ICwgw4l0YXQgZCdhdmFuY2VtZW50OiAke3RoaXMuZXRhdEF2YW5jZW1lbnR9YDtcbiAgICB9XG59XG5cbmNsYXNzIENhcmdhaXNvbk1hcml0aW1lIGV4dGVuZHMgQ2FyZ2Fpc29uIHtcbiAgICBjb25zdHJ1Y3RvcihkaXN0YW5jZTogbnVtYmVyLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwibWFyaXRpbWVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIE1hcml0aW1lIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uUm91dGllcmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIGRhdGVkZWJ1dDogc3RyaW5nLCBkYXRlZmluOiBzdHJpbmcsIHBvaWRzY2FyZ286IG51bWJlciwgbm9tcmVwcm9kdWl0OiBudW1iZXIsbGlldV9kZXBhcnQ6IHN0cmluZywgbGlldV9hcnJpdmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihkaXN0YW5jZSwgXCJyb3V0aWVyZVwiLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1X2RlcGFydCxsaWV1X2Fycml2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBDYXJnYWlzb24gUm91dGnDqHJlIChDb2RlOiAke3RoaXMuY29kZVVuaXF1ZX0pIC0gRGlzdGFuY2U6ICR7dGhpcy5kaXN0YW5jZX0ga20sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5iUHJvZHVpdHMoKX0sIFBvaWRzIGRlIGxhIGNhcmdhaXNvbjogJHt0aGlzLnBvaWRzY2FyZ299LCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5ub21yZXByb2R1aXR9LCBEYXRlIGRlIGTDqWJ1dDogJHt0aGlzLmRhdGVkZWJ1dH0sIERhdGUgZGUgZmluOiAke3RoaXMuZGF0ZWZpbn0sIFN0YXR1dDogJHt0aGlzLnN0YXR1c30gLCDDiXRhdCBkJ2F2YW5jZW1lbnQ6ICR7dGhpcy5ldGF0QXZhbmNlbWVudH1gO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IENhcmdhaXNvbiwgQ2FyZ2Fpc29uQWVyaWVubmUsIENhcmdhaXNvbk1hcml0aW1lLCBDYXJnYWlzb25Sb3V0aWVyZSB9O1xuXG5cblxuIiwiYWJzdHJhY3QgY2xhc3MgUHJvZHVpdCB7XG4gICAgcHVibGljIGxpYmVsbGU6IHN0cmluZztcbiAgICBwdWJsaWMgcG9pZHM6IG51bWJlcjtcbiAgICBwdWJsaWMgbm9tQ2xpZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHByZW5vbUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgYWRyZXNzZUNsaWVudDogc3RyaW5nO1xuICAgIHB1YmxpYyBub21EZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmc7XG4gICAgcHVibGljIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWxkZXN0aW5hdGFpcmU6IHN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLCBlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICAgICAgdGhpcy5ub21DbGllbnQgPSBub21DbGllbnQ7XG4gICAgICAgIHRoaXMucHJlbm9tQ2xpZW50ID0gcHJlbm9tQ2xpZW50O1xuICAgICAgICB0aGlzLnRlbGVwaG9uZUNsaWVudCA9IHRlbGVwaG9uZUNsaWVudDtcbiAgICAgICAgdGhpcy5hZHJlc3NlQ2xpZW50ID0gYWRyZXNzZUNsaWVudDtcbiAgICAgICAgdGhpcy5ub21EZXN0aW5hdGFpcmUgPSBub21EZXN0aW5hdGFpcmU7XG4gICAgICAgIHRoaXMucHJlbm9tRGVzdGluYXRhaXJlID0gcHJlbm9tRGVzdGluYXRhaXJlO1xuICAgICAgICB0aGlzLmFkcmVzc2VEZXN0aW5hdGFpcmUgPSBhZHJlc3NlRGVzdGluYXRhaXJlO1xuICAgICAgICB0aGlzLmVtYWlsZGVzdGluYXRhaXJlID0gZW1haWxkZXN0aW5hdGFpcmU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGliZWxsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5saWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMaWJlbGxlKGxpYmVsbGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpYmVsbGUgPSBsaWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb2lkcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2lkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pZHMocG9pZHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvaWRzID0gcG9pZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluZm8oKTogc3RyaW5nO1xufVxuXG5jbGFzcyBBbGltZW50YWlyZSBleHRlbmRzIFByb2R1aXQge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nXG5cbiAgICApIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYEFsaW1lbnRhaXJlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2dgO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hpbWlxdWUgZXh0ZW5kcyBQcm9kdWl0IHtcbiAgICBwdWJsaWMgdG94aWNpdGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgdG94aWNpdGU6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGxpYmVsbGUsIHBvaWRzLCBub21DbGllbnQsIHByZW5vbUNsaWVudCwgdGVsZXBob25lQ2xpZW50LCBhZHJlc3NlQ2xpZW50LCBub21EZXN0aW5hdGFpcmUsIHByZW5vbURlc3RpbmF0YWlyZSwgYWRyZXNzZURlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgIHRoaXMudG94aWNpdGUgPSB0b3hpY2l0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG94aWNpdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG94aWNpdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFRveGljaXRlKHRveGljaXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3hpY2l0ZSA9IHRveGljaXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2hpbWlxdWUgLSBMaWJlbGzDqTogJHt0aGlzLmdldExpYmVsbGUoKX0sIFBvaWRzOiAke3RoaXMuZ2V0UG9pZHMoKX1rZywgVG94aWNpdMOpOiAke3RoaXMudG94aWNpdGV9YDtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE1hdGVyaWVsIGV4dGVuZHMgUHJvZHVpdCB7XG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW5mbygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIEZyYWdpbGUgZXh0ZW5kcyBNYXRlcmllbCB7XG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyLCBub21DbGllbnQ6IHN0cmluZywgcHJlbm9tQ2xpZW50OiBzdHJpbmcsIHRlbGVwaG9uZUNsaWVudDogc3RyaW5nLCBhZHJlc3NlQ2xpZW50OiBzdHJpbmcsIG5vbURlc3RpbmF0YWlyZTogc3RyaW5nLCBwcmVub21EZXN0aW5hdGFpcmU6IHN0cmluZywgYWRyZXNzZURlc3RpbmF0YWlyZTogc3RyaW5nLGVtYWlsZGVzdGluYXRhaXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMsIG5vbUNsaWVudCwgcHJlbm9tQ2xpZW50LCB0ZWxlcGhvbmVDbGllbnQsIGFkcmVzc2VDbGllbnQsIG5vbURlc3RpbmF0YWlyZSwgcHJlbm9tRGVzdGluYXRhaXJlLCBhZHJlc3NlRGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYEZyYWdpbGUgLSBMaWJlbGzDqTogJHt0aGlzLmdldExpYmVsbGUoKX0sIFBvaWRzOiAke3RoaXMuZ2V0UG9pZHMoKX1rZ2A7XG4gICAgfVxufVxuXG5jbGFzcyBJbmNhc3NhYmxlIGV4dGVuZHMgTWF0ZXJpZWwge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlciwgbm9tQ2xpZW50OiBzdHJpbmcsIHByZW5vbUNsaWVudDogc3RyaW5nLCB0ZWxlcGhvbmVDbGllbnQ6IHN0cmluZywgYWRyZXNzZUNsaWVudDogc3RyaW5nLCBub21EZXN0aW5hdGFpcmU6IHN0cmluZywgcHJlbm9tRGVzdGluYXRhaXJlOiBzdHJpbmcsIGFkcmVzc2VEZXN0aW5hdGFpcmU6IHN0cmluZyxlbWFpbGRlc3RpbmF0YWlyZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGxpYmVsbGUsIHBvaWRzLCBub21DbGllbnQsIHByZW5vbUNsaWVudCwgdGVsZXBob25lQ2xpZW50LCBhZHJlc3NlQ2xpZW50LCBub21EZXN0aW5hdGFpcmUsIHByZW5vbURlc3RpbmF0YWlyZSwgYWRyZXNzZURlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBJbmNhc3NhYmxlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2dgO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJvZHVpdCwgQWxpbWVudGFpcmUsIENoaW1pcXVlLCBGcmFnaWxlLCBJbmNhc3NhYmxlIH07XG4iLCJpbXBvcnQgeyBQcm9kdWl0LCBBbGltZW50YWlyZSwgQ2hpbWlxdWUsIEZyYWdpbGUsIEluY2Fzc2FibGUgfSBmcm9tICcuL01vZGVsL1Byb2R1aXQnO1xuaW1wb3J0IHsgQ2FyZ2Fpc29uLCBDYXJnYWlzb25BZXJpZW5uZSwgQ2FyZ2Fpc29uTWFyaXRpbWUsIENhcmdhaXNvblJvdXRpZXJlIH0gZnJvbSAnLi9Nb2RlbC9DYXJnYWlzb24nO1xuXG5sZXQgY2FyZ2Fpc29uczogQ2FyZ2Fpc29uW10gPSBbXTtcbmxldCBmaWx0ZXJlZENhcmdhaXNvbnM6IENhcmdhaXNvbltdID0gW107XG5sZXQgcHJvZHVpdHM6IFByb2R1aXRbXSA9IFtdO1xuXG4vKiBmdW5jdGlvbiBham91dGVyUHJvZHVpdExvY2FsZW1lbnQocHJvZHVpdDogUHJvZHVpdCkge1xuICAgIHByb2R1aXRzQWpvdXRlcy5wdXNoKHByb2R1aXQpO1xufVxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93RGV0YWlscyh0eXBlOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlR5cGUgcmVjaGVyY2jDqTpcIiwgdHlwZSk7XG4gICAgY29uc29sZS5sb2coXCJEaXN0YW5jZSByZWNoZXJjaMOpZTpcIiwgZGlzdGFuY2UpO1xuXG4gICAgY29uc3QgY2FyZ2Fpc29uID0gY2FyZ2Fpc29ucy5maW5kKGMgPT4gYy50eXBlID09PSB0eXBlICYmIGMuZGlzdGFuY2UgPT09IGRpc3RhbmNlKTtcbiAgICBjb25zb2xlLmxvZyhcIkNhcmdhaXNvbiB0cm91dsOpZTpcIiwgY2FyZ2Fpc29uKTtcblxuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgZG9ubsOpZXMgZGVzIHByb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1aXRzID0gZGF0YS5wcm9kdWl0czsgLy8gUsOpY3Vww6lyZXIgbGVzIHByb2R1aXRzIGFzc29jacOpcyDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGRvbm7DqWVzIGRlcyBwcm9kdWl0czonLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGV0YWlscyA9IGBcbiAgICAgICAgICAgIDxwPlR5cGU6ICR7Y2FyZ2Fpc29uLnR5cGV9PC9wPlxuICAgICAgICAgICAgPHA+RGlzdGFuY2U6ICR7Y2FyZ2Fpc29uLmRpc3RhbmNlfSBrbTwvcD5cbiAgICAgICAgICAgIDxwPkxpZXUgZGUgZMOpcGFydDogJHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC9wPlxuICAgICAgICAgICAgPHA+TGlldSBkJ2Fycml2w6llOiAke2NhcmdhaXNvbi5saWV1X2Fycml2ZX08L3A+XG4gICAgICAgICAgICA8cD5EYXRlIGRlIGTDqWJ1dDogJHtjYXJnYWlzb24uZGF0ZWRlYnV0fTwvcD5cbiAgICAgICAgICAgIDxwPkRhdGUgZGUgZmluOiAke2NhcmdhaXNvbi5kYXRlZmlufTwvcD5cbiAgICAgICAgICAgIDxwPlByb2R1aXRzOjwvcD5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT1cIndpZHRoOiA1MHZ3O1wiPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZSBkZSBwcm9kdWl0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkxpYmVsbMOpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvaWRzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIEFmZmljaGVyIGxlcyBkw6l0YWlscyBkZXMgcHJvZHVpdHMgYXNzb2Npw6lzIMOgIGxhIGNhcmdhaXNvblxuICAgICAgICBjYXJnYWlzb24ucHJvZHVpdHMuZm9yRWFjaChwcm9kdWl0ID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gYFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPiR7cHJvZHVpdC5jb25zdHJ1Y3Rvci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Byb2R1aXQubGliZWxsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHtwcm9kdWl0LnBvaWRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJnYWlzb24ucHJvZHVpdHMpO1xuICAgICAgICBcblxuICAgICAgICBkZXRhaWxzICs9IGA8L3RhYmxlPmA7XG4gICAgICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGRldGFpbHNDb250YWluZXIpIHtcbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gZGV0YWlscztcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJnYWlzb24gbm9uIHRyb3V2w6llLlwiKTtcbiAgICB9XG59XG5cbih3aW5kb3cgYXMgYW55KS5zaG93RGV0YWlscyA9IHNob3dEZXRhaWxzO1xuXG5cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7IC8vIEZlcm1lciBsZSBtb2RhbFxuICAgIH1cbn1cblxuXG5sZXQgY29kZTphbnlcbmZ1bmN0aW9uIGFkZFByb2R1Y3QobnVtZXJvOmFueSkge1xuICBcbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdham91dGVyLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoZGV0YWlsc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWpvdXRlci1wcm9kdWN0JykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTsgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2cobnVtZXJvKTtcblxuICAgICAgIGNvZGU9bnVtZXJvXG4gICAgICAgXG4gICAgfVxuXG5cblxuICAgXG5cblxuZnVuY3Rpb24gY2xvc2VNb2RhbHMoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1tb2RhbCcpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgICBtb2RhbC5jbG9zZSgpOyAvLyBGZXJtZXIgbGUgbW9kYWxcbiAgICB9XG59XG4od2luZG93IGFzIGFueSkuYWRkUHJvZHVjdCA9IGFkZFByb2R1Y3Q7XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHR5cGVJbnB1dCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1jYXJnYWlzb24nKTtcbiAgICBjb25zdCBuYnJwcm9kdWl0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05wcm9kdWl0Jyk7XG4gICAgY29uc3QgbmJycHJvZHVpdEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05wcm9kdWl0LWVycm9yJyk7XG4gICAgY29uc3QgZGF0ZWRlYnV0SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1kZWJ1dCcpO1xuICAgIGNvbnN0IGRhdGVmaW5JbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZpbicpO1xuICAgIGNvbnN0IGRhdGVkZWJ1dEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVkZWJ1dC1lcnJvcicpO1xuICAgIGNvbnN0IGRhdGVmaW5FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlZmluLWVycm9yJyk7XG5cbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAodHlwZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkYXRlZGVidXRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRhdGVmaW5FcnJvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGRhdGVkZWJ1dElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRhdGVkZWJ1dEVycm9yLnRleHRDb250ZW50ID0gXCJWZXVpbGxleiByZW1wbGlyIGNlIGNoYW1wLlwiO1xuICAgICAgICBkYXRlZGVidXRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZWZpbklucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRhdGVmaW5FcnJvci50ZXh0Q29udGVudCA9IFwiVmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIjtcbiAgICAgICAgZGF0ZWZpbkVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVEZWJ1dCA9IG5ldyBEYXRlKGRhdGVkZWJ1dElucHV0LnZhbHVlKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGRhdGVEZWJ1dCA8PSB0b2RheSkge1xuICAgICAgICBkYXRlZGVidXRFcnJvci50ZXh0Q29udGVudCA9IFwiTGEgZGF0ZSBkZSBkw6lidXQgZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCBsYSBkYXRlIGQnYXVqb3VyZCdodWkuXCI7XG4gICAgICAgIGRhdGVkZWJ1dEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVGaW4gPSBuZXcgRGF0ZShkYXRlZmluSW5wdXQudmFsdWUpO1xuICAgIGlmIChkYXRlRmluIDw9IGRhdGVEZWJ1dCkge1xuICAgICAgICBkYXRlZmluRXJyb3IudGV4dENvbnRlbnQgPSBcIkxhIGRhdGUgZGUgZmluIGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgbGEgZGF0ZSBkZSBkw6lidXQuXCI7XG4gICAgICAgIGRhdGVmaW5FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbn1cblxuY29uc3QgcHJldlBhZ2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldlBhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IG5leHRQYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBjdXJyZW50UGFnZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFBhZ2UnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5cbmxldCBjdXJyZW50UGFnZSA9IDE7XG5jb25zdCBpdGVtc1BlclBhZ2UgPSA0O1xuXG5wcmV2UGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlLS07XG4gICAgICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhmaWx0ZXJlZENhcmdhaXNvbnMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQ2FyZ2Fpc29ucyA6IGNhcmdhaXNvbnMpO1xuICAgIH1cbn0pO1xuXG5uZXh0UGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gY2FyZ2Fpc29ucy5sZW5ndGg7XG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIGl0ZW1zUGVyUGFnZSk7XG4gICAgaWYgKGN1cnJlbnRQYWdlIDwgbGFzdFBhZ2UpIHtcbiAgICAgICAgY3VycmVudFBhZ2UrKztcbiAgICAgICAgYWZmaWNoZXJDYXJnYWlzb25zKGZpbHRlcmVkQ2FyZ2Fpc29ucy5sZW5ndGggPiAwID8gZmlsdGVyZWRDYXJnYWlzb25zIDogY2FyZ2Fpc29ucyk7XG4gICAgfVxufSk7XG5cblxuLy9mb25jdGlvbiBmZXJtZXIgb3V2ZXJ0IGNhcmdhaXNvblxuYXN5bmMgZnVuY3Rpb24gdG9nZ2xlU3RhdHVzKGNvZGVVbmlxdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhcmdhaXNvbiA9IGNhcmdhaXNvbnMuZmluZChjID0+IGMuY29kZVVuaXF1ZSA9PT0gY29kZVVuaXF1ZSk7XG4gICAgaWYgKGNhcmdhaXNvbikge1xuICAgICAgICBjb25zdCBuZXdTdGF0dXMgPSBjYXJnYWlzb24uc3RhdHVzID09PSAnZmVybWVyJyA/ICdvdXZyaXInIDogJ2Zlcm1lcic7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IGNvZGVVbmlxdWUsIHN0YXR1czogbmV3U3RhdHVzIH0pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmdhaXNvbi5zdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b2dnbGUtJHtjb2RlVW5pcXVlfWApLnRleHRDb250ZW50ID0gbmV3U3RhdHVzOyAvLyBNaXNlIMOgIGpvdXIgZHUgc3RhdHV0IGRhbnMgbGEgdGFibGUgSFRNTFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ciBkdSBzdGF0dXQ6JywgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbih3aW5kb3cgYXMgYW55KS50b2dnbGVTdGF0dXMgPSB0b2dnbGVTdGF0dXM7XG5cblxuLy9mb25jdGlvbiBwb3VyIHBvdXIgbFwiZXRhdCBkJ2F2YW5jZW1lbnRcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3RhdHVzKGNvZGVVbmlxdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3RhdHVzLXNlbGVjdC0ke2NvZGVVbmlxdWV9YCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgY29uc3QgbmV3RXRhdCA9IHNlbGVjdEVsZW1lbnQudmFsdWU7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGVVbmlxdWUsIGV0YXRBdmFuY2VtZW50OiBuZXdFdGF0IH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5ldGF0QXZhbmNlbWVudCA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBNaXNlIMOgIGpvdXIgbG9jYWxlIGRlIGwnYWZmaWNoYWdlIHNpIG7DqWNlc3NhaXJlXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvZ2dsZS0ke2NvZGVVbmlxdWV9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBuZXdFdGF0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIGR1IHN0YXR1dDonLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSByZXF1w6p0ZTonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaTonLCBlcnJvcik7XG4gICAgfVxufVxuKHdpbmRvdyBhcyBhbnkpLnVwZGF0ZVN0YXR1cyA9IHVwZGF0ZVN0YXR1cztcblxuXG5cbmZ1bmN0aW9uIGFmZmljaGVyQ2FyZ2Fpc29ucyhkYXRhOiBDYXJnYWlzb25bXSk6IHZvaWQge1xuICAgIGZldGNoKCdodHRwOi8vd3d3LnJhbWEuc2Vjazo5MDAwL3Byb2pldGNhcmdhaXNvbi9zYXZlLnBocCcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciByw6lzZWF1Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5jYXJnYWlzb25zKSB7IFxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rvbm7DqWVzIG1hbCBzdHJ1Y3R1csOpZXMnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXJnYWlzb25zID0gZGF0YS5jYXJnYWlzb25zO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZ2Fpc29uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0Ym9keWNhcmdhaXNvbicpO1xuICAgICAgICAgICAgICAgIGlmICghY2FyZ2Fpc29uTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IGF2ZWMgSUQgXCJ0Ym9keWNhcmdhaXNvblwiIG5vbiB0cm91dsOpJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29uTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmIChjYXJnYWlzb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ0F1Y3VuZSBjYXJnYWlzb24gbmUgY29ycmVzcG9uZCBhdXggY3JpdMOocmVzIGRlIGZpbHRyYWdlLic7XG4gICAgICAgICAgICAgICAgICAgIGNhcmdhaXNvbkxpc3QuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBpdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgaXRlbXNQZXJQYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRlZENhcmdhaXNvbnMgPSAoZmlsdGVyZWRDYXJnYWlzb25zLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZENhcmdhaXNvbnMgOiBjYXJnYWlzb25zKS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgICAgICAgICAgICAgICBwYWdpbmF0ZWRDYXJnYWlzb25zLmZvckVhY2goY2FyZ2Fpc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICAgICAgcm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5jb2RlVW5pcXVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24udHlwZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLmRpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24uZGF0ZWRlYnV0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24uZGF0ZWZpbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLmxpZXVfZGVwYXJ0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24ubGlldV9hcnJpdmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXMtc2VsZWN0LSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCIgb25jaGFuZ2U9XCJ1cGRhdGVTdGF0dXMoJyR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9JylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gYXR0ZW50ZVwiPkVuIGF0dGVudGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW4gY291cnNcIj5FbiBjb3Vyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcnJpdsOpXCI+QXJyaXZlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwic3RhdHVzLSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlLSR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9XCIgb25jbGljaz1cInRvZ2dsZVN0YXR1cygnJHtjYXJnYWlzb24uY29kZVVuaXF1ZX0nKVwiPiR7Y2FyZ2Fpc29uLnN0YXR1c308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImRpc3BsYXk6ZmxleCAhaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBzdHlsZT1cImJvcmRlcjpub25lXCIgY2xhc3M9XCJ0ZXh0LWJsdWUtNDAwIHRleHQteGwgcHItMyBmb250LWJvbGQgcm91bmRlZFwiIG9uY2xpY2s9XCJzaG93RGV0YWlscygnJHtjYXJnYWlzb24udHlwZX0nLCAke2NhcmdhaXNvbi5kaXN0YW5jZX0pXCI+RMOpdGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJib3JkZXI6bm9uZVwiIGNsYXNzPVwicHJvZHVjdHMgdGV4dC1ibHVlLTQwMCB0ZXh0LXhsIHByLTMgZm9udC1ib2xkIHJvdW5kZWRcIiBvbmNsaWNrPVwiYWRkUHJvZHVjdCgnJHtjYXJnYWlzb24uY29kZVVuaXF1ZX0nKVwiID5Bam91dGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGNhcmdhaXNvbkxpc3QuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gY2FyZ2Fpc29ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIGl0ZW1zUGVyUGFnZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZUJ1dHRvbi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSAxO1xuICAgICAgICAgICAgICAgIG5leHRQYWdlQnV0dG9uLmRpc2FibGVkID0gY3VycmVudFBhZ2UgPT09IGxhc3RQYWdlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBwYXJzaW5nIEpTT046JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSYXcgcmVzcG9uc2UgdGV4dDonLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgZmV0Y2g6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgIC8qICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0cycpLmZvckVhY2gocHJvZHVpdCA9PntcbiAgICAgICAgICAgIHByb2R1aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0PWV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBudW1lcm89IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtZXJvJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhudW1lcm8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIH0pICovXG5cblxufVxuXG5cblxuZnVuY3Rpb24gZmlsdGVyQ2FyZ2Fpc29ucygpIHtcbiAgICBjb25zdCBjb2RlSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGRhdGVkZWJ1dElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWRlYnV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkYXRlZmluSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZmluJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsaWV1RGVwYXJ0SW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZXUtZGVwYXJ0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBsaWV1QXJyaXZlSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZXUtYXJyaXZlJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0IGNvZGVJbnB1dCA9IGNvZGVJbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8ICcnO1xuICAgIGNvbnN0IGRhdGVkZWJ1dElucHV0ID0gZGF0ZWRlYnV0SW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkgfHwgJyc7XG4gICAgY29uc3QgZGF0ZWZpbklucHV0ID0gZGF0ZWZpbklucHV0RWxlbWVudD8udmFsdWUudHJpbSgpIHx8ICcnO1xuICAgIGNvbnN0IGxpZXVEZXBhcnRJbnB1dCA9IGxpZXVEZXBhcnRJbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8ICcnO1xuICAgIGNvbnN0IGxpZXVBcnJpdmVJbnB1dCA9IGxpZXVBcnJpdmVJbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8ICcnO1xuXG5cbiAgICBmaWx0ZXJlZENhcmdhaXNvbnMgPSBjYXJnYWlzb25zLmZpbHRlcihjYXJnYWlzb24gPT4ge1xuICAgICAgICBjb25zdCBtYXRjaENvZGUgPSBjb2RlSW5wdXQgPyBjYXJnYWlzb24uY29kZVVuaXF1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvZGVJbnB1dCkgOiB0cnVlO1xuICAgICAgICBjb25zdCBtYXRjaERhdGVEZWJ1dCA9IGRhdGVkZWJ1dElucHV0ID8gY2FyZ2Fpc29uLmRhdGVkZWJ1dCA9PT0gZGF0ZWRlYnV0SW5wdXQgOiB0cnVlO1xuICAgICAgICBjb25zdCBtYXRjaERhdGVGaW4gPSBkYXRlZmluSW5wdXQgPyBjYXJnYWlzb24uZGF0ZWZpbiA9PT0gZGF0ZWZpbklucHV0IDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hMaWV1RGVwYXJ0ID0gbGlldURlcGFydElucHV0ID8gY2FyZ2Fpc29uLmxpZXVfZGVwYXJ0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobGlldURlcGFydElucHV0KSA6IHRydWU7XG4gICAgICAgIGNvbnN0IG1hdGNoTGlldUFycml2ZSA9IGxpZXVBcnJpdmVJbnB1dCA/IGNhcmdhaXNvbi5saWV1X2Fycml2ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxpZXVBcnJpdmVJbnB1dCkgOiB0cnVlO1xuICAgICAgICByZXR1cm4gbWF0Y2hDb2RlICYmIG1hdGNoRGF0ZURlYnV0ICYmIG1hdGNoRGF0ZUZpbiAmJiBtYXRjaExpZXVEZXBhcnQgJiZcbiAgICAgICAgbWF0Y2hMaWV1QXJyaXZlO1xuICAgIH0pO1xuXG4gICAgY3VycmVudFBhZ2UgPSAxO1xuICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhmaWx0ZXJlZENhcmdhaXNvbnMpO1xufVxuXG5jb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuaWYgKGZpbHRlckJ1dHRvbikge1xuICAgIGZpbHRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmaWx0ZXJDYXJnYWlzb25zKCk7XG4gICAgfSk7XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBhZmZpY2hlckNhcmdhaXNvbnMoY2FyZ2Fpc29ucyk7XG59KTtcblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKG1lc3NhZ2U6c3RyaW5nLCB0eXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgLy8gQWRkIENTUyBmb3Igbm90aWZpY2F0aW9uc1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24gLmNsb3NlLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ2Fpc29uRm9ybScpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uLWNvbnRhaW5lcicpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbicpO1xuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y0NDMzNic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY5ODAwJztcbiAgICB9XG5cbiAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCI+JnRpbWVzOzwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcblxuICAgIG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XG4gICAgfSwgMzAwMCk7XG5cblxuXG59XG5cbmFmZmljaGVyQ2FyZ2Fpc29ucyhjYXJnYWlzb25zKTtcblxuXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ2Fpc29uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGVudm9pZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtY2FyZ2Fpc29uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5lbnZvaWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzdGFuY2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB0eXBlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1jYXJnYWlzb24nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgY29uc3QgcG9pZHNjYXJnYWlzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBub21icmVwcm9kdWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05wcm9kdWl0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZGF0ZWRlYnV0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1kZWJ1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRhdGVmaW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpZXVkZXBhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1X2RlcGFydCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpZXVhcnJpdmVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9hcnJpdmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHBhcnNlSW50KGRpc3RhbmNlSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlZGVidXQgPSBkYXRlZGVidXRJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZWZpbiA9IGRhdGVmaW5JbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcG9pZHNjYXJnbyA9IHBhcnNlRmxvYXQocG9pZHNjYXJnYWlzb24udmFsdWUpO1xuICAgICAgICBjb25zdCBub21yZXByb2R1aXQgPSBwYXJzZUludChub21icmVwcm9kdWl0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgbGlldWRlcGFydD1saWV1ZGVwYXJ0SW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGxpZXVhcnJpdmU9bGlldWFycml2ZXJJbnB1dC52YWx1ZVxuXG4gICAgICAgIGxldCBjYXJnYWlzb246IENhcmdhaXNvbiB8IG51bGwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Flcmllbm5lJzpcbiAgICAgICAgICAgICAgICBjYXJnYWlzb24gPSBuZXcgQ2FyZ2Fpc29uQWVyaWVubmUoZGlzdGFuY2UsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVkZXBhcnQsbGlldWFycml2ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXJpdGltZSc6XG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29uID0gbmV3IENhcmdhaXNvbk1hcml0aW1lKGRpc3RhbmNlLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1ZGVwYXJ0LGxpZXVkZXBhcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncm91dGllcmUnOlxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbiA9IG5ldyBDYXJnYWlzb25Sb3V0aWVyZShkaXN0YW5jZSwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldWFycml2ZSxsaWV1ZGVwYXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FyZ2Fpc29uKSB7XG4gICAgICAgICAgICBjYXJnYWlzb25zLnB1c2goY2FyZ2Fpc29uKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZ2Fpc29uRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjb2RlVW5pcXVlOmNhcmdhaXNvbi5jb2RlVW5pcXVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGNhcmdhaXNvbi50eXBlLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBjYXJnYWlzb24uZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgcHJvZHVpdHM6IGNhcmdhaXNvbi5wcm9kdWl0cyxcbiAgICAgICAgICAgICAgICBkYXRlZGVidXQ6IGNhcmdhaXNvbi5kYXRlZGVidXQsXG4gICAgICAgICAgICAgICAgZGF0ZWZpbjogY2FyZ2Fpc29uLmRhdGVmaW4sXG4gICAgICAgICAgICAgICAgcG9pZHNjYXJnbzpjYXJnYWlzb24ucG9pZHNjYXJnbyxcbiAgICAgICAgICAgICAgICBub21yZXByb2R1aXQ6Y2FyZ2Fpc29uLm5vbXJlcHJvZHVpdCxcbiAgICAgICAgICAgICAgICBsaWV1X2RlcGFydDpjYXJnYWlzb24ubGlldV9kZXBhcnQsXG4gICAgICAgICAgICAgICAgbGlldV9hcnJpdmU6Y2FyZ2Fpc29uLmxpZXVfYXJyaXZlLFxuICAgICAgICAgICAgICAgIHN0YXR1czpjYXJnYWlzb24uc3RhdHVzLFxuICAgICAgICAgICAgICAgIGV0YXRBdmFuY2VtZW50OmNhcmdhaXNvbi5ldGF0QXZhbmNlbWVudFxuXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoY2FyZ2Fpc29uRGF0YSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRjYXJnYWlzb24vc2F2ZS5waHAnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjw6hzOicsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhjYXJnYWlzb25zKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHJlcXXDqnRlOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2Vudm9pOicsIGVycm9yKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlTm90aWZpY2F0aW9uKCdjYXJnYWlzb24gYWpvdXTDqScsICdlcnJvcicpO1xuXG5cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vL3BhZ2luYXRpb25cblxuXG5cbi8vb3B0aW9uIGRcImFmZmljaGFnZSBwb2lkcyBvdSBuYiBkZSBwcm9xdWl0IGRhbnMgbGUgdGFibGVhdVxuY29uc3QgbmJycHJvZHVjdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmInKTtcbmNvbnN0IHBvaWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkJyk7IFxuICAgIFxuLyogICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1tb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBcbiAgICAgICAgaWYgKG1vZGFsICYmIGNsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSAqL1xuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgIC8vdmFsaWRlciBmb3JtIHByb2R1aXRcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtcygpOiBib29sZWFuIHtcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc1RvVmFsaWRhdGUgPSBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2xpYmVsbGUtcHJvZHVpdCcsIG1lc3NhZ2U6ICdMZSBsaWJlbGzDqSBkdSBwcm9kdWl0IGVzdCByZXF1aXMuJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICd0eXBlLXByb2R1aXQnLCBtZXNzYWdlOiAnTGUgdHlwZSBkZSBwcm9kdWl0IGVzdCByZXF1aXMuJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdwb2lkcy1wcm9kdWl0JywgbWVzc2FnZTogJ0xlIHBvaWRzIGR1IHByb2R1aXQgZG9pdCDDqnRyZSB1biBub21icmUgcG9zaXRpZi4nIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ25vbScsIG1lc3NhZ2U6ICdMZSBub20gZHUgY2xpZW50IGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMTAgY2FyYWN0w6hyZXMuJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdwcmVub20nLCBtZXNzYWdlOiAnTGUgcHLDqW5vbSBkdSBjbGllbnQgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy4nIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3RlbGVwaG9uZScsIG1lc3NhZ2U6ICdMZSBudW3DqXJvIGRlIHTDqWzDqXBob25lIGRvaXQgY29tcG9ydGVyIDkgY2hpZmZyZXMuJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdhZHJlc3NlJywgbWVzc2FnZTogJ0xcXCdhZHJlc3NlIGRvaXQgY29udGVuaXIgYXUgbW9pbnMgMTAgY2FyYWN0w6hyZXMuJyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdub21kJywgbWVzc2FnZTogJ0xlIG5vbSBkdSBkZXN0aW5hdGFpcmUgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy4nIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3ByZW5vbWQnLCBtZXNzYWdlOiAnTGUgcHLDqW5vbSBkdSBkZXN0aW5hdGFpcmUgZG9pdCBjb250ZW5pciBhdSBtb2lucyAxMCBjYXJhY3TDqHJlcy4nIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2FkcmVzc2VkJywgbWVzc2FnZTogJ0xcXCdhZHJlc3NlIGR1IGRlc3RpbmF0YWlyZSBkb2l0IGNvbnRlbmlyIGF1IG1vaW5zIDEwIGNhcmFjdMOocmVzLicgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICAgICAgZmllbGRzVG9WYWxpZGF0ZS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZC5pZCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgKGZpZWxkLmlkID09PSAncG9pZHMtcHJvZHVpdCcgJiYgKGlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSB8fCBwYXJzZUZsb2F0KHZhbHVlKSA8PSAwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZmllbGQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBlbWFpbERlc3RpbmF0YWlyZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAoZW1haWxEZXN0aW5hdGFpcmUubGVuZ3RoID4gMCAmJiAhaXNWYWxpZEVtYWlsKGVtYWlsRGVzdGluYXRhaXJlKSkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdMXFwnZW1haWwgZHUgZGVzdGluYXRhaXJlIGVzdCBpbnZhbGlkZS4nKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItY29udGFpbmVyJyk7XG4gICAgICAgICAgICBlcnJvckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgICAgICAgcmV0dXJuIGVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcblxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbnByb2R1aXQobWVzc2FnZTogc3RyaW5nLCB0eXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAvLyBBam91dGVyIGR1IENTUyBwb3VyIGxlcyBub3RpZmljYXRpb25zXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y0NDMzNic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmOTgwMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAvL2Zvcm11bGFpcmUgY2FyZ2Fpc29uXG4gY29uc3QgcHJvZHVjdGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVudm95ZXInKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuIHByb2R1Y3Rmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgICBoYW5kbGVQcm9kdWN0Rm9ybVN1Ym1pdChldmVudCk7XG5cbiAgICAgICAgXG4gICAgXG5cblxuICAgICBcbiAgIFxuIH0pO1xuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RGb3JtU3VibWl0KGV2ZW50OiBFdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgdmFsZXVycyBkZXMgY2hhbXBzIGR1IGZvcm11bGFpcmVcbiAgICBjb25zdCBsaWJlbGxlUHJvZHVpdCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGliZWxsZS1wcm9kdWl0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgdHlwZVByb2R1aXQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtcHJvZHVpdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBwb2lkc1Byb2R1aXQgPSBwYXJzZUZsb2F0KChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMtcHJvZHVpdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICBjb25zdCB0b3hpY2l0ZSA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG94aWNpdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8udmFsdWVBc051bWJlciB8fCAwO1xuICAgIGNvbnN0IG5vbWNsaWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgcHJlbm9tY2xpZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbGVwaG9uZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGFkcmVzc2UgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkcmVzc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBub21kZXN0aW5hdGFpcmUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBjb25zdCBwcmVub21kZXN0aW5hdGFpcmU9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbm9tZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGFkZHJlc3NlZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsZGVzdGluYXRhaXJlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuXG5cbiAgICAvLyBDcsOpYXRpb24gZGUgbCdvYmpldCBwcm9kdWl0IGVuIGZvbmN0aW9uIGR1IHR5cGUgc8OpbGVjdGlvbm7DqVxuICAgIGxldCBwcm9kdWl0OiBQcm9kdWl0O1xuXG4gICAgc3dpdGNoICh0eXBlUHJvZHVpdCkge1xuICAgICAgICBjYXNlICdBbGltZW50YWlyZSc6XG4gICAgICAgICAgICBwcm9kdWl0ID0gbmV3IEFsaW1lbnRhaXJlKGxpYmVsbGVQcm9kdWl0LCBwb2lkc1Byb2R1aXQsIG5vbWNsaWVudCwgcHJlbm9tY2xpZW50LCB0ZWxlcGhvbmUsIGFkcmVzc2UsIG5vbWRlc3RpbmF0YWlyZSwgcHJlbm9tZGVzdGluYXRhaXJlLCBhZGRyZXNzZWRlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ2hpbWlxdWUnOlxuICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBDaGltaXF1ZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCB0b3hpY2l0ZSwgbm9tY2xpZW50LCBwcmVub21jbGllbnQsIHRlbGVwaG9uZSwgYWRyZXNzZSwgbm9tZGVzdGluYXRhaXJlLCBwcmVub21kZXN0aW5hdGFpcmUsIGFkZHJlc3NlZGVzdGluYXRhaXJlLGVtYWlsZGVzdGluYXRhaXJlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdGcmFnaWxlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgRnJhZ2lsZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0LCBub21jbGllbnQsIHByZW5vbWNsaWVudCwgdGVsZXBob25lLCBhZHJlc3NlLCBub21kZXN0aW5hdGFpcmUsIHByZW5vbWRlc3RpbmF0YWlyZSwgYWRkcmVzc2VkZXN0aW5hdGFpcmUsZW1haWxkZXN0aW5hdGFpcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0luY2Fzc2FibGUnOlxuICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBJbmNhc3NhYmxlKGxpYmVsbGVQcm9kdWl0LCBwb2lkc1Byb2R1aXQsIG5vbWNsaWVudCwgcHJlbm9tY2xpZW50LCB0ZWxlcGhvbmUsIGFkcmVzc2UsIG5vbWRlc3RpbmF0YWlyZSwgcHJlbm9tZGVzdGluYXRhaXJlLCBhZGRyZXNzZWRlc3RpbmF0YWlyZSxlbWFpbGRlc3RpbmF0YWlyZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1R5cGUgZGUgcHJvZHVpdCBub24gcmVjb25udScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFByw6lwYXJhdGlvbiBkZXMgZG9ubsOpZXMgw6AgZW52b3llciBhdSBzZXJ2ZXVyXG4gICAgY29uc3QgcHJvZHVpdERhdGEgPSB7XG4gICAgICAgIHR5cGU6IHR5cGVQcm9kdWl0LFxuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBwcm9kdWN0OiBwcm9kdWl0LFxuXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9kdWl0RGF0YSk7XG5cbiAgICB0cnkge1xuICAgICAgICBwcm9kdWl0cy5wdXNoKHByb2R1aXQpOyAvLyBBam91dGVyIGxlIHByb2R1aXQgw6AgbGEgbGlzdGUgZGVzIHByb2R1aXRzXG5cbiAgICAgICAgLy8gRW52b2kgZGVzIGRvbm7DqWVzIGF1IHNlcnZldXIgdmlhIHVuZSByZXF1w6p0ZSBQT1NUXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly93d3cucmFtYS5zZWNrOjkwMDAvcHJvamV0Y2FyZ2Fpc29uL3NhdmUucGhwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY8OoczonLCByZXN1bHQpO1xuICAgICAgICAgICAgY3JlYXRlTm90aWZpY2F0aW9ucHJvZHVpdChcInByb2R1aXQgYWpvdXTDqVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaTonLCBlcnJvcik7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qIGZ1bmN0aW9uIGFmZmljaGVyUHJvZHVpdHMoKSB7XG4gICAgLy8gQWZmaWNoZXIgbGVzIHByb2R1aXRzIGRhbnMgbGEgY29uc29sZSBwYXIgZXhlbXBsZVxuICAgIGNvbnNvbGUubG9nKFwiUHJvZHVpdHMgYWpvdXTDqXM6XCIsIHByb2R1aXRzQWpvdXRlcyk7XG59XG4gKi9cblxuXG5cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBwcm9kdWN0IGZvcm0gc3VibWlzc2lvblxuXG4vLyBBdHRhY2hlIGwnw6l2w6luZW1lbnQgZGUgc291bWlzc2lvbiBhdSBmb3JtdWxhaXJlIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBkb2N1bWVudFxuXG4gICAgICAgIGNvbnN0IGNhcmdvcGxlaW5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgICAgIGlmIChjYXJnb3BsZWluU2VsZWN0KSB7XG4gICAgICAgICAgICBjYXJnb3BsZWluU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVGFibGVDb2x1bW5zKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAvLyBJbml0aWFsIHRvZ2dsZSBiYXNlZCBvbiB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgdG9nZ2xlVGFibGVDb2x1bW5zKGNhcmdvcGxlaW5TZWxlY3QudmFsdWUpO1xuICAgICAgICB9XG5cblxuICAgIGNvbnN0IHBvaWRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKTtcbiAgICBjb25zdCBuYlByb2R1aXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25icl9wcm9kdWl0Jyk7XG5cblxucG9pZHNDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxubmJQcm9kdWl0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vY2hvaXggY2FyZ2Fpc29uIHBsZWluZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnb3BsZWluJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBvaWRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzLXByb2R1aXQnKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGNvbnN0IG5iUHJvZHVpdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJyX3Byb2R1aXQnKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAncG9pZHMnKSB7XG4gICAgICAgICAgICBpZiAocG9pZHNDb250YWluZXIpIHBvaWRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaWYgKG5iUHJvZHVpdHNDb250YWluZXIpIG5iUHJvZHVpdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnbmJwcm9kdWl0Jykge1xuICAgICAgICAgICAgaWYgKHBvaWRzQ29udGFpbmVyKSBwb2lkc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKG5iUHJvZHVpdHNDb250YWluZXIpIG5iUHJvZHVpdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gIFxuXG4gXG5cbiAgIFxuXG5cbiAgICAvLyBhZmZpY2hhZ2Ugb3B0aW9uZWVsZSBkZXMgdmFsZXVycyBwb2RzIGV0IG5icHJvZHVpdFxuXG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhYmxlQ29sdW1ucyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5iQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iJykgYXMgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBkQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkJykgYXMgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG4gICAgXG4gICAgICAgIGNvbnN0IG5iQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmItY2VsbCcpIGFzIE5vZGVMaXN0T2Y8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+O1xuICAgICAgICBjb25zdCBwZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBkLWNlbGwnKSBhcyBOb2RlTGlzdE9mPEhUTUxUYWJsZUNlbGxFbGVtZW50PjtcbiAgICBcbiAgICAgICAgaWYgKHZhbHVlID09PSAncG9pZHMnKSB7XG4gICAgICAgICAgICBuYkNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcGRDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgbmJDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgICAgIHBkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5iQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIHBkQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBuYkNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XG4gICAgICAgICAgICBwZENlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgIGNvbnN0IG1pbGxpZXUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgYWNjdWVpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjdWVpbFwiKTtcbiAgICBjb25zdCBhY2NlY2FyZ2Fpc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5jYXJnYWlzb25cIik7XG4gICAgXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICBcbiAgICBidXJnZXIuc3R5bGUubWFyZ2luTGVmdCA9IFwiLTI1MHB4XCI7XG4gICAgYnVyZ2VyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xuICAgIGJ1cmdlci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIjtcbiAgICBidXJnZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuM3MgYXNlLWluLW91dFwiO1xuICAgIFxuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjMzMHB4XCI7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IENhcmdhaXNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmdhaXNvblwiKTtcbiAgICBjb25zdCBwcm9kdWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWl0XCIpO1xuICAgIGNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0aW9uMVwiKTtcbiAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgIC8qICBDYXJnYWlzb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCI1NTBweFwiO1xuICAgIH0pO1xuICAgIFxuICAgIHByb2R1aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjQzJVwiO1xuICAgIH0pO1xuICAgICAqL1xuICAgIFxuICAgLyogIGFjY3VlaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjElXCI7XG4gICAgfSk7XG4gICAgXG4gICAgYWNjZWNhcmdhaXNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMzUwcHhcIjtcbiAgICB9KTsgKi9cbiAgICBcbiAgICBjb25zdCBpbWFnZXMgPSBbJy4uL3B1YmxpYy9pbWcvYXZpb25zLmpwZycsICcuLi9wdWJsaWMvaW1nL2JhdGVhdS5qcGcnLCAnLi4vcHVibGljL2ltZy9hdmlvbnNzLmpwZyddO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRJbWFnZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlc1tjdXJyZW50SW5kZXhdfScpYDtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAgc2V0SW50ZXJ2YWwoY2hhbmdlQmFja2dyb3VuZEltYWdlLCAyMDAwKTtcbiAgICBcbiAgICBjb25zdCBtb2RhbHNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteV9tb2RhbF81XCIpO1xuICAgIGNvbnN0IGJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICBcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsc1wiKTtcbiAgICBtb2RhbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9kYWxzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgXG4gICAgfSk7XG4gICAgY29uc3QgbW9kPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZXJtZXInKVxuICAgIG1vZC5zdHlsZS5jb2xvcj1cInJlZFwiXG4gICAgY29uc3QgZmVybWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbm51bGVyXCIpO1xuICAgIGZlcm1lci5zdHlsZS5jb2xvcj1cInJlZFwiXG4gICAgZmVybWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KTtcblxuXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpIS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAodGhpczogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgbmJwcm9kdWl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnByb2R1aXRzJyk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnbmJwcm9kdWl0Jykge1xuICAgICAgICAgICAgaWYgKG5icHJvZHVpdHMpIHtcbiAgICAgICAgICAgICAgICBuYnByb2R1aXRzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5icHJvZHVpdHMpIHtcbiAgICAgICAgICAgICAgICBuYnByb2R1aXRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAvLyBtYXBcbiAgICAvLyBSw6ljdXDDqXJhdGlvbiBkdSBmb3JtdWxhaXJlXG4gICAgIFxuICAgIC8vIETDqWZpbml0aW9uIGRlcyBjbGFzc2VzIGRlIHByb2R1aXRzXG4gICBcblxuICAgIC8vIEFqb3V0ZXogY2V0IMOpY291dGV1ciBkJ8OpdsOpbmVtZW50cyBhcHLDqHMgcXVlIGxhIHBhZ2UgYWl0IGNoYXJnw6lcbiAgXG4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9