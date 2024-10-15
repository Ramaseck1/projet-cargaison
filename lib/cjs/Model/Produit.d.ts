declare abstract class Produit {
    Typeproduit: string;
    libelle: string;
    poids: number;
    nomClient: string;
    prenomClient: string;
    telephoneClient: string;
    adresseClient: string;
    nomDestinataire: string;
    prenomDestinataire: string;
    adresseDestinataire: string;
    emaildestinataire: string;
    codeUnique: string;
    constructor(Typeproduit: string, libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    getLibelle(): string;
    setLibelle(libelle: string): void;
    getPoids(): number;
    setPoids(poids: number): void;
    abstract info(): string;
    static generateUniqueCode(): string;
}
declare class Alimentaire extends Produit {
    constructor(Typeproduit: string, libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    info(): string;
}
declare class Chimique extends Produit {
    toxicite: number;
    constructor(Typeproduit: string, libelle: string, poids: number, toxicite: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    getToxicite(): number;
    setToxicite(toxicite: number): void;
    info(): string;
}
declare abstract class Materiel extends Produit {
    constructor(Typeproduit: string, libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    abstract info(): string;
}
declare class Fragile extends Materiel {
    constructor(Typeproduit: string, libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    info(): string;
}
declare class Incassable extends Materiel {
    constructor(Typeproduit: string, libelle: string, poids: number, nomClient: string, prenomClient: string, telephoneClient: string, adresseClient: string, nomDestinataire: string, prenomDestinataire: string, adresseDestinataire: string, emaildestinataire: string);
    info(): string;
}
export { Produit, Alimentaire, Chimique, Fragile, Incassable };
