import { Produit } from './Produit';

abstract class Cargaison {
    public produits: Produit[] = [];
    public distance: number;
    public type: string;
    public datedebut: string;
    public datefin: string;
    public poidscargo: number;
    public nomreproduit: number;
    public codeUnique: string;
    public lieu_depart: string; // Ajout de la propriété lieu_depart
    public lieu_arrive: string; // Ajout de la propriété lieu_arrive
    public status: string; // Ajout de la propriété status
    public etatAvancement: string; // Ajout de la propriété etatAvancement

    constructor(distance: number, type: string, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number,lieu_depart: string, lieu_arrive: string) {
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
   
    public ajouterProduit(produit: Produit): void {
        if (this.produits.length >= 10) {
            this.produits = [];

            console.log("Cargaison pleine, impossible d'ajouter plus de produits.");
            return;
        }
        this.produits.push(produit);
        console.log(`Produit ajouté. Montant total: ${this.sommeTotaleC()}F`);
    }

    public nbProduits(): number {
        return this.produits.length;
    }

    public calculerFrais(produit: Produit): number {
        let frais: number = 0;
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
    }

    public sommeTotaleC(): number {
        return this.produits.reduce((acc, produit) => acc + this.calculerFrais(produit), 0);
    }

    public abstract info(): string;
    public toggleStatus(): void {
        this.status = this.status === 'fermer' ? 'ouvrir' : 'fermer';
    }

    public updateStatus(newEtat: string): void {
        if (['en_cours', 'en_attente', 'arrive'].includes(newEtat)) {
            this.etatAvancement = newEtat;
        } else {
            console.error("État d'avancement invalide");
        }
    }

    public static generateUniqueCode(): string {
        const randomCode = Math.random().toString(36).substr(2, 4); // Générer une chaîne aléatoire de longueur 7
        return "CO" + randomCode;    }
}

class CargaisonAerienne extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number,lieu_depart: string, lieu_arrive: string,) {
        super(distance, "aerienne", datedebut, datefin, poidscargo, nomreproduit,lieu_depart,lieu_arrive);
    }

    public info(): string {
        return `Cargaison Aérienne (Code: ${this.codeUnique}) - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}, Poids de la cargaison: ${this.poidscargo}, Nombre de produits: ${this.nomreproduit}, Date de début: ${this.datedebut}, Date de fin: ${this.datefin}, Statut: ${this.status} , État d'avancement: ${this.etatAvancement}`;
    }
}

class CargaisonMaritime extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number,lieu_depart: string, lieu_arrive: string) {
        super(distance, "maritime", datedebut, datefin, poidscargo, nomreproduit,lieu_depart,lieu_arrive);
    }

    public info(): string {
        return `Cargaison Maritime (Code: ${this.codeUnique}) - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}, Poids de la cargaison: ${this.poidscargo}, Nombre de produits: ${this.nomreproduit}, Date de début: ${this.datedebut}, Date de fin: ${this.datefin}, Statut: ${this.status} , État d'avancement: ${this.etatAvancement}`;
    }
}

class CargaisonRoutiere extends Cargaison {
    constructor(distance: number, datedebut: string, datefin: string, poidscargo: number, nomreproduit: number,lieu_depart: string, lieu_arrive: string) {
        super(distance, "routiere", datedebut, datefin, poidscargo, nomreproduit,lieu_depart,lieu_arrive);
    }

    public info(): string {
        return `Cargaison Routière (Code: ${this.codeUnique}) - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}, Poids de la cargaison: ${this.poidscargo}, Nombre de produits: ${this.nomreproduit}, Date de début: ${this.datedebut}, Date de fin: ${this.datefin}, Statut: ${this.status} , État d'avancement: ${this.etatAvancement}`;
    }
}



export { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere };



