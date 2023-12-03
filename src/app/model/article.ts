export class Article {
    public id: number;
    public nom: string;
    public prenom: string;
    public photo:string;
    constructor(id:number, nom:string, prenom:string,photo:string,email: string) { 
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.photo=photo;
    }
    }