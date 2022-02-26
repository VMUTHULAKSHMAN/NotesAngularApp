export interface INotes{
    Id?:number;
    content?:string;
}

export class Notes implements INotes{
    constructor(public Id?:number,public content?:string){}
}