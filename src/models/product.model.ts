export interface ProductI{
    id:string
    title:string
    url:string
    price:number
}
export interface CannabisProductI extends ProductI{
    typeStrain:string
    geneticOrigin:string
    type:string
    effect:string
    aroma:string
}
export interface VapeProductI extends ProductI{
    description:string
}

