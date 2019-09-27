
export class Meal{
    constructor(id,name,image,category,area,instuctions,tags,ingredients,mesures,source){
        this.id=id;
        this.name=name;
        this.image=image;
        this.category=category;
        this.area=area;
        this.instuctions=instuctions;
        this.tags=tags;
        this.ingredients=ingredients;
        this.mesures=mesures;
        this.source=source
}
}

export class Category{
    constructor(id,name,image){
        this.id=id;
        this.name=name;
        this.image=image
    }
}