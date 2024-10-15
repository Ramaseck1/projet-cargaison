import { Produit } from './Produit';
declare abstract class Cargaison {
    produits: Produit[];
    distance: number;
    type: string;
    datedebut: string;
    datefin: string;
    poidscargo: number;
    nomreproduit: number;
    codeUnique: string;
    lieu_depart: string;
    lieu_arrive: string;
    status: string;
    etatAvancement: string;
    constructor(distance: number, type: string, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number, lieu_depart: string, lieu_arrive: string);
    ajouterProduit(produit: Produit): void;
    nbProduits(): number;
    calculerFrais(produit: Produit): number;
    sommeTotaleC(): number;
    abstract info(): string;
    toggleStatus(): void;
    updateStatus(newEtat: string): void;
    static generateUniqueCode(): string;
}
declare class CargaisonAerienne extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number, lieu_depart: string, lieu_arrive: string);
    info(): string;
}
declare class CargaisonMaritime extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number, lieu_depart: string, lieu_arrive: string);
    info(): string;
}
declare class CargaisonRoutiere extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number, lieu_depart: string, lieu_arrive: string);
    info(): string;
}
export { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere };
