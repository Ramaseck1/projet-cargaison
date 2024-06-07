abstract class Produit {
    public libelle: string;
    public poids: number;
    public nomClient: string;
    public prenomClient: string;
    public telephoneClient: string;
    public adresseClient: string;
    public nomDestinataire: string;
    public prenomDestinataire: string;
    public adresseDestinataire: string;
    public emaildestinataire: string;


    constructor(libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string) {
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

    public getLibelle(): string {
        return this.libelle;
    }

    public setLibelle(libelle: string): void {
        this.libelle = libelle;
    }

    public getPoids(): number {
        return this.poids;
    }

    public setPoids(poids: number): void {
        this.poids = poids;
    }

    public abstract info(): string;
}

class Alimentaire extends Produit {
    constructor(libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string,emaildestinataire: string

    ) {
        super(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire,emaildestinataire);
    }

    public info(): string {
        return `Alimentaire - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}

class Chimique extends Produit {
    public toxicite: number;

    constructor(libelle: string, poids: number, toxicite: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string,emaildestinataire: string) {
        super(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire,emaildestinataire);
        this.toxicite = toxicite;
    }

    public getToxicite(): number {
        return this.toxicite;
    }

    public setToxicite(toxicite: number): void {
        this.toxicite = toxicite;
    }

    public info(): string {
        return `Chimique - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg, Toxicité: ${this.toxicite}`;
    }
}

abstract class Materiel extends Produit {
    constructor(libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string,emaildestinataire: string) {
        super(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire,emaildestinataire);
    }

    public abstract info(): string;
}

class Fragile extends Materiel {
    constructor(libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string,emaildestinataire: string) {
        super(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire,emaildestinataire);
    }

    public info(): string {
        return `Fragile - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}

class Incassable extends Materiel {
    constructor(libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string,emaildestinataire: string) {
        super(libelle, poids, nomClient, prenomClient, telephoneClient, adresseClient, nomDestinataire, prenomDestinataire, adresseDestinataire,emaildestinataire);
    }

    public info(): string {
        return `Incassable - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}

export { Produit, Alimentaire, Chimique, Fragile, Incassable };
