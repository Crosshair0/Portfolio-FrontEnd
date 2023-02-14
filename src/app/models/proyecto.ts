export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    img: string;
    urlP: string;

    constructor(nombreP:string,descripcionP:string,img:string,urlP:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
        this.urlP = urlP;
    }
}
