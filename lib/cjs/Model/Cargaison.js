"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
        return "Cargaison A\u00E9rienne (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
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
        return "Cargaison Maritime (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
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
        return "Cargaison Routi\u00E8re (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
    };
    return CargaisonRoutiere;
}(Cargaison));
exports.CargaisonRoutiere = CargaisonRoutiere;
//# sourceMappingURL=Cargaison.js.map