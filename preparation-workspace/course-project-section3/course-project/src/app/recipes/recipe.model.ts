
export class Recipe{
    title:string='';
    description:string='';
    imageUrl:string='';

    constructor(title:string,desc:string,imageUrl:string){
        this.title = title;
        this.description = desc;
        this.imageUrl = imageUrl;
    }
}