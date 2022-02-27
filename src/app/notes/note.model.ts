export interface INotes{
    Id?:string;
    content?:string;
}

export class Notes implements INotes{
    constructor(public Id?:string,public content?:string){}
}